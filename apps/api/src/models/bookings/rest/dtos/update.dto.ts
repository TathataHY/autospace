import { ApiProperty, PartialType } from '@nestjs/swagger'
import { Booking } from '@prisma/client'
import { CreateBooking } from './create.dto'

export class UpdateBooking extends PartialType(CreateBooking) {
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  id: Booking['id']
}
