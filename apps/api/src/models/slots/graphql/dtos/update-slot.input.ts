import { Field, InputType, Int, PartialType } from '@nestjs/graphql'
import { Slot } from '@prisma/client'
import { CreateSlotInput } from './create-slot.input'

@InputType()
export class UpdateSlotInput extends PartialType(CreateSlotInput) {
  @Field(() => Int)
  id: Slot['id']
}
