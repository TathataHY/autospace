import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import {
  DateTimeFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input'
import { UserRelationFilter } from 'src/models/users/graphql/dtos/where.args'
import { VerificationListRelationFilter } from 'src/models/verifications/graphql/dtos/where.args'

@InputType()
export class AdminWhereUniqueInput {
  @Field()
  uid: string
}

@InputType()
export class AdminWhereInputStrict
  implements RestrictProperties<AdminWhereInputStrict, Prisma.AdminWhereInput>
{
  @Field(() => StringFilter)
  uid: StringFilter
  @Field(() => DateTimeFilter)
  createdAt: DateTimeFilter
  @Field(() => DateTimeFilter)
  updatedAt: DateTimeFilter
  @Field(() => UserRelationFilter)
  user: UserRelationFilter
  @Field(() => VerificationListRelationFilter)
  verifications: VerificationListRelationFilter
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  @Field(() => [AdminWhereInputStrict])
  AND: AdminWhereInputStrict[]
  @Field(() => [AdminWhereInputStrict])
  OR: AdminWhereInputStrict[]
  @Field(() => [AdminWhereInputStrict])
  NOT: AdminWhereInputStrict[]
}

@InputType()
export class AdminWhereInput extends PartialType(AdminWhereInputStrict) {}

@InputType()
export class AdminListRelationFilter {
  @Field(() => AdminWhereInput, { nullable: true })
  every?: AdminWhereInput
  @Field(() => AdminWhereInput, { nullable: true })
  some?: AdminWhereInput
  @Field(() => AdminWhereInput, { nullable: true })
  none?: AdminWhereInput
}

@InputType()
export class AdminRelationFilter {
  @Field(() => AdminWhereInput, { nullable: true })
  is?: AdminWhereInput
  @Field(() => AdminWhereInput, { nullable: true })
  isNot?: AdminWhereInput
}
