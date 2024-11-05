import { Field, InputType, Int, PickType } from '@nestjs/graphql'
import { Garage, SlotType } from '@prisma/client'
import { Booking } from '../entity/booking.entity'
import { CreateValetAssignmentInputWithoutBookingId } from 'src/models/valet-assignments/graphql/dtos/create-valet-assignment.input'

@InputType()
export class CreateBookingInput extends PickType(
  Booking,
  ['startTime', 'endTime', 'vehicleNumber', 'phoneNumber', 'customerId'],
  InputType,
) {
  @Field(() => Int)
  garageId: Garage['id']
  @Field(() => SlotType)
  type: SlotType
  @Field({ nullable: true })
  pricePerHour?: number
  @Field({ nullable: true })
  totalPrice?: number
  @Field(() => CreateValetAssignmentInputWithoutBookingId, { nullable: true })
  valetAssignment?: CreateValetAssignmentInputWithoutBookingId
}
