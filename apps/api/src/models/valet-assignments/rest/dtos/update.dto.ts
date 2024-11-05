import { ApiProperty, PartialType } from '@nestjs/swagger'
import { ValetAssignment } from '@prisma/client'
import { IsInt } from 'class-validator'
import { CreateValetAssignment } from './create.dto'

export class UpdateValetAssignment extends PartialType(CreateValetAssignment) {
  @IsInt()
  @ApiProperty()
  bookingId: ValetAssignment['bookingId']
}
