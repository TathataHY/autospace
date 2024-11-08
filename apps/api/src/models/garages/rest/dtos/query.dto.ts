import { ApiProperty } from '@nestjs/swagger'
import { Prisma } from '@prisma/client'
import { IsIn, IsOptional } from 'class-validator'
import { BaseQueryDto } from 'src/common/dtos/common.dto'

export class GarageQueryDto extends BaseQueryDto {
  @IsOptional()
  @IsIn(Object.values(Prisma.GarageScalarFieldEnum))
  @ApiProperty({ required: false, enum: Prisma.GarageScalarFieldEnum })
  sortBy?: string

  @IsOptional()
  @IsIn(Object.values(Prisma.GarageScalarFieldEnum))
  @ApiProperty({ required: false, enum: Prisma.GarageScalarFieldEnum })
  searchBy?: string
}
