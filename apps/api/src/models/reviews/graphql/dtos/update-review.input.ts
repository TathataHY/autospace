import { CreateReviewInput } from './create-review.input'
import { Field, InputType, Int, PartialType } from '@nestjs/graphql'
import { Review } from '@prisma/client'

@InputType()
export class UpdateReviewInput extends PartialType(CreateReviewInput) {
  @Field(() => Int)
  id: Review['id']
}
