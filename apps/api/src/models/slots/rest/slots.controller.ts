import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common'

import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { checkRowLevelPermission } from 'src/common/auth/util'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { GetUserType } from 'src/common/types'
import { CreateSlot } from './dtos/create.dto'
import { SlotQueryDto } from './dtos/query.dto'
import { UpdateSlot } from './dtos/update.dto'
import { SlotEntity } from './entity/slot.entity'

@ApiTags('slots')
@Controller('slots')
export class SlotsController {
  constructor(private readonly prisma: PrismaService) {}

  @AllowAuthenticated()
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: SlotEntity })
  @Post()
  async create(
    @Body() createSlotDto: CreateSlot,
    @GetUser() user: GetUserType,
  ) {
    const garage = await this.prisma.garage.findUnique({
      where: { id: createSlotDto.garageId },
      include: { company: { include: { managers: true } } },
    })
    checkRowLevelPermission(
      user,
      garage.company.managers.map((manager) => manager.uid),
    )
    return this.prisma.slot.create({ data: createSlotDto })
  }

  @ApiOkResponse({ type: [SlotEntity] })
  @Get()
  findAll(@Query() { skip, take, order, sortBy }: SlotQueryDto) {
    return this.prisma.slot.findMany({
      ...(skip ? { skip: +skip } : null),
      ...(take ? { take: +take } : null),
      ...(sortBy ? { orderBy: { [sortBy]: order || 'asc' } } : null),
    })
  }

  @ApiOkResponse({ type: SlotEntity })
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.prisma.slot.findUnique({ where: { id } })
  }

  @ApiOkResponse({ type: SlotEntity })
  @ApiBearerAuth()
  @AllowAuthenticated()
  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateSlotDto: UpdateSlot,
    @GetUser() user: GetUserType,
  ) {
    const slot = await this.prisma.slot.findUnique({
      where: { id },
      include: {
        garage: {
          include: {
            company: {
              include: { managers: true },
            },
          },
        },
      },
    })
    checkRowLevelPermission(
      user,
      slot.garage.company.managers.map((manager) => manager.uid),
    )
    return this.prisma.slot.update({
      where: { id },
      data: updateSlotDto,
    })
  }

  @ApiBearerAuth()
  @AllowAuthenticated()
  @Delete(':id')
  async remove(@Param('id') id: number, @GetUser() user: GetUserType) {
    const slot = await this.prisma.slot.findUnique({
      where: { id },
      include: {
        garage: {
          include: {
            company: {
              include: { managers: true },
            },
          },
        },
      },
    })
    checkRowLevelPermission(
      user,
      slot.garage.company.managers.map((manager) => manager.uid),
    )
    return this.prisma.slot.delete({ where: { id } })
  }
}
