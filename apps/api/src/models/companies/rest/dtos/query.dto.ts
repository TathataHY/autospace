import { IsIn, IsOptional } from 'class-validator'
import { Prisma } from '@prisma/client'
import { BaseQueryDto } from 'src/common/dtos/common.dto'
import { ApiProperty } from '@nestjs/swagger'

export class CompanyQueryDto extends BaseQueryDto {
  @IsOptional()
  @IsIn(Object.values(Prisma.CompanyScalarFieldEnum))
  @ApiProperty({ enum: Prisma.CompanyScalarFieldEnum, required: false })
  sortBy?: string

  @IsOptional()
  @IsIn(Object.values(Prisma.CompanyScalarFieldEnum))
  @ApiProperty({ enum: Prisma.CompanyScalarFieldEnum, required: false })
  searchBy?: string
}
