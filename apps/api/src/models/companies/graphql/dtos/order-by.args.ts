import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { GarageOrderByRelationAggregateInput } from 'src/models/garages/graphql/dtos/order-by.args'
import { ManagerOrderByRelationAggregateInput } from 'src/models/managers/graphql/dtos/order-by.args'
import { ValetOrderByRelationAggregateInput } from 'src/models/valets/graphql/dtos/order-by.args'

@InputType()
export class CompanyOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      CompanyOrderByWithRelationInputStrict,
      Prisma.CompanyOrderByWithRelationInput
    >
{
  @Field(() => Prisma.SortOrder)
  id: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  displayName: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  description: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  createdAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  updatedAt: Prisma.SortOrder
  @Field(() => GarageOrderByRelationAggregateInput)
  garages: GarageOrderByRelationAggregateInput
  @Field(() => ManagerOrderByRelationAggregateInput)
  managers: ManagerOrderByRelationAggregateInput
  @Field(() => ValetOrderByRelationAggregateInput)
  valets: ValetOrderByRelationAggregateInput
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}

@InputType()
export class CompanyOrderByWithRelationInput extends PartialType(
  CompanyOrderByWithRelationInputStrict,
) {}

@InputType()
export class CompanyOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder, { nullable: true })
  _count?: Prisma.SortOrder
}
