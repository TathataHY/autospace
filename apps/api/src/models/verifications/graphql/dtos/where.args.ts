import { Field, InputType, Int, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import {
  BoolFilter,
  DateTimeFilter,
  IntFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input'
import { AdminRelationFilter } from 'src/models/admins/graphql/dtos/where.args'
import { GarageRelationFilter } from 'src/models/garages/graphql/dtos/where.args'

@InputType()
export class VerificationWhereUniqueInput {
  @Field(() => Int)
  garageId: number
}

@InputType()
export class VerificationWhereInputStrict
  implements
    RestrictProperties<
      VerificationWhereInputStrict,
      Prisma.VerificationWhereInput
    >
{
  @Field(() => BoolFilter)
  verified: BoolFilter
  @Field(() => StringFilter)
  adminId: StringFilter
  @Field(() => IntFilter)
  garageId: IntFilter
  @Field(() => DateTimeFilter)
  createdAt: DateTimeFilter
  @Field(() => DateTimeFilter)
  updatedAt: DateTimeFilter

  @Field(() => AdminRelationFilter)
  admin: AdminRelationFilter
  @Field(() => GarageRelationFilter)
  garage: GarageRelationFilter

  @Field(() => [VerificationWhereInputStrict])
  AND: VerificationWhereInputStrict[]
  @Field(() => [VerificationWhereInputStrict])
  OR: VerificationWhereInputStrict[]
  @Field(() => [VerificationWhereInputStrict])
  NOT: VerificationWhereInputStrict[]
}

@InputType()
export class VerificationWhereInput extends PartialType(
  VerificationWhereInputStrict,
) {}

@InputType()
export class VerificationListRelationFilter {
  @Field(() => VerificationWhereInput, { nullable: true })
  every?: VerificationWhereInput
  @Field(() => VerificationWhereInput, { nullable: true })
  some?: VerificationWhereInput
  @Field(() => VerificationWhereInput, { nullable: true })
  none?: VerificationWhereInput
}

@InputType()
export class VerificationRelationFilter {
  @Field(() => VerificationWhereInput, { nullable: true })
  is?: VerificationWhereInput
  @Field(() => VerificationWhereInput, { nullable: true })
  isNot?: VerificationWhereInput
}
