import {
  ArgsType,
  Field,
  Int,
  PartialType,
  registerEnumType,
} from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { ManagerOrderByWithRelationInput } from './order-by.args'
import { ManagerWhereInput, ManagerWhereUniqueInput } from './where.args'

registerEnumType(Prisma.ManagerScalarFieldEnum, {
  name: 'ManagerScalarFieldEnum',
})

@ArgsType()
class FindManyManagerArgsStrict
  implements
    RestrictProperties<
      FindManyManagerArgsStrict,
      Omit<Prisma.ManagerFindManyArgs, 'include' | 'select'>
    >
{
  @Field(() => ManagerWhereInput)
  where: ManagerWhereInput
  @Field(() => [ManagerOrderByWithRelationInput])
  orderBy: ManagerOrderByWithRelationInput[]
  @Field(() => ManagerWhereUniqueInput)
  cursor: ManagerWhereUniqueInput
  @Field(() => Int)
  take: number
  @Field(() => Int)
  skip: number
  @Field(() => [Prisma.ManagerScalarFieldEnum])
  distinct: Prisma.ManagerScalarFieldEnum[]
}

@ArgsType()
export class FindManyManagerArgs extends PartialType(
  FindManyManagerArgsStrict,
) {}

@ArgsType()
export class FindUniqueManagerArgs {
  @Field(() => ManagerWhereUniqueInput)
  where: ManagerWhereUniqueInput
}
