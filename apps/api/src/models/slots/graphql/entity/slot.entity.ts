import { Field, Int, ObjectType } from '@nestjs/graphql'
import { $Enums, Slot as SlotType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Slot implements RestrictProperties<Slot, SlotType> {
  @Field(() => Int)
  id: number
  @Field({ nullable: true })
  displayName: string
  @Field()
  pricePerHour: number
  @Field(() => Int, { nullable: true })
  length: number
  @Field(() => Int, { nullable: true })
  width: number
  @Field(() => Int, { nullable: true })
  height: number
  @Field(() => $Enums.SlotType)
  type: $Enums.SlotType
  @Field(() => Int)
  garageId: number
  @Field()
  createdAt: Date
  @Field()
  updatedAt: Date
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}

@ObjectType()
export class ReturnCount {
  @Field(() => Int)
  count: number
}
