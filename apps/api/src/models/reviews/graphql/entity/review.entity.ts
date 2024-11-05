import { Field, Int, ObjectType } from '@nestjs/graphql'
import { Review as ReviewType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Review implements RestrictProperties<Review, ReviewType> {
  @Field(() => Int)
  id: number
  @Field(() => Int)
  garageId: number
  @Field()
  customerId: string
  @Field(() => Int)
  rating: number
  @Field({ nullable: true })
  comment: string
  @Field()
  createdAt: Date
  @Field()
  updatedAt: Date
}
