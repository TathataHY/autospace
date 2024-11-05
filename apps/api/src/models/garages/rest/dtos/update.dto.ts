import { ApiProperty, PartialType } from '@nestjs/swagger'
import { CreateGarage } from './create.dto'
import { Garage } from '@prisma/client'

export class UpdateGarage extends PartialType(CreateGarage) {
  @ApiProperty({ type: Number, required: true })
  id: Garage['id']
}
