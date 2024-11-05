import { ApiProperty } from '@nestjs/swagger'
import { Review } from '@prisma/client'
import { IsOptional } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class ReviewEntity implements RestrictProperties<ReviewEntity, Review> {
  id: number
  @ApiProperty({ type: 'integer' })
  rating: number
  @IsOptional()
  @ApiProperty()
  comment: string
  @ApiProperty()
  customerId: string
  @ApiProperty({ type: 'integer' })
  garageId: number
  createdAt: Date
  updatedAt: Date
}
