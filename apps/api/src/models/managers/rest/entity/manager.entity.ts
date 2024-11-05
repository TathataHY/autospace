import { ApiProperty } from '@nestjs/swagger'
import { Manager } from '@prisma/client'
import { IsInt, IsOptional, IsString } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class ManagerEntity
  implements RestrictProperties<ManagerEntity, Manager>
{
  uid: string
  @IsString()
  @IsOptional()
  @ApiProperty()
  displayName: string
  @IsInt()
  @ApiProperty({ type: 'integer' })
  companyId: number
  createdAt: Date
  updatedAt: Date
}
