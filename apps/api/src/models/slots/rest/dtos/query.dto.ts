import { IsIn, IsOptional } from 'class-validator'
import { Prisma } from '@prisma/client'
import { BaseQueryDto } from 'src/common/dtos/common.dto'
import { ApiProperty } from '@nestjs/swagger'

export class SlotQueryDto extends BaseQueryDto {
  @IsOptional()
  @IsIn(Object.values(Prisma.SlotScalarFieldEnum))
  @ApiProperty({ required: false, enum: Prisma.SlotScalarFieldEnum })
  sortBy?: string

  @IsOptional()
  @IsIn(Object.values(Prisma.SlotScalarFieldEnum))
  @ApiProperty({ required: false, enum: Prisma.SlotScalarFieldEnum })
  searchBy?: string
}
