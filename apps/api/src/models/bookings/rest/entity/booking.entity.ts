import { ApiProperty } from '@nestjs/swagger'
import { $Enums, Booking } from '@prisma/client'
import { IsOptional } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class BookingEntity
  implements RestrictProperties<BookingEntity, Booking>
{
  id: number
  @IsOptional()
  @ApiProperty()
  phoneNumber: string
  @IsOptional()
  @ApiProperty({ type: Number, format: 'float' })
  pricePerHour: number
  @IsOptional()
  @ApiProperty({ type: Number, format: 'float' })
  totalPrice: number
  @ApiProperty()
  startTime: Date
  @ApiProperty()
  endTime: Date
  @ApiProperty()
  vehicleNumber: string
  @IsOptional()
  @ApiProperty()
  passcode: string
  @ApiProperty({ enum: $Enums.BookingStatus })
  status: $Enums.BookingStatus
  @ApiProperty()
  slotId: number
  @ApiProperty()
  customerId: string
  createdAt: Date
  updatedAt: Date
}
