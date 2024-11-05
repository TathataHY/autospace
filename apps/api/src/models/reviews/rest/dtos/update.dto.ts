import { ApiProperty, PartialType } from '@nestjs/swagger'
import { CreateReview } from './create.dto'
import { Review } from '@prisma/client'

export class UpdateReview extends PartialType(CreateReview) {
  @ApiProperty({ type: 'integer' })
  id: Review['id']
}
