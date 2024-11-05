import {
  ArgsType,
  Field,
  InputType,
  Int,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql'
import { Prisma } from '@prisma/client'

export type RestrictProperties<T, U> = {
  [K in keyof T]: K extends keyof U ? T[K] : never
} & Required<U>

// implements Prisma.DateTimeFilter
@InputType()
export class DateTimeFilter {
  @Field({ nullable: true })
  equals?: string;
  @Field(() => [String], { nullable: true })
  in?: string[]
  @Field(() => [String], { nullable: true })
  notIn?: string[]
  @Field({ nullable: true })
  lt?: string
  @Field({ nullable: true })
  lte?: string
  @Field({ nullable: true })
  gt?: string
  @Field({ nullable: true })
  gte?: string
}

registerEnumType(Prisma.QueryMode, {
  name: 'QueryMode',
})

// implements Required<Prisma.StringFilter>
@InputType()
export class StringFilter {
  @Field({ nullable: true })
  equals?: string;
  @Field(() => [String], { nullable: true })
  in?: string[]
  @Field(() => [String], { nullable: true })
  notIn?: string[]
  @Field({ nullable: true })
  lt?: string
  @Field({ nullable: true })
  lte?: string
  @Field({ nullable: true })
  gt?: string
  @Field({ nullable: true })
  gte?: string
  @Field({ nullable: true })
  contains?: string
  @Field({ nullable: true })
  startsWith?: string
  @Field({ nullable: true })
  endsWith?: string
  @Field({ nullable: true })
  not?: string
  @Field(() => Prisma.QueryMode, { nullable: true })
  mode?: Prisma.QueryMode
}
@InputType()
export class StringListFilter {
  @Field(() => [String], { nullable: true })
  equals?: string[]
  @Field({ nullable: true })
  has?: string
  @Field(() => [String], { nullable: true })
  hasEvery?: string[]
  @Field(() => [String], { nullable: true })
  hasSome?: string[]
  @Field({ nullable: true })
  isEmpty?: boolean
}

@InputType()
export class BoolFilter {
  @Field({ nullable: true })
  equals?: boolean
  @Field({ nullable: true })
  not?: boolean
}

// implements Required<Prisma.IntFilter>
@InputType()
export class IntFilter {
  @Field(() => Int, { nullable: true })
  equals?: number
  @Field(() => Int, { nullable: true })
  lt?: number
  @Field(() => Int, { nullable: true })
  lte?: number
  @Field(() => Int, { nullable: true })
  gt?: number
  @Field(() => Int, { nullable: true })
  gte?: number
}

@InputType()
export class FloatFilter {
  @Field({ nullable: true })
  equals?: number
  @Field({ nullable: true })
  lt?: number
  @Field({ nullable: true })
  lte?: number
  @Field({ nullable: true })
  gt?: number
  @Field({ nullable: true })
  gte?: number
  @Field({ nullable: true })
  not?: number
}

registerEnumType(Prisma.SortOrder, {
  name: 'SortOrder',
})

@ObjectType()
export class AggregateCountOutput {
  @Field(() => Int)
  count: number
}

@InputType()
export class LocationFilterInput {
  @Field()
  ne_lat: number

  @Field()
  ne_lng: number

  @Field()
  sw_lat: number

  @Field()
  sw_lng: number
}

@ArgsType()
export class PaginationInput {
  @Field(() => Int, { nullable: true })
  take?: number
  @Field(() => Int, { nullable: true })
  skip?: number
}
