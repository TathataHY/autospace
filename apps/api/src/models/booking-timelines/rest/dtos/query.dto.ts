import { ApiProperty } from '@nestjs/swagger'
import { Prisma } from '@prisma/client'
import { IsIn, IsOptional } from 'class-validator'
import { BaseQueryDto } from 'src/common/dtos/common.dto'

export class BookingTimelineQueryDto extends BaseQueryDto {
  @IsOptional()
  @IsIn(Object.values(Prisma.BookingTimelineScalarFieldEnum))
  @ApiProperty({ required: false, enum: Prisma.BookingTimelineScalarFieldEnum })
  sortBy?: string

  @IsOptional()
  @IsIn(Object.values(Prisma.BookingTimelineScalarFieldEnum))
  @ApiProperty({ required: false, enum: Prisma.BookingTimelineScalarFieldEnum })
  searchBy?: string
}