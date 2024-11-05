import { ApiProperty } from '@nestjs/swagger'
import { $Enums, BookingTimeline } from '@prisma/client'
import { IsOptional } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class BookingTimelineEntity
  implements RestrictProperties<BookingTimelineEntity, BookingTimeline>
{
  id: number
  @ApiProperty()
  timestamp: Date
  @ApiProperty({ enum: $Enums.BookingStatus })
  status: $Enums.BookingStatus
  @ApiProperty()
  bookingId: number
  @ApiProperty()
  @IsOptional()
  valetId: string
  @ApiProperty()
  @IsOptional()
  managerId: string
}
