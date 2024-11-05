import {
  ArgsType,
  Field,
  Int,
  PartialType,
  registerEnumType,
} from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { VerificationOrderByWithRelationInput } from './order-by.args'
import {
  VerificationWhereInput,
  VerificationWhereUniqueInput,
} from './where.args'

registerEnumType(Prisma.VerificationScalarFieldEnum, {
  name: 'VerificationScalarFieldEnum',
})

@ArgsType()
class FindManyVerificationArgsStrict
  implements
    RestrictProperties<
      FindManyVerificationArgsStrict,
      Omit<Prisma.VerificationFindManyArgs, 'include' | 'select'>
    >
{
  @Field(() => VerificationWhereInput)
  where: VerificationWhereInput
  @Field(() => [VerificationOrderByWithRelationInput])
  orderBy: VerificationOrderByWithRelationInput[]
  @Field(() => VerificationWhereUniqueInput)
  cursor: VerificationWhereUniqueInput
  @Field(() => Int)
  take: number
  @Field(() => Int)
  skip: number
  @Field(() => [Prisma.VerificationScalarFieldEnum])
  distinct: Prisma.VerificationScalarFieldEnum[]
}

@ArgsType()
export class FindManyVerificationArgs extends PartialType(
  FindManyVerificationArgsStrict,
) {}

@ArgsType()
export class FindUniqueVerificationArgs {
  @Field(() => VerificationWhereUniqueInput)
  where: VerificationWhereUniqueInput
}
