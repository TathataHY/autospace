import {
  ArgsType,
  Field,
  Int,
  PartialType,
  registerEnumType,
} from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { UserOrderByWithRelationInput } from './order-by.args'
import { UserWhereInput, UserWhereUniqueInput } from './where.args'

registerEnumType(Prisma.UserScalarFieldEnum, {
  name: 'UserScalarFieldEnum',
})

@ArgsType()
class FindManyUserArgsStrict
  implements
    RestrictProperties<
      FindManyUserArgsStrict,
      Omit<Prisma.UserFindManyArgs, 'include' | 'select'>
    >
{
  @Field(() => UserWhereInput)
  where: UserWhereInput
  @Field(() => [UserOrderByWithRelationInput])
  orderBy: UserOrderByWithRelationInput[]
  @Field(() => UserWhereUniqueInput)
  cursor: UserWhereUniqueInput
  @Field(() => Int)
  take: number
  @Field(() => Int)
  skip: number
  @Field(() => [Prisma.UserScalarFieldEnum])
  distinct: Prisma.UserScalarFieldEnum[]
}

@ArgsType()
export class FindManyUserArgs extends PartialType(FindManyUserArgsStrict) {}

@ArgsType()
export class FindUniqueUserArgs {
  @Field(() => UserWhereUniqueInput)
  where: UserWhereUniqueInput
}
