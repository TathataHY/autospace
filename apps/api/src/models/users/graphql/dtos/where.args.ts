import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import {
  DateTimeFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input'
import { CustomerRelationFilter } from 'src/models/customers/graphql/dtos/where.args'
import { ManagerRelationFilter } from 'src/models/managers/graphql/dtos/where.args'
import { ValetRelationFilter } from 'src/models/valets/graphql/dtos/where.args'

@InputType()
export class UserWhereUniqueInput {
  @Field()
  uid: string
}

@InputType()
export class UserWhereInputStrict
  implements
    RestrictProperties<
      UserWhereInputStrict,
      Omit<
        Prisma.UserWhereInput,
        'credentials' | 'authProvider' | 'admin' | 'image'
      >
    >
{
  @Field(() => ManagerRelationFilter)
  manager: ManagerRelationFilter
  @Field(() => ValetRelationFilter)
  valet: ValetRelationFilter
  @Field(() => CustomerRelationFilter)
  customer: CustomerRelationFilter
  @Field(() => StringFilter)
  uid: StringFilter
  @Field(() => StringFilter)
  name: StringFilter
  @Field(() => DateTimeFilter)
  createdAt: DateTimeFilter
  @Field(() => DateTimeFilter)
  updatedAt: DateTimeFilter

  @Field(() => [UserWhereInputStrict])
  AND: UserWhereInputStrict[]
  @Field(() => [UserWhereInputStrict])
  OR: UserWhereInputStrict[]
  @Field(() => [UserWhereInputStrict])
  NOT: UserWhereInputStrict[]
}

@InputType()
export class UserWhereInput extends PartialType(UserWhereInputStrict) {}

@InputType()
export class UserListRelationFilter {
  @Field(() => UserWhereInput, { nullable: true })
  every?: UserWhereInput
  @Field(() => UserWhereInput, { nullable: true })
  some?: UserWhereInput
  @Field(() => UserWhereInput, { nullable: true })
  none?: UserWhereInput
}

@InputType()
export class UserRelationFilter {
  @Field(() => UserWhereInput, { nullable: true })
  is?: UserWhereInput
  @Field(() => UserWhereInput, { nullable: true })
  isNot?: UserWhereInput
}
