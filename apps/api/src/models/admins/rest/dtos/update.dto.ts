import { ApiProperty, PartialType } from '@nestjs/swagger'
import { Admin } from '@prisma/client'
import { CreateAdmin } from './create.dto'

export class UpdateAdmin extends PartialType(CreateAdmin) {
  @ApiProperty({ type: String, required: true })
  uid: Admin['uid']
}
