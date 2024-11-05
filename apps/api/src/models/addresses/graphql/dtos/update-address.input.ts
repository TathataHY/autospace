import { Field, InputType, Int, PartialType } from '@nestjs/graphql'
import { Address } from '@prisma/client'
import { CreateAddressInput } from './create-address.input'

@InputType()
export class UpdateAddressInput extends PartialType(CreateAddressInput) {
  @Field(() => Int)
  id: Address['id']
}
