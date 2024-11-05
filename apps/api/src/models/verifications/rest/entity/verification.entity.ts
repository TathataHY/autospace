import { ApiProperty } from '@nestjs/swagger'
import { Verification } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class VerificationEntity
  implements RestrictProperties<VerificationEntity, Verification>
{
  garageId: number
  @ApiProperty()
  verified: boolean
  @ApiProperty()
  adminId: string
  createdAt: Date
  updatedAt: Date
}
