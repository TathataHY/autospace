import { ApiProperty, PartialType } from '@nestjs/swagger'
import { CreateSlot } from './create.dto'
import { Slot } from '@prisma/client'

export class UpdateSlot extends PartialType(CreateSlot) {
  @ApiProperty({ type: 'integer', required: true })
  id: Slot['id']
}
