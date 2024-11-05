import {
  ArgsType,
  Field,
  Int,
  PartialType,
  registerEnumType,
} from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { BookingOrderByWithRelationInput } from './order-by.args'
import { BookingWhereInput, BookingWhereUniqueInput } from './where.args'

registerEnumType(Prisma.BookingScalarFieldEnum, {
  name: 'BookingScalarFieldEnum',
})

@ArgsType()
class FindManyBookingArgsStrict
  implements
    RestrictProperties<
      FindManyBookingArgsStrict,
      Omit<Prisma.BookingFindManyArgs, 'include' | 'select'>
    >
{
  @Field(() => BookingWhereInput)
  where: BookingWhereInput
  @Field(() => [BookingOrderByWithRelationInput])
  orderBy: BookingOrderByWithRelationInput[]
  @Field(() => BookingWhereUniqueInput)
  cursor: BookingWhereUniqueInput
  @Field(() => Int)
  take: number
  @Field(() => Int)
  skip: number
  @Field(() => [Prisma.BookingScalarFieldEnum])
  distinct: Prisma.BookingScalarFieldEnum[]
}

@ArgsType()
export class FindManyBookingArgs extends PartialType(
  FindManyBookingArgsStrict,
) {}

@ArgsType()
export class FindUniqueBookingArgs {
  @Field(() => BookingWhereUniqueInput)
  where: BookingWhereUniqueInput
}
