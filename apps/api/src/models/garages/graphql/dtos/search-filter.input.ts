import { Field, InputType, Int, ObjectType, PickType } from '@nestjs/graphql'
import { Slot } from 'src/models/slots/graphql/entity/slot.entity'
import { FindManyGarageArgs } from './find.args'

@InputType()
export class DateFilterInput {
  @Field()
  start: string
  @Field()
  end: string
}

@InputType()
export class GarageFilter extends PickType(
  FindManyGarageArgs,
  ['where', 'orderBy', 'skip', 'take'],
  InputType,
) {}

@ObjectType()
export class MinimalSlotGroupBy extends PickType(Slot, [
  'type',
  'pricePerHour',
]) {
  @Field(() => Int)
  count: number
}
