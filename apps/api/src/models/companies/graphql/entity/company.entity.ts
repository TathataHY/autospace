import { Field, Int, ObjectType } from '@nestjs/graphql'
import { Company as CompanyType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { Garage } from 'src/models/garages/graphql/entity/garage.entity'
import { Manager } from 'src/models/managers/graphql/entity/manager.entity'
import { Valet } from 'src/models/valets/graphql/entity/valet.entity'

interface CompanyTypeExtended extends CompanyType {
  garages: Garage[]
  managers: Manager[]
  valets: Valet[]
}

@ObjectType()
export class Company
  implements RestrictProperties<Company, CompanyTypeExtended>
{
  @Field(() => Int)
  id: number
  @Field({ nullable: true })
  description: string
  @Field({ nullable: true })
  displayName: string
  @Field(() => [Garage])
  garages: Garage[]
  @Field(() => [Manager])
  managers: Manager[]
  @Field(() => [Valet])
  valets: Valet[]
  @Field()
  updatedAt: Date
  @Field()
  createdAt: Date
}
