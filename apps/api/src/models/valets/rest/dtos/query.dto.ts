import { ApiProperty } from '@nestjs/swagger'
import { Prisma } from '@prisma/client'
import { IsIn, IsOptional } from 'class-validator'
import { BaseQueryDto } from 'src/common/dtos/common.dto'

export class ValetQueryDto extends BaseQueryDto {
  @IsOptional()
  @IsIn(Object.values(Prisma.ValetScalarFieldEnum))
  @ApiProperty({ enum: Prisma.ValetScalarFieldEnum })
  sortBy?: string

  @IsOptional()
  @IsIn(Object.values(Prisma.ValetScalarFieldEnum))
  @ApiProperty({ enum: Prisma.ValetScalarFieldEnum })
  searchBy?: string
}
