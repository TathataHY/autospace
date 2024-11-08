import { InputType, PickType } from '@nestjs/graphql'
import { BookingTimeline } from '../entity/booking-timeline.entity'

@InputType()
export class CreateBookingTimelineInput extends PickType(
  BookingTimeline,
  ['status', 'bookingId'],
  InputType,
) {}
