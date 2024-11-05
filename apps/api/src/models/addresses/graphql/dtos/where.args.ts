import { Field, InputType, Int, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import {
  DateTimeFilter,
  FloatFilter,
  IntFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input'
import { GarageRelationFilter } from 'src/models/garages/graphql/dtos/where.args'

@InputType()
export class AddressWhereUniqueInput {
  @Field(() => Int)
  id: number
}

@InputType()
export class AddressWhereInputStrict
  implements
    RestrictProperties<AddressWhereInputStrict, Prisma.AddressWhereInput>
{
  @Field(() => IntFilter)
  id: IntFilter
  @Field(() => StringFilter)
  address: StringFilter
  @Field(() => FloatFilter)
  latitude: FloatFilter
  @Field(() => FloatFilter)
  longitude: FloatFilter
  @Field(() => IntFilter)
  garageId: IntFilter
  @Field(() => DateTimeFilter)
  createdAt: DateTimeFilter
  @Field(() => DateTimeFilter)
  updatedAt: DateTimeFilter
  @Field(() => GarageRelationFilter)
  garage: GarageRelationFilter

  @Field(() => [AddressWhereInputStrict])
  AND: AddressWhereInputStrict[]
  @Field(() => [AddressWhereInputStrict])
  OR: AddressWhereInputStrict[]
  @Field(() => [AddressWhereInputStrict])
  NOT: AddressWhereInputStrict[]
}

@InputType()
export class AddressWhereInput extends PartialType(AddressWhereInputStrict) {}

@InputType()
export class AddressListRelationFilter {
  @Field(() => AddressWhereInput, { nullable: true })
  every?: AddressWhereInput
  @Field(() => AddressWhereInput, { nullable: true })
  some?: AddressWhereInput
  @Field(() => AddressWhereInput, { nullable: true })
  none?: AddressWhereInput
}

@InputType()
export class AddressRelationFilter {
  @Field(() => AddressWhereInput, { nullable: true })
  is?: AddressWhereInput
  @Field(() => AddressWhereInput, { nullable: true })
  isNot?: AddressWhereInput
}
