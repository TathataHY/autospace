import { Field, InputType, Int, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import {
  DateTimeFilter,
  IntFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input'
import { CustomerRelationFilter } from 'src/models/customers/graphql/dtos/where.args'
import { GarageRelationFilter } from 'src/models/garages/graphql/dtos/where.args'

@InputType()
export class ReviewWhereUniqueInput {
  @Field(() => Int)
  id: number
}

@InputType()
export class ReviewWhereInputStrict
  implements
    RestrictProperties<ReviewWhereInputStrict, Prisma.ReviewWhereInput>
{
  @Field(() => IntFilter)
  id: IntFilter
  @Field(() => IntFilter)
  rating: IntFilter
  @Field(() => StringFilter)
  comment: StringFilter
  @Field(() => StringFilter)
  customerId: StringFilter
  @Field(() => IntFilter)
  garageId: IntFilter
  @Field(() => DateTimeFilter)
  createdAt: DateTimeFilter
  @Field(() => DateTimeFilter)
  updatedAt: DateTimeFilter
  @Field(() => CustomerRelationFilter)
  customer: CustomerRelationFilter
  @Field(() => GarageRelationFilter)
  garage: GarageRelationFilter

  @Field(() => [ReviewWhereInputStrict])
  AND: ReviewWhereInputStrict[]
  @Field(() => [ReviewWhereInputStrict])
  OR: ReviewWhereInputStrict[]
  @Field(() => [ReviewWhereInputStrict])
  NOT: ReviewWhereInputStrict[]
}

@InputType()
export class ReviewWhereInput extends PartialType(ReviewWhereInputStrict) {}

@InputType()
export class ReviewListRelationFilter {
  @Field(() => ReviewWhereInput, { nullable: true })
  every?: ReviewWhereInput
  @Field(() => ReviewWhereInput, { nullable: true })
  some?: ReviewWhereInput
  @Field(() => ReviewWhereInput, { nullable: true })
  none?: ReviewWhereInput
}

@InputType()
export class ReviewRelationFilter {
  @Field(() => ReviewWhereInput, { nullable: true })
  is?: ReviewWhereInput
  @Field(() => ReviewWhereInput, { nullable: true })
  isNot?: ReviewWhereInput
}
