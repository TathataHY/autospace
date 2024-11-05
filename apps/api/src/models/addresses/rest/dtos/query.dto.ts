import { IsIn, IsOptional } from 'class-validator'
import { Prisma } from '@prisma/client'
import { BaseQueryDto } from 'src/common/dtos/common.dto'
import { ApiProperty } from '@nestjs/swagger'

export class AddressQueryDto extends BaseQueryDto {
  @IsOptional()
  @IsIn(Object.values(Prisma.AddressScalarFieldEnum))
  @ApiProperty({ required: false, enum: Prisma.AddressScalarFieldEnum })
  sortBy?: string

  @IsOptional()
  @IsIn(Object.values(Prisma.AddressScalarFieldEnum))
  @ApiProperty({ required: false, enum: Prisma.AddressScalarFieldEnum })
  searchBy?: string
}
