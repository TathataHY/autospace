import {
  ArgsType,
  Field,
  Int,
  PartialType,
  registerEnumType,
} from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { CompanyOrderByWithRelationInput } from './order-by.args'
import { CompanyWhereInput, CompanyWhereUniqueInput } from './where.args'

registerEnumType(Prisma.CompanyScalarFieldEnum, {
  name: 'CompanyScalarFieldEnum',
})

@ArgsType()
class FindManyCompanyArgsStrict
  implements
    RestrictProperties<
      FindManyCompanyArgsStrict,
      Omit<Prisma.CompanyFindManyArgs, 'include' | 'select'>
    >
{
  @Field(() => CompanyWhereInput)
  where: CompanyWhereInput
  @Field(() => [CompanyOrderByWithRelationInput])
  orderBy: CompanyOrderByWithRelationInput[]
  @Field(() => CompanyWhereUniqueInput)
  cursor: CompanyWhereUniqueInput
  @Field(() => Int)
  take: number
  @Field(() => Int)
  skip: number
  @Field(() => [Prisma.CompanyScalarFieldEnum])
  distinct: Prisma.CompanyScalarFieldEnum[]
}

@ArgsType()
export class FindManyCompanyArgs extends PartialType(
  FindManyCompanyArgsStrict,
) {}

@ArgsType()
export class FindUniqueCompanyArgs {
  @Field(() => CompanyWhereUniqueInput)
  where: CompanyWhereUniqueInput
}
