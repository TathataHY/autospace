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
import { ValetAssignmentListRelationFilter } from 'src/models/valet-assignments/graphql/dtos/where.args'

@InputType()
export class ValetWhereUniqueInput {
  @Field()
  uid: string
}

@InputType()
export class ValetWhereInputStrict
  implements RestrictProperties<ValetWhereInputStrict, Prisma.ValetWhereInput>
{
  @Field(() => BookingTimelineListRelationFilter)
  bookingTimeline: BookingTimelineListRelationFilter
  @Field(() => ValetAssignmentListRelationFilter)
  pickupAssignments: ValetAssignmentListRelationFilter
  @Field(() => ValetAssignmentListRelationFilter)
  returnAssignments: ValetAssignmentListRelationFilter
  @Field(() => StringFilter)
  uid: StringFilter
  @Field(() => StringFilter)
  displayName: StringFilter
  @Field(() => StringFilter)
  image: StringFilter
  @Field(() => StringFilter)
  licenceID: StringFilter
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

  @Field(() => [ValetWhereInputStrict])
  AND: ValetWhereInputStrict[]
  @Field(() => [ValetWhereInputStrict])
  OR: ValetWhereInputStrict[]
  @Field(() => [ValetWhereInputStrict])
  NOT: ValetWhereInputStrict[]
}

@InputType()
export class ValetWhereInput extends PartialType(ValetWhereInputStrict) {}

@InputType()
export class ValetListRelationFilter {
  @Field(() => ValetWhereInput, { nullable: true })
  every?: ValetWhereInput
  @Field(() => ValetWhereInput, { nullable: true })
  some?: ValetWhereInput
  @Field(() => ValetWhereInput, { nullable: true })
  none?: ValetWhereInput
}

@InputType()
export class ValetRelationFilter {
  @Field(() => ValetWhereInput, { nullable: true })
  is?: ValetWhereInput
  @Field(() => ValetWhereInput, { nullable: true })
  isNot?: ValetWhereInput
}
