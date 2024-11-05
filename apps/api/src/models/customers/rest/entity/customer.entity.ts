import { ApiProperty } from '@nestjs/swagger'
import { Customer } from '@prisma/client'
import { IsOptional } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class CustomerEntity
  implements RestrictProperties<CustomerEntity, Customer>
{
  uid: string
  @IsOptional()
  @ApiProperty()
  displayName: string
  createdAt: Date
  updatedAt: Date
}
