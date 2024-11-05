import { ApiProperty } from '@nestjs/swagger'
import { IsIn, IsNumberString, IsOptional, IsString } from 'class-validator'

export class BaseQueryDto {
  @IsNumberString()
  @IsOptional()
  @ApiProperty({ required: false })
  skip?: number

  @IsNumberString()
  @IsOptional()
  @ApiProperty({ required: false })
  take?: number

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  search?: string

  @IsOptional()
  @IsIn(['asc', 'desc'])
  @ApiProperty({ required: false, enum: ['asc', 'desc'] })
  order?: 'asc' | 'desc'
}
