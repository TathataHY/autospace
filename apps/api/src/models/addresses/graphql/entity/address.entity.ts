import { Field, Int, ObjectType } from '@nestjs/graphql'
import { Address as AddressType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Address implements RestrictProperties<Address, AddressType> {
  @Field(() => Int)
  id: number
  @Field()
  address: string
  @Field()
  latitude: number
  @Field()
  longitude: number
  @Field(() => Int)
  garageId: number
  @Field()
  createdAt: Date
  @Field()
  updatedAt: Date
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}
