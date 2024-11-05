import {
  ArgsType,
  Field,
  Int,
  PartialType,
  registerEnumType,
} from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { ReviewOrderByWithRelationInput } from './order-by.args'
import { ReviewWhereInput, ReviewWhereUniqueInput } from './where.args'

registerEnumType(Prisma.ReviewScalarFieldEnum, {
  name: 'ReviewScalarFieldEnum',
})

@ArgsType()
class FindManyReviewArgsStrict
  implements
    RestrictProperties<
      FindManyReviewArgsStrict,
      Omit<Prisma.ReviewFindManyArgs, 'include' | 'select'>
    >
{
  @Field(() => ReviewWhereInput)
  where: ReviewWhereInput
  @Field(() => [ReviewOrderByWithRelationInput])
  orderBy: ReviewOrderByWithRelationInput[]
  @Field(() => ReviewWhereUniqueInput)
  cursor: ReviewWhereUniqueInput
  @Field(() => Int)
  take: number
  @Field(() => Int)
  skip: number
  @Field(() => [Prisma.ReviewScalarFieldEnum])
  distinct: Prisma.ReviewScalarFieldEnum[]
}

@ArgsType()
export class FindManyReviewArgs extends PartialType(FindManyReviewArgsStrict) {}

@ArgsType()
export class FindUniqueReviewArgs {
  @Field(() => ReviewWhereUniqueInput)
  where: ReviewWhereUniqueInput
}
