import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { checkRowLevelPermission } from 'src/common/auth/util'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { GetUserType } from 'src/common/types'
import { Valet } from 'src/models/valets/graphql/entity/valet.entity'
import { CreateValetAssignmentInput } from './dtos/create-valet-assignment.input'
import {
  FindManyValetAssignmentArgs,
  FindUniqueValetAssignmentArgs,
} from './dtos/find.args'
import { UpdateValetAssignmentInput } from './dtos/update-valet-assignment.input'
import { ValetAssignment } from './entity/valet-assignment.entity'
import { ValetAssignmentsService } from './valet-assignments.service'

@Resolver(() => ValetAssignment)
export class ValetAssignmentsResolver {
  constructor(
    private readonly valetAssignmentsService: ValetAssignmentsService,
    private readonly prisma: PrismaService,
  ) {}

  @AllowAuthenticated()
  @Mutation(() => ValetAssignment)
  createValetAssignment(
    @Args('createValetAssignmentInput') args: CreateValetAssignmentInput,
    @GetUser() user: GetUserType,
  ) {
    checkRowLevelPermission(user, [args.pickupValetId, args.returnValetId])
    return this.valetAssignmentsService.create(args)
  }

  @Query(() => [ValetAssignment], { name: 'valetAssignments' })
  findAll(@Args() args: FindManyValetAssignmentArgs) {
    return this.valetAssignmentsService.findAll(args)
  }

  @Query(() => ValetAssignment, { name: 'valetAssignment' })
  findOne(@Args() args: FindUniqueValetAssignmentArgs) {
    return this.valetAssignmentsService.findOne(args)
  }

  @AllowAuthenticated()
  @Mutation(() => ValetAssignment)
  async updateValetAssignment(
    @Args('updateValetAssignmentInput') args: UpdateValetAssignmentInput,
    @GetUser() user: GetUserType,
  ) {
    const valetAssignment = await this.prisma.valetAssignment.findUnique({
      where: { bookingId: args.bookingId },
    })
    checkRowLevelPermission(user, [
      valetAssignment.pickupValetId,
      valetAssignment.returnValetId,
    ])
    return this.valetAssignmentsService.update(args)
  }

  @AllowAuthenticated()
  @Mutation(() => ValetAssignment)
  async removeValetAssignment(
    @Args() args: FindUniqueValetAssignmentArgs,
    @GetUser() user: GetUserType,
  ) {
    const valetAssignment = await this.prisma.valetAssignment.findUnique(args)
    checkRowLevelPermission(user, [
      valetAssignment.pickupValetId,
      valetAssignment.returnValetId,
    ])
    return this.valetAssignmentsService.remove(args)
  }

  @ResolveField(() => Valet, { nullable: true })
  pickupValet(@Parent() valetAssignment: ValetAssignment) {
    if (!valetAssignment.pickupValetId) return null
    return this.prisma.valet.findUnique({
      where: { uid: valetAssignment.pickupValetId },
    })
  }

  @ResolveField(() => Valet, { nullable: true })
  returnValet(@Parent() valetAssignment: ValetAssignment) {
    if (!valetAssignment.returnValetId) return null
    return this.prisma.valet.findUnique({
      where: { uid: valetAssignment.returnValetId },
    })
  }
}
