import { ApiProperty, PartialType } from '@nestjs/swagger'
import { User } from '@prisma/client'
import { CreateUser } from './create.dto'

export class UpdateUser extends PartialType(CreateUser) {
  @ApiProperty({ type: String, required: true })
  uid: User['uid']
}
