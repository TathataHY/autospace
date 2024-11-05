import { IsIn, IsOptional } from 'class-validator'
import { Prisma } from '@prisma/client'
import { BaseQueryDto } from 'src/common/dtos/common.dto'
import { ApiProperty } from '@nestjs/swagger'

export class ReviewQueryDto extends BaseQueryDto {
  @IsOptional()
  @IsIn(Object.values(Prisma.ReviewScalarFieldEnum))
  @ApiProperty({ enum: Prisma.ReviewScalarFieldEnum })
  sortBy?: string

  @IsOptional()
  @IsIn(Object.values(Prisma.ReviewScalarFieldEnum))
  @ApiProperty({ enum: Prisma.ReviewScalarFieldEnum })
  searchBy?: string
}
