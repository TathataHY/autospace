import { Field, InputType, Int, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import {
  DateTimeFilter,
  FloatFilter,
  IntFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input'
import { BookingRelationFilter } from 'src/models/bookings/graphql/dtos/where.args'
import { ValetRelationFilter } from 'src/models/valets/graphql/dtos/where.args'

@InputType()
export class ValetAssignmentWhereUniqueInput {
  @Field(() => Int)
  bookingId: number
}

@InputType()
export class ValetAssignmentWhereInputStrict
  implements
    RestrictProperties<
      ValetAssignmentWhereInputStrict,
      Prisma.ValetAssignmentWhereInput
    >
{
  @Field(() => StringFilter)
  returnValetId: StringFilter
  @Field(() => IntFilter)
  bookingId: IntFilter
  @Field(() => FloatFilter)
  pickupLat: FloatFilter
  @Field(() => FloatFilter)
  pickupLng: FloatFilter
  @Field(() => FloatFilter)
  returnLat: FloatFilter
  @Field(() => FloatFilter)
  returnLng: FloatFilter
  @Field(() => StringFilter)
  pickupValetId: StringFilter
  @Field(() => DateTimeFilter)
  createdAt: DateTimeFilter
  @Field(() => DateTimeFilter)
  updatedAt: DateTimeFilter
  @Field(() => ValetRelationFilter)
  pickupValet: ValetRelationFilter
  @Field(() => ValetRelationFilter)
  returnValet: ValetRelationFilter
  @Field(() => BookingRelationFilter)
  booking: BookingRelationFilter
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  @Field(() => [ValetAssignmentWhereInputStrict])
  AND: ValetAssignmentWhereInputStrict[]
  @Field(() => [ValetAssignmentWhereInputStrict])
  OR: ValetAssignmentWhereInputStrict[]
  @Field(() => [ValetAssignmentWhereInputStrict])
  NOT: ValetAssignmentWhereInputStrict[]
}

@InputType()
export class ValetAssignmentWhereInput extends PartialType(
  ValetAssignmentWhereInputStrict,
) {}

@InputType()
export class ValetAssignmentListRelationFilter {
  @Field(() => ValetAssignmentWhereInput, { nullable: true })
  every?: ValetAssignmentWhereInput
  @Field(() => ValetAssignmentWhereInput, { nullable: true })
  some?: ValetAssignmentWhereInput
  @Field(() => ValetAssignmentWhereInput, { nullable: true })
  none?: ValetAssignmentWhereInput
}

@InputType()
export class ValetAssignmentRelationFilter {
  @Field(() => ValetAssignmentWhereInput, { nullable: true })
  is?: ValetAssignmentWhereInput
  @Field(() => ValetAssignmentWhereInput, { nullable: true })
  isNot?: ValetAssignmentWhereInput
}
