import { Field, InputType, Int, PartialType } from '@nestjs/graphql'
import { Verification } from '@prisma/client'
import { CreateVerificationInput } from './create-verification.input'

@InputType()
export class UpdateVerificationInput extends PartialType(
  CreateVerificationInput,
) {
  @Field(() => Int)
  garageId: Verification['garageId']
}
