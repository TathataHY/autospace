import { ApiProperty, PartialType } from '@nestjs/swagger'
import { Customer } from '@prisma/client'
import { CreateCustomer } from './create.dto'

export class UpdateCustomer extends PartialType(CreateCustomer) {
  @ApiProperty({ type: String, required: true })
  uid: Customer['uid']
}
