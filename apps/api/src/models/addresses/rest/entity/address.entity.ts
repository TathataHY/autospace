import { ApiProperty } from '@nestjs/swagger'
import { Address } from '@prisma/client'
import { IsNumber, IsString } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class AddressEntity
  implements RestrictProperties<AddressEntity, Address>
{
  id: number
  @IsString()
  @ApiProperty()
  address: string
  @IsNumber()
  @ApiProperty()
  latitude: number
  @IsNumber()
  @ApiProperty()
  longitude: number
  @IsNumber()
  @ApiProperty()
  garageId: number
  createdAt: Date
  updatedAt: Date
}
