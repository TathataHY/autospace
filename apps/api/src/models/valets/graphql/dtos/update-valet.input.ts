import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Valet } from '@prisma/client'
import { CreateValetInput } from './create-valet.input'

@InputType()
export class UpdateValetInput extends PartialType(CreateValetInput) {
  @Field(() => String)
  uid: Valet['uid']
}
