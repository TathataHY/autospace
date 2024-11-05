import {
  ArgsType,
  Field,
  registerEnumType,
  PartialType,
  Int,
} from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { CustomerOrderByWithRelationInput } from './order-by.args'
import { CustomerWhereInput, CustomerWhereUniqueInput } from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType(Prisma.CustomerScalarFieldEnum, {
  name: 'CustomerScalarFieldEnum',
})

@ArgsType()
class FindManyCustomerArgsStrict
  implements
    RestrictProperties<
      FindManyCustomerArgsStrict,
      Omit<Prisma.CustomerFindManyArgs, 'include' | 'select'>
    >
{
  @Field(() => CustomerWhereInput)
  where: CustomerWhereInput
  @Field(() => [CustomerOrderByWithRelationInput])
  orderBy: CustomerOrderByWithRelationInput[]
  @Field(() => CustomerWhereUniqueInput)
  cursor: CustomerWhereUniqueInput
  @Field(() => Int)
  take: number
  @Field(() => Int)
  skip: number
  @Field(() => [Prisma.CustomerScalarFieldEnum])
  distinct: Prisma.CustomerScalarFieldEnum[]
}

@ArgsType()
export class FindManyCustomerArgs extends PartialType(
  FindManyCustomerArgsStrict,
) {}

@ArgsType()
export class FindUniqueCustomerArgs {
  @Field(() => CustomerWhereUniqueInput)
  where: CustomerWhereUniqueInput
}
