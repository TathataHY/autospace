import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Customer } from '@prisma/client'
import { CreateCustomerInput } from './create-customer.input'

@InputType()
export class UpdateCustomerInput extends PartialType(CreateCustomerInput) {
  @Field(() => String)
  uid: Customer['uid']
}
