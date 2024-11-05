import { ApiProperty } from '@nestjs/swagger'
import { $Enums, Slot } from '@prisma/client'
import { IsOptional } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class SlotEntity implements RestrictProperties<SlotEntity, Slot> {
  id: number
  @IsOptional()
  @ApiProperty()
  displayName: string
  @ApiProperty()
  pricePerHour: number
  @IsOptional()
  @ApiProperty()
  length: number
  @IsOptional()
  @ApiProperty()
  width: number
  @IsOptional()
  @ApiProperty()
  height: number
  @ApiProperty({ enum: $Enums.SlotType })
  type: $Enums.SlotType
  @ApiProperty()
  garageId: number
  createdAt: Date
  updatedAt: Date
}
