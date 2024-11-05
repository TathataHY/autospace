import { ApiProperty, PartialType } from '@nestjs/swagger'
import { CreateManager } from './create.dto'
import { Manager } from '@prisma/client'

export class UpdateManager extends PartialType(CreateManager) {
  @ApiProperty({ type: String, required: true })
  uid: Manager['uid']
}
