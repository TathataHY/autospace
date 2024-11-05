import {
  Field,
  InputType,
  Int,
  PartialType,
  registerEnumType,
} from '@nestjs/graphql'
import { BookingStatus, Prisma } from '@prisma/client'
import {
  DateTimeFilter,
  FloatFilter,
  IntFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input'
import { BookingTimelineListRelationFilter } from 'src/models/booking-timelines/graphql/dtos/where.args'
import { CustomerRelationFilter } from 'src/models/customers/graphql/dtos/where.args'
import { SlotRelationFilter } from 'src/models/slots/graphql/dtos/where.args'
import { ValetAssignmentRelationFilter } from 'src/models/valet-assignments/graphql/dtos/where.args'

registerEnumType(BookingStatus, {
  name: 'BookingStatus',
})

@InputType()
export class BookingWhereUniqueInput {
  @Field(() => Int)
  id: number
}

@InputType()
export class EnumBookingStatusFilter {
  @Field(() => BookingStatus, { nullable: true })
  equals?: BookingStatus;
  @Field(() => [BookingStatus], { nullable: true })
  in?: BookingStatus[]
  @Field(() => [BookingStatus], { nullable: true })
  notIn?: BookingStatus[]
  @Field(() => BookingStatus, { nullable: true })
  not?: BookingStatus
}

@InputType()
export class BookingWhereInputStrict
  implements
    RestrictProperties<BookingWhereInputStrict, Prisma.BookingWhereInput>
{
  @Field(() => IntFilter)
  id: IntFilter
  @Field(() => FloatFilter)
  pricePerHour: FloatFilter
  @Field(() => FloatFilter)
  totalPrice: FloatFilter
  @Field(() => DateTimeFilter)
  startTime: DateTimeFilter
  @Field(() => DateTimeFilter)
  endTime: DateTimeFilter
  @Field(() => StringFilter)
  vehicleNumber: StringFilter
  @Field(() => StringFilter)
  phoneNumber: StringFilter
  @Field(() => StringFilter)
  passcode: StringFilter
  @Field(() => EnumBookingStatusFilter)
  status: EnumBookingStatusFilter
  @Field(() => IntFilter)
  slotId: IntFilter
  @Field(() => StringFilter)
  customerId: StringFilter
  @Field(() => DateTimeFilter)
  createdAt: DateTimeFilter
  @Field(() => DateTimeFilter)
  updatedAt: DateTimeFilter
  @Field(() => SlotRelationFilter)
  slot: SlotRelationFilter
  @Field(() => CustomerRelationFilter)
  customer: CustomerRelationFilter
  @Field(() => ValetAssignmentRelationFilter)
  valetAssignment: ValetAssignmentRelationFilter
  @Field(() => BookingTimelineListRelationFilter)
  bookingTimeline: BookingTimelineListRelationFilter
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  @Field(() => [BookingWhereInputStrict])
  AND: BookingWhereInputStrict[]
  @Field(() => [BookingWhereInputStrict])
  OR: BookingWhereInputStrict[]
  @Field(() => [BookingWhereInputStrict])
  NOT: BookingWhereInputStrict[]
}

@InputType()
export class BookingWhereInput extends PartialType(BookingWhereInputStrict) {}

@InputType()
export class BookingListRelationFilter {
  @Field(() => BookingWhereInputStrict, { nullable: true })
  every?: BookingWhereInputStrict
  @Field(() => BookingWhereInputStrict, { nullable: true })
  some?: BookingWhereInputStrict
  @Field(() => BookingWhereInputStrict, { nullable: true })
  none?: BookingWhereInputStrict
}

@InputType()
export class BookingRelationFilter {
  @Field(() => BookingWhereInputStrict, { nullable: true })
  is?: BookingWhereInputStrict
  @Field(() => BookingWhereInputStrict, { nullable: true })
  isNot?: BookingWhereInputStrict
}
