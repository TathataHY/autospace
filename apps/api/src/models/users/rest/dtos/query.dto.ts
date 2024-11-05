import { IsIn, IsOptional } from 'class-validator'
import { Prisma } from '@prisma/client'
import { BaseQueryDto } from 'src/common/dtos/common.dto'
import { ApiProperty } from '@nestjs/swagger'

export class UserQueryDto extends BaseQueryDto {
  @IsOptional()
  @IsIn(Object.values(Prisma.UserScalarFieldEnum))
  @ApiProperty({ required: false, enum: Prisma.UserScalarFieldEnum })
  sortBy?: string

  @IsOptional()
  @IsIn(Object.values(Prisma.UserScalarFieldEnum))
  @ApiProperty({ required: false, enum: Prisma.UserScalarFieldEnum })
  searchBy?: string
}
