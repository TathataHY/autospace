import { Field, Int, ObjectType } from '@nestjs/graphql'
import { Manager as ManagerType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Manager implements RestrictProperties<Manager, ManagerType> {
  @Field()
  uid: string
  @Field({ nullable: true })
  displayName: string
  @Field(() => Int, { nullable: true })
  companyId: number
  @Field()
  createdAt: Date
  @Field()
  updatedAt: Date
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}
