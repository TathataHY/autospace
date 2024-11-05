import { Field, Int, ObjectType } from '@nestjs/graphql'
import { Verification as VerificationType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Verification
  implements RestrictProperties<Verification, VerificationType>
{
  @Field(() => Int)
  garageId: number
  @Field()
  verified: boolean
  @Field()
  adminId: string
  @Field()
  createdAt: Date
  @Field()
  updatedAt: Date
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}
