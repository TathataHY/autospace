import { Field, Int, ObjectType, registerEnumType } from '@nestjs/graphql'
import { $Enums, Booking as BookingType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType($Enums.BookingStatus, {
  name: 'BookingStatus',
})

@ObjectType()
export class Booking implements RestrictProperties<Booking, BookingType> {
  @Field(() => Int)
  id: number
  @Field({ nullable: true })
  phoneNumber: string
  @Field({ nullable: true })
  pricePerHour: number
  @Field({ nullable: true })
  totalPrice: number
  @Field()
  startTime: Date
  @Field()
  endTime: Date
  @Field()
  vehicleNumber: string
  @Field({ nullable: true })
  passcode: string
  @Field(() => $Enums.BookingStatus)
  status: $Enums.BookingStatus
  @Field(() => Int)
  slotId: number
  @Field()
  customerId: string
  @Field()
  createdAt: Date
  @Field()
  updatedAt: Date
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}
