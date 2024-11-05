import { ApiProperty } from '@nestjs/swagger'
import { Prisma } from '@prisma/client'
import { IsIn, IsOptional } from 'class-validator'
import { BaseQueryDto } from 'src/common/dtos/common.dto'

export class ValetAssignmentQueryDto extends BaseQueryDto {
  @IsOptional()
  @IsIn(Object.values(Prisma.ValetAssignmentScalarFieldEnum))
  @ApiProperty({ enum: Prisma.ValetAssignmentScalarFieldEnum })
  sortBy?: string

  @IsOptional()
  @IsIn(Object.values(Prisma.ValetAssignmentScalarFieldEnum))
  @ApiProperty({ enum: Prisma.ValetAssignmentScalarFieldEnum })
  searchBy?: string
}
