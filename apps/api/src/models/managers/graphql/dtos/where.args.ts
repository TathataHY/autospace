import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import {
  DateTimeFilter,
  IntFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input'
import { BookingTimelineListRelationFilter } from 'src/models/booking-timelines/graphql/dtos/where.args'
import { CompanyRelationFilter } from 'src/models/companies/graphql/dtos/where.args'
import { UserRelationFilter } from 'src/models/users/graphql/dtos/where.args'

@InputType()
export class ManagerWhereUniqueInput {
  @Field()
  uid: string
}

@InputType()
export class ManagerWhereInputStrict
  implements
    RestrictProperties<ManagerWhereInputStrict, Prisma.ManagerWhereInput>
{
  @Field(() => StringFilter)
  uid: StringFilter
  @Field(() => StringFilter)
  displayName: StringFilter
  @Field(() => IntFilter)
  companyId: IntFilter
  @Field(() => DateTimeFilter)
  createdAt: DateTimeFilter
  @Field(() => DateTimeFilter)
  updatedAt: DateTimeFilter
  @Field(() => UserRelationFilter)
  user: UserRelationFilter
  @Field(() => CompanyRelationFilter)
  company: CompanyRelationFilter
  @Field(() => BookingTimelineListRelationFilter)
  bookingTimeline: BookingTimelineListRelationFilter
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  @Field(() => [ManagerWhereInputStrict])
  AND: ManagerWhereInputStrict[]
  @Field(() => [ManagerWhereInputStrict])
  OR: ManagerWhereInputStrict[]
  @Field(() => [ManagerWhereInputStrict])
  NOT: ManagerWhereInputStrict[]
}

@InputType()
export class ManagerWhereInput extends PartialType(ManagerWhereInputStrict) {}

@InputType()
export class ManagerListRelationFilter {
  @Field(() => ManagerWhereInput, { nullable: true })
  every?: ManagerWhereInput
  @Field(() => ManagerWhereInput, { nullable: true })
  some?: ManagerWhereInput
  @Field(() => ManagerWhereInput, { nullable: true })
  none?: ManagerWhereInput
}

@InputType()
export class ManagerRelationFilter {
  @Field(() => ManagerWhereInput, { nullable: true })
  is?: ManagerWhereInput
  @Field(() => ManagerWhereInput, { nullable: true })
  isNot?: ManagerWhereInput
}
