import { ApiProperty, PartialType } from '@nestjs/swagger'
import { Verification } from '@prisma/client'
import { IsInt } from 'class-validator'
import { CreateVerification } from './create.dto'

export class UpdateVerification extends PartialType(CreateVerification) {
  @IsInt()
  @ApiProperty()
  garageId: Verification['garageId']
}
