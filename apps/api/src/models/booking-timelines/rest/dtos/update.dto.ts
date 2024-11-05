import { ApiProperty, PartialType } from '@nestjs/swagger'
import { CreateBookingTimeline } from './create.dto'
import { BookingTimeline } from '@prisma/client'

export class UpdateBookingTimeline extends PartialType(CreateBookingTimeline) {
  @ApiProperty({ type: Number, required: true })
  id: BookingTimeline['id']
}
