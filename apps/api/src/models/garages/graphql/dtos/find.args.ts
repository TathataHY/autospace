import {
  ArgsType,
  Field,
  Int,
  PartialType,
  registerEnumType,
} from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { GarageOrderByWithRelationInput } from './order-by.args'
import { GarageWhereInput, GarageWhereUniqueInput } from './where.args'

registerEnumType(Prisma.GarageScalarFieldEnum, {
  name: 'GarageScalarFieldEnum',
})

@ArgsType()
class FindManyGarageArgsStrict
  implements
    RestrictProperties<
      FindManyGarageArgsStrict,
      Omit<Prisma.GarageFindManyArgs, 'include' | 'select'>
    >
{
  @Field(() => GarageWhereInput)
  where: GarageWhereInput
  @Field(() => [GarageOrderByWithRelationInput])
  orderBy: GarageOrderByWithRelationInput[]
  @Field(() => GarageWhereUniqueInput)
  cursor: GarageWhereUniqueInput
  @Field(() => Int)
  take: number
  @Field(() => Int)
  skip: number
  @Field(() => [Prisma.GarageScalarFieldEnum])
  distinct: Prisma.GarageScalarFieldEnum[]
}

@ArgsType()
export class FindManyGarageArgs extends PartialType(FindManyGarageArgsStrict) {}

@ArgsType()
export class FindUniqueGarageArgs {
  @Field(() => GarageWhereUniqueInput)
  where: GarageWhereUniqueInput
}
