import {
  Field,
  InputType,
  Int,
  PartialType,
  registerEnumType,
} from '@nestjs/graphql'
import { $Enums, Prisma } from '@prisma/client'
import {
  DateTimeFilter,
  FloatFilter,
  IntFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input'
import { BookingListRelationFilter } from 'src/models/bookings/graphql/dtos/where.args'
import { GarageRelationFilter } from 'src/models/garages/graphql/dtos/where.args'

registerEnumType($Enums.SlotType, {
  name: 'SlotType',
})

@InputType()
export class SlotWhereUniqueInput {
  @Field(() => Int)
  id: number
}

@InputType()
export class EnumSlotTypeFilter {
  @Field(() => $Enums.SlotType, { nullable: true })
  equals?: $Enums.SlotType;
  @Field(() => [$Enums.SlotType], { nullable: true })
  in?: $Enums.SlotType[]
  @Field(() => [$Enums.SlotType], { nullable: true })
  notIn?: $Enums.SlotType[]
  @Field(() => $Enums.SlotType, { nullable: true })
  not?: $Enums.SlotType
}

@InputType()
export class SlotWhereInputStrict
  implements RestrictProperties<SlotWhereInputStrict, Prisma.SlotWhereInput>
{
  @Field(() => IntFilter)
  id: IntFilter
  @Field(() => StringFilter)
  displayName: StringFilter
  @Field(() => FloatFilter)
  pricePerHour: FloatFilter
  @Field(() => IntFilter)
  length: IntFilter
  @Field(() => IntFilter)
  width: IntFilter
  @Field(() => IntFilter)
  height: IntFilter
  @Field(() => EnumSlotTypeFilter)
  type: EnumSlotTypeFilter
  @Field(() => IntFilter)
  garageId: IntFilter
  @Field(() => DateTimeFilter)
  createdAt: DateTimeFilter
  @Field(() => DateTimeFilter)
  updatedAt: DateTimeFilter
  @Field(() => GarageRelationFilter)
  garage: GarageRelationFilter
  @Field(() => BookingListRelationFilter)
  bookings: BookingListRelationFilter

  @Field(() => [SlotWhereInputStrict])
  AND: SlotWhereInputStrict[]
  @Field(() => [SlotWhereInputStrict])
  OR: SlotWhereInputStrict[]
  @Field(() => [SlotWhereInputStrict])
  NOT: SlotWhereInputStrict[]
}

@InputType()
export class SlotWhereInput extends PartialType(SlotWhereInputStrict) {}

@InputType()
export class SlotListRelationFilter {
  @Field(() => SlotWhereInput, { nullable: true })
  every?: SlotWhereInput
  @Field(() => SlotWhereInput, { nullable: true })
  some?: SlotWhereInput
  @Field(() => SlotWhereInput, { nullable: true })
  none?: SlotWhereInput
}

@InputType()
export class SlotRelationFilter {
  @Field(() => SlotWhereInput, { nullable: true })
  is?: SlotWhereInput
  @Field(() => SlotWhereInput, { nullable: true })
  isNot?: SlotWhereInput
}
