import { IsIn, IsOptional } from 'class-validator'
import { Prisma } from '@prisma/client'
import { BaseQueryDto } from 'src/common/dtos/common.dto'
import { ApiProperty } from '@nestjs/swagger'

export class AdminQueryDto extends BaseQueryDto {
  @IsOptional()
  @IsIn(Object.values(Prisma.AdminScalarFieldEnum))
  @ApiProperty({ required: false, enum: Prisma.AdminScalarFieldEnum })
  sortBy?: string

  @IsOptional()
  @IsIn(Object.values(Prisma.AdminScalarFieldEnum))
  @ApiProperty({ required: false, enum: Prisma.AdminScalarFieldEnum })
  searchBy?: string
}
