import { Field, InputType, Int, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import {
  DateTimeFilter,
  IntFilter,
  RestrictProperties,
  StringFilter,
  StringListFilter,
} from 'src/common/dtos/common.input'
import { AddressRelationFilter } from 'src/models/addresses/graphql/dtos/where.args'
import { CompanyRelationFilter } from 'src/models/companies/graphql/dtos/where.args'
import { ReviewListRelationFilter } from 'src/models/reviews/graphql/dtos/where.args'
import { SlotListRelationFilter } from 'src/models/slots/graphql/dtos/where.args'
import { VerificationRelationFilter } from 'src/models/verifications/graphql/dtos/where.args'

@InputType()
export class GarageWhereUniqueInput {
  @Field(() => Int)
  id: number
}

@InputType()
export class GarageWhereInputStrict
  implements
    RestrictProperties<GarageWhereInputStrict, Prisma.GarageWhereInput>
{
  @Field(() => IntFilter)
  id: IntFilter
  @Field(() => StringFilter)
  displayName: StringFilter
  @Field(() => StringFilter)
  description: StringFilter
  @Field(() => StringListFilter)
  images: StringListFilter
  @Field(() => IntFilter)
  companyId: IntFilter
  @Field(() => DateTimeFilter)
  createdAt: DateTimeFilter
  @Field(() => DateTimeFilter)
  updatedAt: DateTimeFilter
  @Field(() => CompanyRelationFilter)
  company: CompanyRelationFilter
  @Field(() => AddressRelationFilter)
  address: AddressRelationFilter
  @Field(() => VerificationRelationFilter)
  verification: VerificationRelationFilter
  @Field(() => ReviewListRelationFilter)
  reviews: ReviewListRelationFilter
  @Field(() => SlotListRelationFilter)
  slots: SlotListRelationFilter
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  @Field(() => [GarageWhereInputStrict])
  AND: GarageWhereInputStrict[]
  @Field(() => [GarageWhereInputStrict])
  OR: GarageWhereInputStrict[]
  @Field(() => [GarageWhereInputStrict])
  NOT: GarageWhereInputStrict[]
}

@InputType()
export class GarageWhereInput extends PartialType(GarageWhereInputStrict) {}

@InputType()
export class GarageListRelationFilter {
  @Field(() => GarageWhereInput, { nullable: true })
  every?: GarageWhereInput
  @Field(() => GarageWhereInput, { nullable: true })
  some?: GarageWhereInput
  @Field(() => GarageWhereInput, { nullable: true })
  none?: GarageWhereInput
}

@InputType()
export class GarageRelationFilter {
  @Field(() => GarageWhereInput, { nullable: true })
  is?: GarageWhereInput
  @Field(() => GarageWhereInput, { nullable: true })
  isNot?: GarageWhereInput
}
