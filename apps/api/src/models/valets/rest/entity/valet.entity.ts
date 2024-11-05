import { ApiProperty } from '@nestjs/swagger'
import { Valet } from '@prisma/client'
import { IsInt, IsOptional } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class ValetEntity implements RestrictProperties<ValetEntity, Valet> {
  uid: string
  @ApiProperty()
  displayName: string
  @IsOptional()
  @ApiProperty()
  image: string
  @ApiProperty()
  licenceID: string
  @IsInt()
  @IsOptional()
  @ApiProperty()
  companyId: number
  createdAt: Date
  updatedAt: Date
}
