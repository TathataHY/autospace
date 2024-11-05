import { Field, InputType, Int, PartialType } from '@nestjs/graphql'
import { BookingTimeline } from '@prisma/client'
import { CreateBookingTimelineInput } from './create-booking-timeline.input'

@InputType()
export class UpdateBookingTimelineInput extends PartialType(
  CreateBookingTimelineInput,
) {
  @Field(() => Int)
  id: BookingTimeline['id']
}
