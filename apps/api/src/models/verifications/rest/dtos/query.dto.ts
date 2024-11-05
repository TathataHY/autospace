import { ApiProperty } from '@nestjs/swagger'
import { Prisma } from '@prisma/client'
import { IsIn, IsOptional } from 'class-validator'
import { BaseQueryDto } from 'src/common/dtos/common.dto'

export class VerificationQueryDto extends BaseQueryDto {
  @IsOptional()
  @IsIn(Object.values(Prisma.VerificationScalarFieldEnum))
  @ApiProperty({ enum: Prisma.VerificationScalarFieldEnum })
  sortBy?: string

  @IsOptional()
  @IsIn(Object.values(Prisma.VerificationScalarFieldEnum))
  @ApiProperty({ enum: Prisma.VerificationScalarFieldEnum })
  searchBy?: string
}
