import { ApiProperty } from '@nestjs/swagger'
import { Company } from '@prisma/client'
import { IsOptional } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class CompanyEntity
  implements RestrictProperties<CompanyEntity, Company>
{
  id: number
  @IsOptional()
  @ApiProperty()
  displayName: string
  @IsOptional()
  @ApiProperty()
  description: string
  createdAt: Date
  updatedAt: Date
}
