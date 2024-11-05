import { ApiProperty } from '@nestjs/swagger'
import { Prisma } from '@prisma/client'
import { IsIn, IsOptional } from 'class-validator'
import { BaseQueryDto } from 'src/common/dtos/common.dto'

export class BookingQueryDto extends BaseQueryDto {
  @IsOptional()
  @IsIn(Object.values(Prisma.BookingScalarFieldEnum))
  @ApiProperty({ required: false, enum: Prisma.BookingScalarFieldEnum })
  sortBy?: string

  @IsOptional()
  @IsIn(Object.values(Prisma.BookingScalarFieldEnum))
  @ApiProperty({ required: false, enum: Prisma.BookingScalarFieldEnum })
  searchBy?: string
}
