import { Field, InputType, Int, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import {
  DateTimeFilter,
  IntFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input'
import { GarageListRelationFilter } from 'src/models/garages/graphql/dtos/where.args'
import { ManagerListRelationFilter } from 'src/models/managers/graphql/dtos/where.args'
import { ValetListRelationFilter } from 'src/models/valets/graphql/dtos/where.args'

@InputType()
export class CompanyWhereUniqueInput {
  @Field(() => Int)
  id: number
}

@InputType()
export class CompanyWhereInputStrict
  implements
    RestrictProperties<CompanyWhereInputStrict, Prisma.CompanyWhereInput>
{
  @Field(() => IntFilter)
  id: IntFilter
  @Field(() => StringFilter)
  displayName: StringFilter
  @Field(() => StringFilter)
  description: StringFilter
  @Field(() => DateTimeFilter)
  createdAt: DateTimeFilter
  @Field(() => DateTimeFilter)
  updatedAt: DateTimeFilter
  @Field(() => GarageListRelationFilter)
  garages: GarageListRelationFilter
  @Field(() => ManagerListRelationFilter)
  managers: ManagerListRelationFilter
  @Field(() => ValetListRelationFilter)
  valets: ValetListRelationFilter
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  @Field(() => [CompanyWhereInputStrict])
  AND: CompanyWhereInputStrict[]
  @Field(() => [CompanyWhereInputStrict])
  OR: CompanyWhereInputStrict[]
  @Field(() => [CompanyWhereInputStrict])
  NOT: CompanyWhereInputStrict[]
}

@InputType()
export class CompanyWhereInput extends PartialType(CompanyWhereInputStrict) {}

@InputType()
export class CompanyListRelationFilter {
  @Field(() => CompanyWhereInput, { nullable: true })
  every?: CompanyWhereInput
  @Field(() => CompanyWhereInput, { nullable: true })
  some?: CompanyWhereInput
  @Field(() => CompanyWhereInput, { nullable: true })
  none?: CompanyWhereInput
}

@InputType()
export class CompanyRelationFilter {
  @Field(() => CompanyWhereInput, { nullable: true })
  is?: CompanyWhereInput
  @Field(() => CompanyWhereInput, { nullable: true })
  isNot?: CompanyWhereInput
}
