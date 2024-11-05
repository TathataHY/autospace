import { Field, Int, ObjectType } from '@nestjs/graphql'
import { Valet as ValetType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Valet implements RestrictProperties<Valet, ValetType> {
  @Field()
  uid: string
  @Field()
  displayName: string
  @Field({ nullable: true })
  image: string
  @Field()
  licenceID: string
  @Field(() => Int, { nullable: true })
  companyId: number
  @Field()
  createdAt: Date
  @Field()
  updatedAt: Date
}
