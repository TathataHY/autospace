import {
  ArgsType,
  Field,
  Int,
  registerEnumType,
  PartialType,
} from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { AdminOrderByWithRelationInput } from './order-by.args'
import { AdminWhereInput, AdminWhereUniqueInput } from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType(Prisma.AdminScalarFieldEnum, {
  name: 'AdminScalarFieldEnum',
})

@ArgsType()
class FindManyAdminArgsStrict
  implements
    RestrictProperties<
      FindManyAdminArgsStrict,
      Omit<Prisma.AdminFindManyArgs, 'include' | 'select'>
    >
{
  @Field(() => AdminWhereInput)
  where: AdminWhereInput
  @Field(() => [AdminOrderByWithRelationInput])
  orderBy: AdminOrderByWithRelationInput[]
  @Field(() => AdminWhereUniqueInput)
  cursor: AdminWhereUniqueInput
  @Field(() => Int)
  take: number
  @Field(() => Int)
  skip: number
  @Field(() => [Prisma.AdminScalarFieldEnum])
  distinct: Prisma.AdminScalarFieldEnum[]
}

@ArgsType()
export class FindManyAdminArgs extends PartialType(FindManyAdminArgsStrict) {}

@ArgsType()
export class FindUniqueAdminArgs {
  @Field(() => AdminWhereUniqueInput)
  where: AdminWhereUniqueInput
}
