import { Field, InputType, Int, PartialType } from '@nestjs/graphql'
import { $Enums, Prisma } from '@prisma/client'
import {
  DateTimeFilter,
  IntFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input'
import { BookingRelationFilter } from 'src/models/bookings/graphql/dtos/where.args'
import { ManagerRelationFilter } from 'src/models/managers/graphql/dtos/where.args'
import { ValetRelationFilter } from 'src/models/valets/graphql/dtos/where.args'

@InputType()
export class BookingTimelineWhereUniqueInput {
  @Field(() => Int)
  id: number
}

@InputType()
export class BookingTimelineWhereInputStrict
  implements
    RestrictProperties<
      BookingTimelineWhereInputStrict,
      Prisma.BookingTimelineWhereInput
    >
{
  @Field(() => IntFilter)
  id: IntFilter
  @Field(() => DateTimeFilter)
  timestamp: DateTimeFilter
  @Field(() => $Enums.BookingStatus)
  status: $Enums.BookingStatus
  @Field(() => IntFilter)
  bookingId: IntFilter
  @Field(() => StringFilter)
  valetId: StringFilter
  @Field(() => StringFilter)
  managerId: StringFilter
  @Field(() => BookingRelationFilter)
  booking: BookingRelationFilter
  @Field(() => ValetRelationFilter)
  valet: ValetRelationFilter
  @Field(() => ManagerRelationFilter)
  manager: ManagerRelationFilter

  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  @Field(() => [BookingTimelineWhereInputStrict])
  AND: BookingTimelineWhereInputStrict[]
  @Field(() => [BookingTimelineWhereInputStrict])
  OR: BookingTimelineWhereInputStrict[]
  @Field(() => [BookingTimelineWhereInputStrict])
  NOT: BookingTimelineWhereInputStrict[]
}

@InputType()
export class BookingTimelineWhereInput extends PartialType(
  BookingTimelineWhereInputStrict,
) {}

@InputType()
export class BookingTimelineListRelationFilter {
  @Field(() => BookingTimelineWhereInput, { nullable: true })
  every?: BookingTimelineWhereInput
  @Field(() => BookingTimelineWhereInput, { nullable: true })
  some?: BookingTimelineWhereInput
  @Field(() => BookingTimelineWhereInput, { nullable: true })
  none?: BookingTimelineWhereInput
}

@InputType()
export class BookingTimelineRelationFilter {
  @Field(() => BookingTimelineWhereInput, { nullable: true })
  is?: BookingTimelineWhereInput
  @Field(() => BookingTimelineWhereInput, { nullable: true })
  isNot?: BookingTimelineWhereInput
}
