import { Field, InputType, Int, PartialType } from '@nestjs/graphql'
import { Booking } from '@prisma/client'
import { CreateBookingInput } from './create-booking.input'

@InputType()
export class UpdateBookingInput extends PartialType(CreateBookingInput) {
  @Field(() => Int)
  id: Booking['id']
}
