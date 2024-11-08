import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateCompanyInput } from './dtos/create-company.input'
import { FindManyCompanyArgs, FindUniqueCompanyArgs } from './dtos/find.args'
import { UpdateCompanyInput } from './dtos/update-company.input'

@Injectable()
export class CompaniesService {
  constructor(private readonly prisma: PrismaService) {}
  create(createCompanyInput: CreateCompanyInput) {
    return this.prisma.company.create({
      data: {
        description: createCompanyInput.description,
        displayName: createCompanyInput.displayName,
        managers: {
          create: {
            uid: createCompanyInput.managerId,
            displayName: createCompanyInput.managerName,
          },
        },
      },
    })
  }

  findAll(args: FindManyCompanyArgs) {
    return this.prisma.company.findMany(args)
  }

  findOne(args: FindUniqueCompanyArgs) {
    return this.prisma.company.findUnique(args)
  }

  update(updateCompanyInput: UpdateCompanyInput) {
    const { id, ...data } = updateCompanyInput
    return this.prisma.company.update({
      where: { id },
      data,
    })
  }

  remove(args: FindUniqueCompanyArgs) {
    return this.prisma.company.delete(args)
  }
}
