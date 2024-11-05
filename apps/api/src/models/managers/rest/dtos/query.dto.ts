import { ApiProperty } from '@nestjs/swagger'
import { Prisma } from '@prisma/client'
import { IsIn, IsOptional } from 'class-validator'
import { BaseQueryDto } from 'src/common/dtos/common.dto'

export class ManagerQueryDto extends BaseQueryDto {
  @IsOptional()
  @IsIn(Object.values(Prisma.ManagerScalarFieldEnum))
  @ApiProperty({ enum: Prisma.ManagerScalarFieldEnum })
  sortBy?: string

  @IsOptional()
  @IsIn(Object.values(Prisma.ManagerScalarFieldEnum))
  @ApiProperty({ enum: Prisma.ManagerScalarFieldEnum })
  searchBy?: string
}
