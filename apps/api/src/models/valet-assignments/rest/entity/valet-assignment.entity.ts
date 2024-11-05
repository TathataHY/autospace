import { ApiProperty } from '@nestjs/swagger'
import { ValetAssignment } from '@prisma/client'
import { IsNumber, IsOptional, IsString } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class ValetAssignmentEntity
  implements RestrictProperties<ValetAssignmentEntity, ValetAssignment>
{
  bookingId: number
  @IsString()
  @IsOptional()
  @ApiProperty()
  returnValetId: string
  @IsNumber()
  @IsOptional()
  @ApiProperty()
  pickupLat: number
  @IsNumber()
  @IsOptional()
  @ApiProperty()
  pickupLng: number
  @IsNumber()
  @IsOptional()
  @ApiProperty()
  returnLat: number
  @IsNumber()
  @IsOptional()
  @ApiProperty()
  returnLng: number
  @IsString()
  @IsOptional()
  @ApiProperty()
  pickupValetId: string
  createdAt: Date
  updatedAt: Date
}
