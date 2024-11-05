import { ApiProperty } from '@nestjs/swagger'
import { Prisma } from '@prisma/client'
import { IsIn, IsOptional } from 'class-validator'
import { BaseQueryDto } from 'src/common/dtos/common.dto'

export class CustomerQueryDto extends BaseQueryDto {
  @IsOptional()
  @IsIn(Object.values(Prisma.CustomerScalarFieldEnum))
  @ApiProperty({ required: false, enum: Prisma.CustomerScalarFieldEnum })
  sortBy?: string

  @IsOptional()
  @IsIn(Object.values(Prisma.CustomerScalarFieldEnum))
  @ApiProperty({ required: false, enum: Prisma.CustomerScalarFieldEnum })
  searchBy?: string
}
