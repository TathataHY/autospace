import {
  ArgsType,
  Field,
  Int,
  PartialType,
  registerEnumType,
} from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { ValetOrderByWithRelationInput } from './order-by.args'
import { ValetWhereInput, ValetWhereUniqueInput } from './where.args'

registerEnumType(Prisma.ValetScalarFieldEnum, {
  name: 'ValetScalarFieldEnum',
})

@ArgsType()
class FindManyValetArgsStrict
  implements
    RestrictProperties<
      FindManyValetArgsStrict,
      Omit<Prisma.ValetFindManyArgs, 'include' | 'select'>
    >
{
  @Field(() => ValetWhereInput)
  where: ValetWhereInput
  @Field(() => [ValetOrderByWithRelationInput])
  orderBy: ValetOrderByWithRelationInput[]
  @Field(() => ValetWhereUniqueInput)
  cursor: ValetWhereUniqueInput
  @Field(() => Int)
  take: number
  @Field(() => Int)
  skip: number
  @Field(() => [Prisma.ValetScalarFieldEnum])
  distinct: Prisma.ValetScalarFieldEnum[]
}

@ArgsType()
export class FindManyValetArgs extends PartialType(FindManyValetArgsStrict) {}

@ArgsType()
export class FindUniqueValetArgs {
  @Field(() => ValetWhereUniqueInput)
  where: ValetWhereUniqueInput
}
