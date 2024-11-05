import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import {
  DateTimeFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input'
import { BookingListRelationFilter } from 'src/models/bookings/graphql/dtos/where.args'
import { ReviewListRelationFilter } from 'src/models/reviews/graphql/dtos/where.args'
import { UserRelationFilter } from 'src/models/users/graphql/dtos/where.args'

@InputType()
export class CustomerWhereUniqueInput {
  @Field(() => String)
  uid: string
}

@InputType()
export class CustomerWhereInputStrict
  implements
    RestrictProperties<CustomerWhereInputStrict, Prisma.CustomerWhereInput>
{
  @Field(() => StringFilter)
  uid: StringFilter
  @Field(() => StringFilter)
  displayName: StringFilter
  @Field(() => DateTimeFilter)
  createdAt: DateTimeFilter
  @Field(() => DateTimeFilter)
  updatedAt: DateTimeFilter
  @Field(() => UserRelationFilter)
  user: UserRelationFilter
  @Field(() => BookingListRelationFilter)
  bookings: BookingListRelationFilter
  @Field(() => ReviewListRelationFilter)
  reviews: ReviewListRelationFilter
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  @Field(() => [CustomerWhereInputStrict])
  AND: CustomerWhereInputStrict[]
  @Field(() => [CustomerWhereInputStrict])
  OR: CustomerWhereInputStrict[]
  @Field(() => [CustomerWhereInputStrict])
  NOT: CustomerWhereInputStrict[]
}

@InputType()
export class CustomerWhereInput extends PartialType(CustomerWhereInputStrict) {}

@InputType()
export class CustomerListRelationFilter {
  @Field(() => CustomerWhereInput, { nullable: true })
  every?: CustomerWhereInput
  @Field(() => CustomerWhereInput, { nullable: true })
  some?: CustomerWhereInput
  @Field(() => CustomerWhereInput, { nullable: true })
  none?: CustomerWhereInput
}

@InputType()
export class CustomerRelationFilter {
  @Field(() => CustomerWhereInput, { nullable: true })
  is?: CustomerWhereInput
  @Field(() => CustomerWhereInput, { nullable: true })
  isNot?: CustomerWhereInput
}
