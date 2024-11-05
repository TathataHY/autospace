import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { GarageOrderByWithRelationInput } from 'src/models/garages/graphql/dtos/order-by.args'

@InputType()
export class AddressOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      AddressOrderByWithRelationInputStrict,
      Prisma.AddressOrderByWithRelationInput
    >
{
  @Field(() => Prisma.SortOrder)
  id: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  address: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  latitude: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  longitude: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  garageId: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  createdAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  updatedAt: Prisma.SortOrder
  @Field(() => GarageOrderByWithRelationInput)
  garage: GarageOrderByWithRelationInput
}

@InputType()
export class AddressOrderByWithRelationInput extends PartialType(
  AddressOrderByWithRelationInputStrict,
) {}

@InputType()
export class AddressOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder, { nullable: true })
  _count?: Prisma.SortOrder
}
