import { Field, InputType, Int, PartialType } from '@nestjs/graphql'
import { Garage } from '@prisma/client'
import { CreateGarageInput } from './create-garage.input'

@InputType()
export class UpdateGarageInput extends PartialType(CreateGarageInput) {
  @Field(() => Int)
  id: Garage['id']
}
