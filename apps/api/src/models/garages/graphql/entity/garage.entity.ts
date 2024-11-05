import { Field, Int, ObjectType } from '@nestjs/graphql'
import { Garage as GarageType, SlotType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Garage implements RestrictProperties<Garage, GarageType> {
  @Field(() => Int)
  id: number
  @Field({ nullable: true })
  description: string
  @Field({ nullable: true })
  displayName: string
  @Field(() => [String])
  images: string[]
  @Field(() => Int)
  companyId: number
  @Field()
  createdAt: Date
  @Field()
  updatedAt: Date
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}

@ObjectType()
export class SlotTypeCount {
  @Field(() => SlotType)
  type: SlotType
  @Field(() => Int, { nullable: true })
  count?: number
}
