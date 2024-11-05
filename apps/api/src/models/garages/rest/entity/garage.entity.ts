import { ApiProperty } from '@nestjs/swagger'
import { Garage } from '@prisma/client'
import { IsOptional } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class GarageEntity implements RestrictProperties<GarageEntity, Garage> {
  id: number
  @IsOptional()
  @ApiProperty()
  description: string
  @IsOptional()
  @ApiProperty()
  displayName: string
  @ApiProperty({ type: [String] })
  images: string[]
  @ApiProperty({ type: 'integer' })
  companyId: number
  createdAt: Date
  updatedAt: Date
}
