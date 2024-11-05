import { ApiProperty, PartialType } from '@nestjs/swagger'
import { Valet } from '@prisma/client'
import { IsString } from 'class-validator'
import { CreateValet } from './create.dto'

export class UpdateValet extends PartialType(CreateValet) {
  @IsString()
  @ApiProperty()
  uid: Valet['uid']
}
