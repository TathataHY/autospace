import {
  ArgsType,
  Field,
  Int,
  PartialType,
  registerEnumType,
} from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { ValetAssignmentOrderByWithRelationInput } from './order-by.args'
import {
  ValetAssignmentWhereInput,
  ValetAssignmentWhereUniqueInput,
} from './where.args'

registerEnumType(Prisma.ValetAssignmentScalarFieldEnum, {
  name: 'ValetAssignmentScalarFieldEnum',
})

@ArgsType()
class FindManyValetAssignmentArgsStrict
  implements
    RestrictProperties<
      FindManyValetAssignmentArgsStrict,
      Omit<Prisma.ValetAssignmentFindManyArgs, 'include' | 'select'>
    >
{
  @Field(() => ValetAssignmentWhereInput)
  where: ValetAssignmentWhereInput
  @Field(() => [ValetAssignmentOrderByWithRelationInput])
  orderBy: ValetAssignmentOrderByWithRelationInput[]
  @Field(() => ValetAssignmentWhereUniqueInput)
  cursor: ValetAssignmentWhereUniqueInput
  @Field(() => Int)
  take: number
  @Field(() => Int)
  skip: number
  @Field(() => [Prisma.ValetAssignmentScalarFieldEnum])
  distinct: Prisma.ValetAssignmentScalarFieldEnum[]
}

@ArgsType()
export class FindManyValetAssignmentArgs extends PartialType(
  FindManyValetAssignmentArgsStrict,
) {}

@ArgsType()
export class FindUniqueValetAssignmentArgs {
  @Field(() => ValetAssignmentWhereUniqueInput)
  where: ValetAssignmentWhereUniqueInput
}
