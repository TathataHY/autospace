import { Field, InputType, OmitType } from '@nestjs/graphql'
import { ValetAssignment } from '../entity/valet-assignment.entity'

@InputType()
export class CreateValetAssignmentInput extends OmitType(
  ValetAssignment,
  ['createdAt', 'updatedAt'],
  InputType,
) {}

@InputType()
export class CreateValetAssignmentInputWithoutBookingId {
  @Field()
  pickupLat: number
  @Field()
  pickupLng: number
  @Field({ nullable: true })
  returnLat?: number
  @Field({ nullable: true })
  returnLng?: number
}
