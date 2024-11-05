import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never }
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never
    }
export const namedOperations = {
  Query: {
    Companies: 'Companies',
    GetAuthProvider: 'GetAuthProvider',
    SearchGarages: 'SearchGarages',
    MyCompany: 'MyCompany',
    Garages: 'Garages',
    BookingsForCustomer: 'BookingsForCustomer',
    BookingsForGarage: 'BookingsForGarage',
    ValetMe: 'ValetMe',
    AdminMe: 'AdminMe',
    companyValets: 'companyValets',
    valetPickups: 'valetPickups',
    valetDrops: 'valetDrops',
    myPickupTrips: 'myPickupTrips',
    myDropTrips: 'myDropTrips',
    admins: 'admins',
  },
  Mutation: {
    RegisterWithCredentials: 'RegisterWithCredentials',
    Login: 'Login',
    RegisterWithProvider: 'RegisterWithProvider',
    CreateCompany: 'CreateCompany',
    CreateGarage: 'CreateGarage',
    CreateManySlots: 'CreateManySlots',
    createBookingTimeline: 'createBookingTimeline',
    CreateValet: 'CreateValet',
    AssignValet: 'AssignValet',
    CreateVerification: 'CreateVerification',
    RemoveVerification: 'RemoveVerification',
    RemoveAdmin: 'RemoveAdmin',
    CreateAdmin: 'CreateAdmin',
  },
  Fragment: {
    ValetFields: 'ValetFields',
    BookingFields: 'BookingFields',
    ValetBookingFields: 'ValetBookingFields',
  },
}
export const ValetFieldsFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ValetFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Valet' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'image' } },
          { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
          { kind: 'Field', name: { kind: 'Name', value: 'displayName' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ValetFieldsFragment, unknown>
export const BookingFieldsFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookingFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Booking' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'pricePerHour' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endTime' } },
          { kind: 'Field', name: { kind: 'Name', value: 'startTime' } },
          { kind: 'Field', name: { kind: 'Name', value: 'vehicleNumber' } },
          { kind: 'Field', name: { kind: 'Name', value: 'passcode' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'bookingTimeline' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                { kind: 'Field', name: { kind: 'Name', value: 'timestamp' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'valetAssignment' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pickupValet' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'ValetFields' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'returnValet' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'ValetFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'slot' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'displayName' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'garage' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'images' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'address' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'address' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'latitude' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'longitude' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ValetFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Valet' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'image' } },
          { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
          { kind: 'Field', name: { kind: 'Name', value: 'displayName' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<BookingFieldsFragment, unknown>
export const ValetBookingFieldsFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ValetBookingFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Booking' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'vehicleNumber' } },
          { kind: 'Field', name: { kind: 'Name', value: 'passcode' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          { kind: 'Field', name: { kind: 'Name', value: 'startTime' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endTime' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'slot' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'garage' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'address' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'latitude' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'longitude' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ValetBookingFieldsFragment, unknown>
export const RegisterWithCredentialsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'RegisterWithCredentials' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'registerWithCredentialsInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'RegisterWithCredentialsInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'registerWithCredentials' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'registerWithCredentialsInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'registerWithCredentialsInput' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'image' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  RegisterWithCredentialsMutation,
  RegisterWithCredentialsMutationVariables
>
export const LoginDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'Login' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'loginInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'LoginInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'login' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'loginInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'loginInput' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'accessToken' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'user' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'image' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>
export const RegisterWithProviderDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'RegisterWithProvider' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'registerWithProviderInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'RegisterWithProviderInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'registerWithProvider' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'registerWithProviderInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'registerWithProviderInput' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  RegisterWithProviderMutation,
  RegisterWithProviderMutationVariables
>
export const CreateCompanyDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateCompany' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'createCompanyInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CreateCompanyInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createCompany' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'createCompanyInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'createCompanyInput' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateCompanyMutation,
  CreateCompanyMutationVariables
>
export const CreateGarageDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateGarage' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'createGarageInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CreateGarageInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createGarage' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'createGarageInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'createGarageInput' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateGarageMutation,
  CreateGarageMutationVariables
>
export const CreateManySlotsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateManySlots' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'createSlotInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CreateSlotInput' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'count' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Float' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createManySlots' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'createSlotInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'createSlotInput' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'count' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'count' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'count' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateManySlotsMutation,
  CreateManySlotsMutationVariables
>
export const CreateBookingTimelineDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'createBookingTimeline' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'createBookingTimelineInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CreateBookingTimelineInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createBookingTimeline' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'createBookingTimelineInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'createBookingTimelineInput' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'bookingId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'managerId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                { kind: 'Field', name: { kind: 'Name', value: 'timestamp' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateBookingTimelineMutation,
  CreateBookingTimelineMutationVariables
>
export const CreateValetDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateValet' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'createValetInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CreateValetInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createValet' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'createValetInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'createValetInput' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CreateValetMutation, CreateValetMutationVariables>
export const AssignValetDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'AssignValet' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'bookingId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Float' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'status' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'assignValet' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'bookingId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'bookingId' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'status' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'status' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AssignValetMutation, AssignValetMutationVariables>
export const CreateVerificationDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateVerification' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'createVerificationInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CreateVerificationInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createVerification' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'createVerificationInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'createVerificationInput' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'adminId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'garageId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'verified' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateVerificationMutation,
  CreateVerificationMutationVariables
>
export const RemoveVerificationDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'RemoveVerification' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'where' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'VerificationWhereUniqueInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'removeVerification' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'where' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'adminId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'garageId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'verified' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  RemoveVerificationMutation,
  RemoveVerificationMutationVariables
>
export const RemoveAdminDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'RemoveAdmin' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'where' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'AdminWhereUniqueInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'removeAdmin' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'where' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'user' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<RemoveAdminMutation, RemoveAdminMutationVariables>
export const CreateAdminDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateAdmin' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'createAdminInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CreateAdminInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createAdmin' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'createAdminInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'createAdminInput' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'user' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CreateAdminMutation, CreateAdminMutationVariables>
export const CompaniesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Companies' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'where' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'CompanyWhereInput' },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'orderBy' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'CompanyOrderByWithRelationInput',
                },
              },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'cursor' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'CompanyWhereUniqueInput' },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'take' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'skip' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'distinct' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: { kind: 'Name', value: 'CompanyScalarFieldEnum' },
              },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'companies' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'where' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'orderBy' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'cursor' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'cursor' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'take' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'take' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'skip' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'skip' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'distinct' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'distinct' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'displayName' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'garages' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'managers' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CompaniesQuery, CompaniesQueryVariables>
export const GetAuthProviderDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetAuthProvider' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'uid' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getAuthProvider' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'uid' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'uid' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
                { kind: 'Field', name: { kind: 'Name', value: 'type' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetAuthProviderQuery,
  GetAuthProviderQueryVariables
>
export const SearchGaragesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'SearchGarages' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'dateFilter' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'DateFilterInput' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'locationFilter' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'LocationFilterInput' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'slotsFilter' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'SlotWhereInput' },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'garageFilter' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'GarageFilter' },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'searchGarages' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'dateFilter' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'dateFilter' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'locationFilter' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'locationFilter' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'slotsFilter' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'slotsFilter' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'garageFilter' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'garageFilter' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'address' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'latitude' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'longitude' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'address' },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'images' } },
                { kind: 'Field', name: { kind: 'Name', value: 'displayName' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'availableSlots' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'dateFilter' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'dateFilter' },
                      },
                    },
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'slotsFilter' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'slotsFilter' },
                      },
                    },
                  ],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'pricePerHour' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'count' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'verification' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'verified' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SearchGaragesQuery, SearchGaragesQueryVariables>
export const MyCompanyDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'MyCompany' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'myCompany' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'garages' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'displayName' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'description' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'address' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'address' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'latitude' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'longitude' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'displayName' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<MyCompanyQuery, MyCompanyQueryVariables>
export const GaragesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Garages' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'skip' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'take' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'cursor' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'GarageWhereUniqueInput' },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'orderBy' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: { kind: 'Name', value: 'GarageOrderByWithRelationInput' },
              },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'where' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'GarageWhereInput' },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'garages' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'skip' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'skip' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'take' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'take' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'cursor' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'cursor' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'orderBy' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'where' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'displayName' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'images' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'verification' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'verified' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'address' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'latitude' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'longitude' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'address' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'slotCounts' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'count' } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'garagesCount' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'where' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'count' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GaragesQuery, GaragesQueryVariables>
export const BookingsForCustomerDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'BookingsForCustomer' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'skip' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'take' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'cursor' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'BookingWhereUniqueInput' },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'orderBy' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BookingOrderByWithRelationInput',
                },
              },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'where' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'BookingWhereInput' },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'distinct' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: { kind: 'Name', value: 'BookingScalarFieldEnum' },
              },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'bookingsForCustomer' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'skip' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'skip' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'take' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'take' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'cursor' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'cursor' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'orderBy' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'where' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'distinct' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'distinct' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BookingFields' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'bookingsCount' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'where' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'count' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ValetFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Valet' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'image' } },
          { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
          { kind: 'Field', name: { kind: 'Name', value: 'displayName' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookingFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Booking' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'pricePerHour' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endTime' } },
          { kind: 'Field', name: { kind: 'Name', value: 'startTime' } },
          { kind: 'Field', name: { kind: 'Name', value: 'vehicleNumber' } },
          { kind: 'Field', name: { kind: 'Name', value: 'passcode' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'bookingTimeline' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                { kind: 'Field', name: { kind: 'Name', value: 'timestamp' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'valetAssignment' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pickupValet' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'ValetFields' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'returnValet' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'ValetFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'slot' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'displayName' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'garage' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'images' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'address' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'address' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'latitude' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'longitude' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  BookingsForCustomerQuery,
  BookingsForCustomerQueryVariables
>
export const BookingsForGarageDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'BookingsForGarage' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'skip' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'take' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'cursor' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'BookingWhereUniqueInput' },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'orderBy' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BookingOrderByWithRelationInput',
                },
              },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'where' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'BookingWhereInput' },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'distinct' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: { kind: 'Name', value: 'BookingScalarFieldEnum' },
              },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'bookingsForGarage' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'skip' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'skip' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'take' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'take' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'cursor' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'cursor' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'orderBy' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'where' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'distinct' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'distinct' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BookingFields' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'bookingsCount' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'where' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'count' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ValetFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Valet' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'image' } },
          { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
          { kind: 'Field', name: { kind: 'Name', value: 'displayName' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookingFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Booking' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'pricePerHour' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endTime' } },
          { kind: 'Field', name: { kind: 'Name', value: 'startTime' } },
          { kind: 'Field', name: { kind: 'Name', value: 'vehicleNumber' } },
          { kind: 'Field', name: { kind: 'Name', value: 'passcode' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'bookingTimeline' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                { kind: 'Field', name: { kind: 'Name', value: 'timestamp' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'valetAssignment' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pickupValet' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'ValetFields' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'returnValet' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'ValetFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'slot' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'displayName' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'garage' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'images' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'address' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'address' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'latitude' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'longitude' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  BookingsForGarageQuery,
  BookingsForGarageQueryVariables
>
export const ValetMeDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'ValetMe' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'valetMe' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
                { kind: 'Field', name: { kind: 'Name', value: 'companyId' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ValetMeQuery, ValetMeQueryVariables>
export const AdminMeDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'AdminMe' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'adminMe' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AdminMeQuery, AdminMeQueryVariables>
export const CompanyValetsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'companyValets' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'distinct' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: { kind: 'Name', value: 'ValetScalarFieldEnum' },
              },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'skip' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'take' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'cursor' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'ValetWhereUniqueInput' },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'orderBy' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: { kind: 'Name', value: 'ValetOrderByWithRelationInput' },
              },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'where' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'ValetWhereInput' },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'companyValets' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'distinct' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'distinct' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'skip' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'skip' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'take' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'take' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'cursor' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'cursor' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'orderBy' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'where' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'displayName' } },
                { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'companyId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'image' } },
                { kind: 'Field', name: { kind: 'Name', value: 'licenceID' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'companyValetsTotal' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'where' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CompanyValetsQuery, CompanyValetsQueryVariables>
export const ValetPickupsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'valetPickups' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'skip' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'take' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'valetPickups' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'skip' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'skip' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'take' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'take' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'vehicleNumber' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'valetAssignment' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'pickupLat' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'pickupLng' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'pickupValetId' },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'startTime' } },
                { kind: 'Field', name: { kind: 'Name', value: 'endTime' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'slot' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'garage' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'address' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'latitude' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'longitude' },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'valetPickupsTotal' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ValetPickupsQuery, ValetPickupsQueryVariables>
export const ValetDropsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'valetDrops' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'skip' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'take' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'valetDrops' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'skip' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'skip' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'take' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'take' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'vehicleNumber' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'startTime' } },
                { kind: 'Field', name: { kind: 'Name', value: 'endTime' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'valetAssignment' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'returnLat' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'returnLng' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'returnValetId' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'slot' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'garage' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'address' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'latitude' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'longitude' },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'valetDropsTotal' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ValetDropsQuery, ValetDropsQueryVariables>
export const MyPickupTripsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'myPickupTrips' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'distinct' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: { kind: 'Name', value: 'BookingScalarFieldEnum' },
              },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'skip' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'take' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'orderBy' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BookingOrderByWithRelationInput',
                },
              },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'where' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'BookingWhereInput' },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'bookingsForValet' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'distinct' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'distinct' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'skip' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'skip' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'take' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'take' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'orderBy' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'where' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ValetBookingFields' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'valetAssignment' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'pickupLat' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'pickupLng' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'pickupValetId' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'bookingsCount' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'where' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'count' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ValetBookingFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Booking' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'vehicleNumber' } },
          { kind: 'Field', name: { kind: 'Name', value: 'passcode' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          { kind: 'Field', name: { kind: 'Name', value: 'startTime' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endTime' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'slot' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'garage' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'address' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'latitude' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'longitude' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<MyPickupTripsQuery, MyPickupTripsQueryVariables>
export const MyDropTripsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'myDropTrips' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'distinct' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: { kind: 'Name', value: 'BookingScalarFieldEnum' },
              },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'skip' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'take' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'orderBy' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'BookingOrderByWithRelationInput',
                },
              },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'where' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'BookingWhereInput' },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'bookingsForValet' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'distinct' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'distinct' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'skip' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'skip' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'take' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'take' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'orderBy' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'where' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ValetBookingFields' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'valetAssignment' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'returnLat' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'returnLng' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'returnValetId' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'bookingsCount' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'where' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'count' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ValetBookingFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Booking' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'vehicleNumber' } },
          { kind: 'Field', name: { kind: 'Name', value: 'passcode' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          { kind: 'Field', name: { kind: 'Name', value: 'startTime' } },
          { kind: 'Field', name: { kind: 'Name', value: 'endTime' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'slot' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'garage' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'address' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'latitude' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'longitude' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<MyDropTripsQuery, MyDropTripsQueryVariables>
export const AdminsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'admins' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'distinct' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: { kind: 'Name', value: 'AdminScalarFieldEnum' },
              },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'skip' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'take' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'cursor' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'AdminWhereUniqueInput' },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'orderBy' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: { kind: 'Name', value: 'AdminOrderByWithRelationInput' },
              },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'where' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'AdminWhereInput' },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'admins' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'distinct' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'distinct' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'skip' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'skip' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'take' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'take' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'cursor' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'cursor' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'orderBy' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'where' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'user' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'verificationsCount' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'adminsCount' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'where' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AdminsQuery, AdminsQueryVariables>
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any }
}

export type Address = {
  __typename?: 'Address'
  address: Scalars['String']['output']
  createdAt: Scalars['DateTime']['output']
  garage?: Maybe<Garage>
  garageId: Scalars['Int']['output']
  id: Scalars['Int']['output']
  latitude: Scalars['Float']['output']
  longitude: Scalars['Float']['output']
  updatedAt: Scalars['DateTime']['output']
}

export type AddressOrderByWithRelationInput = {
  address?: InputMaybe<SortOrder>
  createdAt?: InputMaybe<SortOrder>
  garage?: InputMaybe<GarageOrderByWithRelationInput>
  garageId?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  latitude?: InputMaybe<SortOrder>
  longitude?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export type AddressRelationFilter = {
  is?: InputMaybe<AddressWhereInput>
  isNot?: InputMaybe<AddressWhereInput>
}

export enum AddressScalarFieldEnum {
  Address = 'address',
  CreatedAt = 'createdAt',
  GarageId = 'garageId',
  Id = 'id',
  Latitude = 'latitude',
  Longitude = 'longitude',
  UpdatedAt = 'updatedAt',
}

export type AddressWhereInput = {
  AND?: InputMaybe<Array<AddressWhereInputStrict>>
  NOT?: InputMaybe<Array<AddressWhereInputStrict>>
  OR?: InputMaybe<Array<AddressWhereInputStrict>>
  address?: InputMaybe<StringFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  garage?: InputMaybe<GarageRelationFilter>
  garageId?: InputMaybe<IntFilter>
  id?: InputMaybe<IntFilter>
  latitude?: InputMaybe<FloatFilter>
  longitude?: InputMaybe<FloatFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type AddressWhereInputStrict = {
  AND: Array<AddressWhereInputStrict>
  NOT: Array<AddressWhereInputStrict>
  OR: Array<AddressWhereInputStrict>
  address: StringFilter
  createdAt: DateTimeFilter
  garage: GarageRelationFilter
  garageId: IntFilter
  id: IntFilter
  latitude: FloatFilter
  longitude: FloatFilter
  updatedAt: DateTimeFilter
}

export type AddressWhereUniqueInput = {
  id: Scalars['Int']['input']
}

export type Admin = {
  __typename?: 'Admin'
  createdAt: Scalars['DateTime']['output']
  uid: Scalars['String']['output']
  updatedAt: Scalars['DateTime']['output']
  user?: Maybe<User>
  verifications: Array<Verification>
  verificationsCount: Scalars['Float']['output']
}

export type AdminOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>
  uid?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
  user?: InputMaybe<UserOrderByWithRelationInput>
  verifications?: InputMaybe<VerificationOrderByRelationAggregateInput>
}

export type AdminRelationFilter = {
  is?: InputMaybe<AdminWhereInput>
  isNot?: InputMaybe<AdminWhereInput>
}

export enum AdminScalarFieldEnum {
  CreatedAt = 'createdAt',
  Uid = 'uid',
  UpdatedAt = 'updatedAt',
}

export type AdminWhereInput = {
  AND?: InputMaybe<Array<AdminWhereInputStrict>>
  NOT?: InputMaybe<Array<AdminWhereInputStrict>>
  OR?: InputMaybe<Array<AdminWhereInputStrict>>
  createdAt?: InputMaybe<DateTimeFilter>
  uid?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
  user?: InputMaybe<UserRelationFilter>
  verifications?: InputMaybe<VerificationListRelationFilter>
}

export type AdminWhereInputStrict = {
  AND: Array<AdminWhereInputStrict>
  NOT: Array<AdminWhereInputStrict>
  OR: Array<AdminWhereInputStrict>
  createdAt: DateTimeFilter
  uid: StringFilter
  updatedAt: DateTimeFilter
  user: UserRelationFilter
  verifications: VerificationListRelationFilter
}

export type AdminWhereUniqueInput = {
  uid: Scalars['String']['input']
}

export type AggregateCountOutput = {
  __typename?: 'AggregateCountOutput'
  count: Scalars['Int']['output']
}

export type AuthProvider = {
  __typename?: 'AuthProvider'
  type: AuthProviderType
  uid: Scalars['String']['output']
}

export enum AuthProviderType {
  Credentials = 'CREDENTIALS',
  Google = 'GOOGLE',
}

export type Booking = {
  __typename?: 'Booking'
  bookingTimeline: Array<BookingTimeline>
  createdAt: Scalars['DateTime']['output']
  customer: Customer
  customerId: Scalars['String']['output']
  endTime: Scalars['DateTime']['output']
  id: Scalars['Int']['output']
  passcode?: Maybe<Scalars['String']['output']>
  phoneNumber?: Maybe<Scalars['String']['output']>
  pricePerHour?: Maybe<Scalars['Float']['output']>
  slot: Slot
  slotId: Scalars['Int']['output']
  startTime: Scalars['DateTime']['output']
  status: BookingStatus
  totalPrice?: Maybe<Scalars['Float']['output']>
  updatedAt: Scalars['DateTime']['output']
  valetAssignment?: Maybe<ValetAssignment>
  vehicleNumber: Scalars['String']['output']
}

export type BookingListRelationFilter = {
  every?: InputMaybe<BookingWhereInputStrict>
  none?: InputMaybe<BookingWhereInputStrict>
  some?: InputMaybe<BookingWhereInputStrict>
}

export type BookingOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type BookingOrderByWithRelationInput = {
  bookingTimeline?: InputMaybe<BookingTimelineOrderByRelationAggregateInput>
  createdAt?: InputMaybe<SortOrder>
  customer?: InputMaybe<CustomerOrderByWithRelationInput>
  customerId?: InputMaybe<SortOrder>
  endTime?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  passcode?: InputMaybe<SortOrder>
  phoneNumber?: InputMaybe<SortOrder>
  pricePerHour?: InputMaybe<SortOrder>
  slot?: InputMaybe<SlotOrderByWithRelationInput>
  slotId?: InputMaybe<SortOrder>
  startTime?: InputMaybe<SortOrder>
  status?: InputMaybe<SortOrder>
  totalPrice?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
  valetAssignment?: InputMaybe<ValetAssignmentOrderByWithRelationInput>
  vehicleNumber?: InputMaybe<SortOrder>
}

export type BookingRelationFilter = {
  is?: InputMaybe<BookingWhereInputStrict>
  isNot?: InputMaybe<BookingWhereInputStrict>
}

export enum BookingScalarFieldEnum {
  CreatedAt = 'createdAt',
  CustomerId = 'customerId',
  EndTime = 'endTime',
  Id = 'id',
  Passcode = 'passcode',
  PhoneNumber = 'phoneNumber',
  PricePerHour = 'pricePerHour',
  SlotId = 'slotId',
  StartTime = 'startTime',
  Status = 'status',
  TotalPrice = 'totalPrice',
  UpdatedAt = 'updatedAt',
  VehicleNumber = 'vehicleNumber',
}

export enum BookingStatus {
  Booked = 'BOOKED',
  CheckedIn = 'CHECKED_IN',
  CheckedOut = 'CHECKED_OUT',
  ValetAssignedForCheckIn = 'VALET_ASSIGNED_FOR_CHECK_IN',
  ValetAssignedForCheckOut = 'VALET_ASSIGNED_FOR_CHECK_OUT',
  ValetPickedUp = 'VALET_PICKED_UP',
  ValetReturned = 'VALET_RETURNED',
}

export type BookingTimeline = {
  __typename?: 'BookingTimeline'
  bookingId: Scalars['Int']['output']
  id: Scalars['Int']['output']
  managerId?: Maybe<Scalars['String']['output']>
  status: BookingStatus
  timestamp: Scalars['DateTime']['output']
  valetId?: Maybe<Scalars['String']['output']>
}

export type BookingTimelineListRelationFilter = {
  every?: InputMaybe<BookingTimelineWhereInput>
  none?: InputMaybe<BookingTimelineWhereInput>
  some?: InputMaybe<BookingTimelineWhereInput>
}

export type BookingTimelineOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type BookingTimelineOrderByWithRelationInput = {
  booking?: InputMaybe<BookingOrderByWithRelationInput>
  bookingId?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  manager?: InputMaybe<ManagerOrderByWithRelationInput>
  managerId?: InputMaybe<SortOrder>
  status?: InputMaybe<SortOrder>
  timestamp?: InputMaybe<SortOrder>
  valet?: InputMaybe<ValetOrderByWithRelationInput>
  valetId?: InputMaybe<SortOrder>
}

export enum BookingTimelineScalarFieldEnum {
  BookingId = 'bookingId',
  Id = 'id',
  ManagerId = 'managerId',
  Status = 'status',
  Timestamp = 'timestamp',
  ValetId = 'valetId',
}

export type BookingTimelineWhereInput = {
  AND?: InputMaybe<Array<BookingTimelineWhereInputStrict>>
  NOT?: InputMaybe<Array<BookingTimelineWhereInputStrict>>
  OR?: InputMaybe<Array<BookingTimelineWhereInputStrict>>
  booking?: InputMaybe<BookingRelationFilter>
  bookingId?: InputMaybe<IntFilter>
  id?: InputMaybe<IntFilter>
  manager?: InputMaybe<ManagerRelationFilter>
  managerId?: InputMaybe<StringFilter>
  status?: InputMaybe<BookingStatus>
  timestamp?: InputMaybe<DateTimeFilter>
  valet?: InputMaybe<ValetRelationFilter>
  valetId?: InputMaybe<StringFilter>
}

export type BookingTimelineWhereInputStrict = {
  AND: Array<BookingTimelineWhereInputStrict>
  NOT: Array<BookingTimelineWhereInputStrict>
  OR: Array<BookingTimelineWhereInputStrict>
  booking: BookingRelationFilter
  bookingId: IntFilter
  id: IntFilter
  manager: ManagerRelationFilter
  managerId: StringFilter
  status: BookingStatus
  timestamp: DateTimeFilter
  valet: ValetRelationFilter
  valetId: StringFilter
}

export type BookingTimelineWhereUniqueInput = {
  id: Scalars['Int']['input']
}

export type BookingWhereInput = {
  AND?: InputMaybe<Array<BookingWhereInputStrict>>
  NOT?: InputMaybe<Array<BookingWhereInputStrict>>
  OR?: InputMaybe<Array<BookingWhereInputStrict>>
  bookingTimeline?: InputMaybe<BookingTimelineListRelationFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  customer?: InputMaybe<CustomerRelationFilter>
  customerId?: InputMaybe<StringFilter>
  endTime?: InputMaybe<DateTimeFilter>
  id?: InputMaybe<IntFilter>
  passcode?: InputMaybe<StringFilter>
  phoneNumber?: InputMaybe<StringFilter>
  pricePerHour?: InputMaybe<FloatFilter>
  slot?: InputMaybe<SlotRelationFilter>
  slotId?: InputMaybe<IntFilter>
  startTime?: InputMaybe<DateTimeFilter>
  status?: InputMaybe<EnumBookingStatusFilter>
  totalPrice?: InputMaybe<FloatFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
  valetAssignment?: InputMaybe<ValetAssignmentRelationFilter>
  vehicleNumber?: InputMaybe<StringFilter>
}

export type BookingWhereInputStrict = {
  AND: Array<BookingWhereInputStrict>
  NOT: Array<BookingWhereInputStrict>
  OR: Array<BookingWhereInputStrict>
  bookingTimeline: BookingTimelineListRelationFilter
  createdAt: DateTimeFilter
  customer: CustomerRelationFilter
  customerId: StringFilter
  endTime: DateTimeFilter
  id: IntFilter
  passcode: StringFilter
  phoneNumber: StringFilter
  pricePerHour: FloatFilter
  slot: SlotRelationFilter
  slotId: IntFilter
  startTime: DateTimeFilter
  status: EnumBookingStatusFilter
  totalPrice: FloatFilter
  updatedAt: DateTimeFilter
  valetAssignment: ValetAssignmentRelationFilter
  vehicleNumber: StringFilter
}

export type BookingWhereUniqueInput = {
  id: Scalars['Int']['input']
}

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>
  not?: InputMaybe<Scalars['Boolean']['input']>
}

export type Company = {
  __typename?: 'Company'
  createdAt: Scalars['DateTime']['output']
  description?: Maybe<Scalars['String']['output']>
  displayName?: Maybe<Scalars['String']['output']>
  garages: Array<Garage>
  id: Scalars['Int']['output']
  managers: Array<Manager>
  updatedAt: Scalars['DateTime']['output']
  valets: Array<Valet>
}

export type CompanyOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>
  description?: InputMaybe<SortOrder>
  displayName?: InputMaybe<SortOrder>
  garages?: InputMaybe<GarageOrderByRelationAggregateInput>
  id?: InputMaybe<SortOrder>
  managers?: InputMaybe<ManagerOrderByRelationAggregateInput>
  updatedAt?: InputMaybe<SortOrder>
  valets?: InputMaybe<ValetOrderByRelationAggregateInput>
}

export type CompanyRelationFilter = {
  is?: InputMaybe<CompanyWhereInput>
  isNot?: InputMaybe<CompanyWhereInput>
}

export enum CompanyScalarFieldEnum {
  CreatedAt = 'createdAt',
  Description = 'description',
  DisplayName = 'displayName',
  Id = 'id',
  UpdatedAt = 'updatedAt',
}

export type CompanyWhereInput = {
  AND?: InputMaybe<Array<CompanyWhereInputStrict>>
  NOT?: InputMaybe<Array<CompanyWhereInputStrict>>
  OR?: InputMaybe<Array<CompanyWhereInputStrict>>
  createdAt?: InputMaybe<DateTimeFilter>
  description?: InputMaybe<StringFilter>
  displayName?: InputMaybe<StringFilter>
  garages?: InputMaybe<GarageListRelationFilter>
  id?: InputMaybe<IntFilter>
  managers?: InputMaybe<ManagerListRelationFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
  valets?: InputMaybe<ValetListRelationFilter>
}

export type CompanyWhereInputStrict = {
  AND: Array<CompanyWhereInputStrict>
  NOT: Array<CompanyWhereInputStrict>
  OR: Array<CompanyWhereInputStrict>
  createdAt: DateTimeFilter
  description: StringFilter
  displayName: StringFilter
  garages: GarageListRelationFilter
  id: IntFilter
  managers: ManagerListRelationFilter
  updatedAt: DateTimeFilter
  valets: ValetListRelationFilter
}

export type CompanyWhereUniqueInput = {
  id: Scalars['Int']['input']
}

export type CreateAddressInput = {
  address: Scalars['String']['input']
  garageId: Scalars['Int']['input']
  latitude: Scalars['Float']['input']
  longitude: Scalars['Float']['input']
}

export type CreateAddressInputWithoutGarageId = {
  address: Scalars['String']['input']
  latitude: Scalars['Float']['input']
  longitude: Scalars['Float']['input']
}

export type CreateAdminInput = {
  uid: Scalars['String']['input']
}

export type CreateBookingInput = {
  customerId: Scalars['String']['input']
  endTime: Scalars['DateTime']['input']
  garageId: Scalars['Int']['input']
  phoneNumber?: InputMaybe<Scalars['String']['input']>
  pricePerHour?: InputMaybe<Scalars['Float']['input']>
  startTime: Scalars['DateTime']['input']
  totalPrice?: InputMaybe<Scalars['Float']['input']>
  type: SlotType
  valetAssignment?: InputMaybe<CreateValetAssignmentInputWithoutBookingId>
  vehicleNumber: Scalars['String']['input']
}

export type CreateBookingTimelineInput = {
  bookingId: Scalars['Int']['input']
  status: BookingStatus
}

export type CreateCompanyInput = {
  description?: InputMaybe<Scalars['String']['input']>
  displayName?: InputMaybe<Scalars['String']['input']>
  managerId: Scalars['String']['input']
  managerName?: InputMaybe<Scalars['String']['input']>
}

export type CreateCustomerInput = {
  displayName?: InputMaybe<Scalars['String']['input']>
  uid: Scalars['String']['input']
}

export type CreateGarageInput = {
  address: CreateAddressInputWithoutGarageId
  description?: InputMaybe<Scalars['String']['input']>
  displayName?: InputMaybe<Scalars['String']['input']>
  images: Array<Scalars['String']['input']>
  slots: Array<CreateSlotInputWithoutGarageId>
}

export type CreateManagerInput = {
  displayName?: InputMaybe<Scalars['String']['input']>
  uid: Scalars['String']['input']
}

export type CreateReviewInput = {
  comment?: InputMaybe<Scalars['String']['input']>
  customerId: Scalars['String']['input']
  garageId: Scalars['Int']['input']
  rating: Scalars['Int']['input']
}

export type CreateSlotInput = {
  displayName?: InputMaybe<Scalars['String']['input']>
  garageId: Scalars['Int']['input']
  height?: InputMaybe<Scalars['Int']['input']>
  length?: InputMaybe<Scalars['Int']['input']>
  pricePerHour: Scalars['Float']['input']
  type: SlotType
  width?: InputMaybe<Scalars['Int']['input']>
}

export type CreateSlotInputWithoutGarageId = {
  count: Scalars['Int']['input']
  displayName?: InputMaybe<Scalars['String']['input']>
  height?: InputMaybe<Scalars['Int']['input']>
  length?: InputMaybe<Scalars['Int']['input']>
  pricePerHour: Scalars['Float']['input']
  type: SlotType
  width?: InputMaybe<Scalars['Int']['input']>
}

export type CreateValetAssignmentInput = {
  bookingId: Scalars['Int']['input']
  pickupLat?: InputMaybe<Scalars['Float']['input']>
  pickupLng?: InputMaybe<Scalars['Float']['input']>
  pickupValetId?: InputMaybe<Scalars['String']['input']>
  returnLat?: InputMaybe<Scalars['Float']['input']>
  returnLng?: InputMaybe<Scalars['Float']['input']>
  returnValetId?: InputMaybe<Scalars['String']['input']>
}

export type CreateValetAssignmentInputWithoutBookingId = {
  pickupLat: Scalars['Float']['input']
  pickupLng: Scalars['Float']['input']
  returnLat?: InputMaybe<Scalars['Float']['input']>
  returnLng?: InputMaybe<Scalars['Float']['input']>
}

export type CreateValetInput = {
  companyId?: InputMaybe<Scalars['Int']['input']>
  displayName: Scalars['String']['input']
  image?: InputMaybe<Scalars['String']['input']>
  licenceID: Scalars['String']['input']
  uid: Scalars['String']['input']
}

export type CreateVerificationInput = {
  garageId: Scalars['Int']['input']
  verified: Scalars['Boolean']['input']
}

export type Customer = {
  __typename?: 'Customer'
  createdAt: Scalars['DateTime']['output']
  displayName?: Maybe<Scalars['String']['output']>
  uid: Scalars['String']['output']
  updatedAt: Scalars['DateTime']['output']
  user?: Maybe<User>
}

export type CustomerOrderByWithRelationInput = {
  bookings?: InputMaybe<BookingOrderByRelationAggregateInput>
  createdAt?: InputMaybe<SortOrder>
  displayName?: InputMaybe<SortOrder>
  reviews?: InputMaybe<ReviewOrderByRelationAggregateInput>
  uid?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
  user?: InputMaybe<UserOrderByWithRelationInput>
}

export type CustomerRelationFilter = {
  is?: InputMaybe<CustomerWhereInput>
  isNot?: InputMaybe<CustomerWhereInput>
}

export enum CustomerScalarFieldEnum {
  CreatedAt = 'createdAt',
  DisplayName = 'displayName',
  Uid = 'uid',
  UpdatedAt = 'updatedAt',
}

export type CustomerWhereInput = {
  AND?: InputMaybe<Array<CustomerWhereInputStrict>>
  NOT?: InputMaybe<Array<CustomerWhereInputStrict>>
  OR?: InputMaybe<Array<CustomerWhereInputStrict>>
  bookings?: InputMaybe<BookingListRelationFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  displayName?: InputMaybe<StringFilter>
  reviews?: InputMaybe<ReviewListRelationFilter>
  uid?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
  user?: InputMaybe<UserRelationFilter>
}

export type CustomerWhereInputStrict = {
  AND: Array<CustomerWhereInputStrict>
  NOT: Array<CustomerWhereInputStrict>
  OR: Array<CustomerWhereInputStrict>
  bookings: BookingListRelationFilter
  createdAt: DateTimeFilter
  displayName: StringFilter
  reviews: ReviewListRelationFilter
  uid: StringFilter
  updatedAt: DateTimeFilter
  user: UserRelationFilter
}

export type CustomerWhereUniqueInput = {
  uid: Scalars['String']['input']
}

export type DateFilterInput = {
  end: Scalars['String']['input']
  start: Scalars['String']['input']
}

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  in?: InputMaybe<Array<Scalars['String']['input']>>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  notIn?: InputMaybe<Array<Scalars['String']['input']>>
}

export type EnumBookingStatusFilter = {
  equals?: InputMaybe<BookingStatus>
  in?: InputMaybe<Array<BookingStatus>>
  not?: InputMaybe<BookingStatus>
  notIn?: InputMaybe<Array<BookingStatus>>
}

export type EnumSlotTypeFilter = {
  equals?: InputMaybe<SlotType>
  in?: InputMaybe<Array<SlotType>>
  not?: InputMaybe<SlotType>
  notIn?: InputMaybe<Array<SlotType>>
}

export type FloatFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>
  gt?: InputMaybe<Scalars['Float']['input']>
  gte?: InputMaybe<Scalars['Float']['input']>
  lt?: InputMaybe<Scalars['Float']['input']>
  lte?: InputMaybe<Scalars['Float']['input']>
  not?: InputMaybe<Scalars['Float']['input']>
}

export type Garage = {
  __typename?: 'Garage'
  address?: Maybe<Address>
  availableSlots: Array<MinimalSlotGroupBy>
  company: Company
  companyId: Scalars['Int']['output']
  createdAt: Scalars['DateTime']['output']
  description?: Maybe<Scalars['String']['output']>
  displayName?: Maybe<Scalars['String']['output']>
  id: Scalars['Int']['output']
  images: Array<Scalars['String']['output']>
  slotCounts: Array<SlotTypeCount>
  slots: Array<Slot>
  updatedAt: Scalars['DateTime']['output']
  verification?: Maybe<Verification>
}

export type GarageAvailableSlotsArgs = {
  dateFilter: DateFilterInput
  slotsFilter?: InputMaybe<SlotWhereInput>
}

export type GarageFilter = {
  orderBy?: InputMaybe<Array<GarageOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<GarageWhereInput>
}

export type GarageListRelationFilter = {
  every?: InputMaybe<GarageWhereInput>
  none?: InputMaybe<GarageWhereInput>
  some?: InputMaybe<GarageWhereInput>
}

export type GarageOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type GarageOrderByWithRelationInput = {
  address?: InputMaybe<AddressOrderByWithRelationInput>
  company?: InputMaybe<CompanyOrderByWithRelationInput>
  companyId?: InputMaybe<SortOrder>
  createdAt?: InputMaybe<SortOrder>
  description?: InputMaybe<SortOrder>
  displayName?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  images?: InputMaybe<SortOrder>
  reviews?: InputMaybe<ReviewOrderByRelationAggregateInput>
  slots?: InputMaybe<SlotOrderByRelationAggregateInput>
  updatedAt?: InputMaybe<SortOrder>
  verification?: InputMaybe<VerificationOrderByWithRelationInput>
}

export type GarageRelationFilter = {
  is?: InputMaybe<GarageWhereInput>
  isNot?: InputMaybe<GarageWhereInput>
}

export enum GarageScalarFieldEnum {
  CompanyId = 'companyId',
  CreatedAt = 'createdAt',
  Description = 'description',
  DisplayName = 'displayName',
  Id = 'id',
  Images = 'images',
  UpdatedAt = 'updatedAt',
}

export type GarageWhereInput = {
  AND?: InputMaybe<Array<GarageWhereInputStrict>>
  NOT?: InputMaybe<Array<GarageWhereInputStrict>>
  OR?: InputMaybe<Array<GarageWhereInputStrict>>
  address?: InputMaybe<AddressRelationFilter>
  company?: InputMaybe<CompanyRelationFilter>
  companyId?: InputMaybe<IntFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  description?: InputMaybe<StringFilter>
  displayName?: InputMaybe<StringFilter>
  id?: InputMaybe<IntFilter>
  images?: InputMaybe<StringListFilter>
  reviews?: InputMaybe<ReviewListRelationFilter>
  slots?: InputMaybe<SlotListRelationFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
  verification?: InputMaybe<VerificationRelationFilter>
}

export type GarageWhereInputStrict = {
  AND: Array<GarageWhereInputStrict>
  NOT: Array<GarageWhereInputStrict>
  OR: Array<GarageWhereInputStrict>
  address: AddressRelationFilter
  company: CompanyRelationFilter
  companyId: IntFilter
  createdAt: DateTimeFilter
  description: StringFilter
  displayName: StringFilter
  id: IntFilter
  images: StringListFilter
  reviews: ReviewListRelationFilter
  slots: SlotListRelationFilter
  updatedAt: DateTimeFilter
  verification: VerificationRelationFilter
}

export type GarageWhereUniqueInput = {
  id: Scalars['Int']['input']
}

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>
  gt?: InputMaybe<Scalars['Int']['input']>
  gte?: InputMaybe<Scalars['Int']['input']>
  lt?: InputMaybe<Scalars['Int']['input']>
  lte?: InputMaybe<Scalars['Int']['input']>
}

export type LocationFilterInput = {
  ne_lat: Scalars['Float']['input']
  ne_lng: Scalars['Float']['input']
  sw_lat: Scalars['Float']['input']
  sw_lng: Scalars['Float']['input']
}

export type LoginInput = {
  email: Scalars['String']['input']
  password: Scalars['String']['input']
}

export type LoginResponse = {
  __typename?: 'LoginResponse'
  accessToken: Scalars['String']['output']
  user: User
}

export type Manager = {
  __typename?: 'Manager'
  company?: Maybe<Company>
  companyId?: Maybe<Scalars['Int']['output']>
  createdAt: Scalars['DateTime']['output']
  displayName?: Maybe<Scalars['String']['output']>
  uid: Scalars['String']['output']
  updatedAt: Scalars['DateTime']['output']
}

export type ManagerListRelationFilter = {
  every?: InputMaybe<ManagerWhereInput>
  none?: InputMaybe<ManagerWhereInput>
  some?: InputMaybe<ManagerWhereInput>
}

export type ManagerOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type ManagerOrderByWithRelationInput = {
  bookingTimeline?: InputMaybe<BookingTimelineOrderByRelationAggregateInput>
  company?: InputMaybe<CompanyOrderByWithRelationInput>
  companyId?: InputMaybe<SortOrder>
  createdAt?: InputMaybe<SortOrder>
  displayName?: InputMaybe<SortOrder>
  uid?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
  user?: InputMaybe<UserOrderByWithRelationInput>
}

export type ManagerRelationFilter = {
  is?: InputMaybe<ManagerWhereInput>
  isNot?: InputMaybe<ManagerWhereInput>
}

export enum ManagerScalarFieldEnum {
  CompanyId = 'companyId',
  CreatedAt = 'createdAt',
  DisplayName = 'displayName',
  Uid = 'uid',
  UpdatedAt = 'updatedAt',
}

export type ManagerWhereInput = {
  AND?: InputMaybe<Array<ManagerWhereInputStrict>>
  NOT?: InputMaybe<Array<ManagerWhereInputStrict>>
  OR?: InputMaybe<Array<ManagerWhereInputStrict>>
  bookingTimeline?: InputMaybe<BookingTimelineListRelationFilter>
  company?: InputMaybe<CompanyRelationFilter>
  companyId?: InputMaybe<IntFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  displayName?: InputMaybe<StringFilter>
  uid?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
  user?: InputMaybe<UserRelationFilter>
}

export type ManagerWhereInputStrict = {
  AND: Array<ManagerWhereInputStrict>
  NOT: Array<ManagerWhereInputStrict>
  OR: Array<ManagerWhereInputStrict>
  bookingTimeline: BookingTimelineListRelationFilter
  company: CompanyRelationFilter
  companyId: IntFilter
  createdAt: DateTimeFilter
  displayName: StringFilter
  uid: StringFilter
  updatedAt: DateTimeFilter
  user: UserRelationFilter
}

export type ManagerWhereUniqueInput = {
  uid: Scalars['String']['input']
}

export type MinimalSlotGroupBy = {
  __typename?: 'MinimalSlotGroupBy'
  count: Scalars['Int']['output']
  pricePerHour: Scalars['Float']['output']
  type: SlotType
}

export type Mutation = {
  __typename?: 'Mutation'
  assignValet: Booking
  createAddress: Address
  createAdmin: Admin
  createBooking: Booking
  createBookingTimeline: BookingTimeline
  createCompany: Company
  createCustomer: Customer
  createGarage: Garage
  createManager: Manager
  createManySlots: ReturnCount
  createReview: Review
  createSlot: Slot
  createValet: Valet
  createValetAssignment: ValetAssignment
  createVerification: Verification
  login: LoginResponse
  registerWithCredentials: User
  registerWithProvider: User
  removeAddress: Address
  removeAdmin: Admin
  removeBooking: Booking
  removeBookingTimeline: BookingTimeline
  removeCompany: Company
  removeCustomer: Customer
  removeGarage: Garage
  removeManager: Manager
  removeReview: Review
  removeSlot: Slot
  removeUser: User
  removeValet: Valet
  removeValetAssignment: ValetAssignment
  removeVerification: Verification
  updateAddress: Address
  updateAdmin: Admin
  updateBooking: Booking
  updateBookingTimeline: BookingTimeline
  updateCompany: Company
  updateCustomer: Customer
  updateGarage: Garage
  updateManager: Manager
  updateReview: Review
  updateSlot: Slot
  updateUser: User
  updateValet: Valet
  updateValetAssignment: ValetAssignment
  updateVerification: Verification
}

export type MutationAssignValetArgs = {
  bookingId: Scalars['Float']['input']
  status: Scalars['String']['input']
}

export type MutationCreateAddressArgs = {
  createAddressInput: CreateAddressInput
}

export type MutationCreateAdminArgs = {
  createAdminInput: CreateAdminInput
}

export type MutationCreateBookingArgs = {
  createBookingInput: CreateBookingInput
}

export type MutationCreateBookingTimelineArgs = {
  createBookingTimelineInput: CreateBookingTimelineInput
}

export type MutationCreateCompanyArgs = {
  createCompanyInput: CreateCompanyInput
}

export type MutationCreateCustomerArgs = {
  createCustomerInput: CreateCustomerInput
}

export type MutationCreateGarageArgs = {
  createGarageInput: CreateGarageInput
}

export type MutationCreateManagerArgs = {
  createManagerInput: CreateManagerInput
}

export type MutationCreateManySlotsArgs = {
  count: Scalars['Float']['input']
  createSlotInput: CreateSlotInput
}

export type MutationCreateReviewArgs = {
  createReviewInput: CreateReviewInput
}

export type MutationCreateSlotArgs = {
  createSlotInput: CreateSlotInput
}

export type MutationCreateValetArgs = {
  createValetInput: CreateValetInput
}

export type MutationCreateValetAssignmentArgs = {
  createValetAssignmentInput: CreateValetAssignmentInput
}

export type MutationCreateVerificationArgs = {
  createVerificationInput: CreateVerificationInput
}

export type MutationLoginArgs = {
  loginInput: LoginInput
}

export type MutationRegisterWithCredentialsArgs = {
  registerWithCredentialsInput: RegisterWithCredentialsInput
}

export type MutationRegisterWithProviderArgs = {
  registerWithProviderInput: RegisterWithProviderInput
}

export type MutationRemoveAddressArgs = {
  where: AddressWhereUniqueInput
}

export type MutationRemoveAdminArgs = {
  where: AdminWhereUniqueInput
}

export type MutationRemoveBookingArgs = {
  where: BookingWhereUniqueInput
}

export type MutationRemoveBookingTimelineArgs = {
  where: BookingTimelineWhereUniqueInput
}

export type MutationRemoveCompanyArgs = {
  where: CompanyWhereUniqueInput
}

export type MutationRemoveCustomerArgs = {
  where: CustomerWhereUniqueInput
}

export type MutationRemoveGarageArgs = {
  where: GarageWhereUniqueInput
}

export type MutationRemoveManagerArgs = {
  where: ManagerWhereUniqueInput
}

export type MutationRemoveReviewArgs = {
  where: ReviewWhereUniqueInput
}

export type MutationRemoveSlotArgs = {
  where: SlotWhereUniqueInput
}

export type MutationRemoveUserArgs = {
  where: UserWhereUniqueInput
}

export type MutationRemoveValetArgs = {
  where: ValetWhereUniqueInput
}

export type MutationRemoveValetAssignmentArgs = {
  where: ValetAssignmentWhereUniqueInput
}

export type MutationRemoveVerificationArgs = {
  where: VerificationWhereUniqueInput
}

export type MutationUpdateAddressArgs = {
  updateAddressInput: UpdateAddressInput
}

export type MutationUpdateAdminArgs = {
  updateAdminInput: UpdateAdminInput
}

export type MutationUpdateBookingArgs = {
  updateBookingInput: UpdateBookingInput
}

export type MutationUpdateBookingTimelineArgs = {
  updateBookingTimelineInput: UpdateBookingTimelineInput
}

export type MutationUpdateCompanyArgs = {
  updateCompanyInput: UpdateCompanyInput
}

export type MutationUpdateCustomerArgs = {
  updateCustomerInput: UpdateCustomerInput
}

export type MutationUpdateGarageArgs = {
  updateGarageInput: UpdateGarageInput
}

export type MutationUpdateManagerArgs = {
  updateManagerInput: UpdateManagerInput
}

export type MutationUpdateReviewArgs = {
  updateReviewInput: UpdateReviewInput
}

export type MutationUpdateSlotArgs = {
  updateSlotInput: UpdateSlotInput
}

export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput
}

export type MutationUpdateValetArgs = {
  updateValetInput: UpdateValetInput
}

export type MutationUpdateValetAssignmentArgs = {
  updateValetAssignmentInput: UpdateValetAssignmentInput
}

export type MutationUpdateVerificationArgs = {
  updateVerificationInput: UpdateVerificationInput
}

export type Query = {
  __typename?: 'Query'
  address: Address
  addresses: Array<Address>
  admin: Admin
  adminMe: Admin
  admins: Array<Admin>
  adminsCount: Scalars['Float']['output']
  booking: Booking
  bookingTimeline: BookingTimeline
  bookingTimelines: Array<BookingTimeline>
  bookings: Array<Booking>
  bookingsCount: AggregateCountOutput
  bookingsForCustomer: Array<Booking>
  bookingsForGarage: Array<Booking>
  bookingsForValet: Array<Booking>
  companies: Array<Company>
  company: Company
  companyValets: Array<Valet>
  companyValetsTotal: Scalars['Float']['output']
  customer: Customer
  customers: Array<Customer>
  garage: Garage
  garages: Array<Garage>
  garagesCount: AggregateCountOutput
  getAuthProvider?: Maybe<AuthProvider>
  manager: Manager
  managers: Array<Manager>
  myCompany: Company
  review: Review
  reviews: Array<Review>
  searchGarages: Array<Garage>
  slot: Slot
  slots: Array<Slot>
  user: User
  users: Array<User>
  valet: Valet
  valetAssignment: ValetAssignment
  valetAssignments: Array<ValetAssignment>
  valetDrops: Array<Booking>
  valetDropsTotal: Scalars['Float']['output']
  valetMe?: Maybe<Valet>
  valetPickups: Array<Booking>
  valetPickupsTotal: Scalars['Float']['output']
  valets: Array<Valet>
  verification: Verification
  verifications: Array<Verification>
  whoAmI: User
}

export type QueryAddressArgs = {
  where: AddressWhereUniqueInput
}

export type QueryAddressesArgs = {
  cursor?: InputMaybe<AddressWhereUniqueInput>
  distinct?: InputMaybe<Array<AddressScalarFieldEnum>>
  orderBy?: InputMaybe<Array<AddressOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<AddressWhereInput>
}

export type QueryAdminArgs = {
  where: AdminWhereUniqueInput
}

export type QueryAdminsArgs = {
  cursor?: InputMaybe<AdminWhereUniqueInput>
  distinct?: InputMaybe<Array<AdminScalarFieldEnum>>
  orderBy?: InputMaybe<Array<AdminOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<AdminWhereInput>
}

export type QueryAdminsCountArgs = {
  where?: InputMaybe<AdminWhereInput>
}

export type QueryBookingArgs = {
  where: BookingWhereUniqueInput
}

export type QueryBookingTimelineArgs = {
  where: BookingTimelineWhereUniqueInput
}

export type QueryBookingTimelinesArgs = {
  cursor?: InputMaybe<BookingTimelineWhereUniqueInput>
  distinct?: InputMaybe<Array<BookingTimelineScalarFieldEnum>>
  orderBy?: InputMaybe<Array<BookingTimelineOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<BookingTimelineWhereInput>
}

export type QueryBookingsArgs = {
  cursor?: InputMaybe<BookingWhereUniqueInput>
  distinct?: InputMaybe<Array<BookingScalarFieldEnum>>
  orderBy?: InputMaybe<Array<BookingOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<BookingWhereInput>
}

export type QueryBookingsCountArgs = {
  where?: InputMaybe<BookingWhereInput>
}

export type QueryBookingsForCustomerArgs = {
  cursor?: InputMaybe<BookingWhereUniqueInput>
  distinct?: InputMaybe<Array<BookingScalarFieldEnum>>
  orderBy?: InputMaybe<Array<BookingOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<BookingWhereInput>
}

export type QueryBookingsForGarageArgs = {
  cursor?: InputMaybe<BookingWhereUniqueInput>
  distinct?: InputMaybe<Array<BookingScalarFieldEnum>>
  orderBy?: InputMaybe<Array<BookingOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<BookingWhereInput>
}

export type QueryBookingsForValetArgs = {
  cursor?: InputMaybe<BookingWhereUniqueInput>
  distinct?: InputMaybe<Array<BookingScalarFieldEnum>>
  orderBy?: InputMaybe<Array<BookingOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<BookingWhereInput>
}

export type QueryCompaniesArgs = {
  cursor?: InputMaybe<CompanyWhereUniqueInput>
  distinct?: InputMaybe<Array<CompanyScalarFieldEnum>>
  orderBy?: InputMaybe<Array<CompanyOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<CompanyWhereInput>
}

export type QueryCompanyArgs = {
  where: CompanyWhereUniqueInput
}

export type QueryCompanyValetsArgs = {
  cursor?: InputMaybe<ValetWhereUniqueInput>
  distinct?: InputMaybe<Array<ValetScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ValetOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ValetWhereInput>
}

export type QueryCompanyValetsTotalArgs = {
  where?: InputMaybe<ValetWhereInput>
}

export type QueryCustomerArgs = {
  where: CustomerWhereUniqueInput
}

export type QueryCustomersArgs = {
  cursor?: InputMaybe<CustomerWhereUniqueInput>
  distinct?: InputMaybe<Array<CustomerScalarFieldEnum>>
  orderBy?: InputMaybe<Array<CustomerOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<CustomerWhereInput>
}

export type QueryGarageArgs = {
  where: GarageWhereUniqueInput
}

export type QueryGaragesArgs = {
  cursor?: InputMaybe<GarageWhereUniqueInput>
  distinct?: InputMaybe<Array<GarageScalarFieldEnum>>
  orderBy?: InputMaybe<Array<GarageOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<GarageWhereInput>
}

export type QueryGaragesCountArgs = {
  where?: InputMaybe<GarageWhereInput>
}

export type QueryGetAuthProviderArgs = {
  uid: Scalars['String']['input']
}

export type QueryManagerArgs = {
  where: ManagerWhereUniqueInput
}

export type QueryManagersArgs = {
  cursor?: InputMaybe<ManagerWhereUniqueInput>
  distinct?: InputMaybe<Array<ManagerScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ManagerOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ManagerWhereInput>
}

export type QueryReviewArgs = {
  where: ReviewWhereUniqueInput
}

export type QueryReviewsArgs = {
  cursor?: InputMaybe<ReviewWhereUniqueInput>
  distinct?: InputMaybe<Array<ReviewScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ReviewOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ReviewWhereInput>
}

export type QuerySearchGaragesArgs = {
  dateFilter: DateFilterInput
  garageFilter?: InputMaybe<GarageFilter>
  locationFilter: LocationFilterInput
  slotsFilter?: InputMaybe<SlotWhereInput>
}

export type QuerySlotArgs = {
  where: SlotWhereUniqueInput
}

export type QuerySlotsArgs = {
  cursor?: InputMaybe<SlotWhereUniqueInput>
  distinct?: InputMaybe<Array<SlotScalarFieldEnum>>
  orderBy?: InputMaybe<Array<SlotOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<SlotWhereInput>
}

export type QueryUserArgs = {
  where: UserWhereUniqueInput
}

export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<UserWhereInput>
}

export type QueryValetArgs = {
  where: ValetWhereUniqueInput
}

export type QueryValetAssignmentArgs = {
  where: ValetAssignmentWhereUniqueInput
}

export type QueryValetAssignmentsArgs = {
  cursor?: InputMaybe<ValetAssignmentWhereUniqueInput>
  distinct?: InputMaybe<Array<ValetAssignmentScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ValetAssignmentOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ValetAssignmentWhereInput>
}

export type QueryValetDropsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
}

export type QueryValetPickupsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
}

export type QueryValetsArgs = {
  cursor?: InputMaybe<ValetWhereUniqueInput>
  distinct?: InputMaybe<Array<ValetScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ValetOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ValetWhereInput>
}

export type QueryVerificationArgs = {
  where: VerificationWhereUniqueInput
}

export type QueryVerificationsArgs = {
  cursor?: InputMaybe<VerificationWhereUniqueInput>
  distinct?: InputMaybe<Array<VerificationScalarFieldEnum>>
  orderBy?: InputMaybe<Array<VerificationOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<VerificationWhereInput>
}

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive',
}

export type RegisterWithCredentialsInput = {
  email: Scalars['String']['input']
  image?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  password: Scalars['String']['input']
}

export type RegisterWithProviderInput = {
  image?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  type: AuthProviderType
  uid: Scalars['String']['input']
}

export type ReturnCount = {
  __typename?: 'ReturnCount'
  count: Scalars['Int']['output']
}

export type Review = {
  __typename?: 'Review'
  comment?: Maybe<Scalars['String']['output']>
  createdAt: Scalars['DateTime']['output']
  customerId: Scalars['String']['output']
  garageId: Scalars['Int']['output']
  id: Scalars['Int']['output']
  rating: Scalars['Int']['output']
  updatedAt: Scalars['DateTime']['output']
}

export type ReviewListRelationFilter = {
  every?: InputMaybe<ReviewWhereInput>
  none?: InputMaybe<ReviewWhereInput>
  some?: InputMaybe<ReviewWhereInput>
}

export type ReviewOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type ReviewOrderByWithRelationInput = {
  comment?: InputMaybe<SortOrder>
  createdAt?: InputMaybe<SortOrder>
  customer?: InputMaybe<CustomerOrderByWithRelationInput>
  customerId?: InputMaybe<SortOrder>
  garage?: InputMaybe<GarageOrderByWithRelationInput>
  garageId?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  rating?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export enum ReviewScalarFieldEnum {
  Comment = 'comment',
  CreatedAt = 'createdAt',
  CustomerId = 'customerId',
  GarageId = 'garageId',
  Id = 'id',
  Rating = 'rating',
  UpdatedAt = 'updatedAt',
}

export type ReviewWhereInput = {
  AND?: InputMaybe<Array<ReviewWhereInputStrict>>
  NOT?: InputMaybe<Array<ReviewWhereInputStrict>>
  OR?: InputMaybe<Array<ReviewWhereInputStrict>>
  comment?: InputMaybe<StringFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  customer?: InputMaybe<CustomerRelationFilter>
  customerId?: InputMaybe<StringFilter>
  garage?: InputMaybe<GarageRelationFilter>
  garageId?: InputMaybe<IntFilter>
  id?: InputMaybe<IntFilter>
  rating?: InputMaybe<IntFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type ReviewWhereInputStrict = {
  AND: Array<ReviewWhereInputStrict>
  NOT: Array<ReviewWhereInputStrict>
  OR: Array<ReviewWhereInputStrict>
  comment: StringFilter
  createdAt: DateTimeFilter
  customer: CustomerRelationFilter
  customerId: StringFilter
  garage: GarageRelationFilter
  garageId: IntFilter
  id: IntFilter
  rating: IntFilter
  updatedAt: DateTimeFilter
}

export type ReviewWhereUniqueInput = {
  id: Scalars['Int']['input']
}

export type Slot = {
  __typename?: 'Slot'
  bookings: Array<Booking>
  createdAt: Scalars['DateTime']['output']
  displayName?: Maybe<Scalars['String']['output']>
  garage: Garage
  garageId: Scalars['Int']['output']
  height?: Maybe<Scalars['Int']['output']>
  id: Scalars['Int']['output']
  length?: Maybe<Scalars['Int']['output']>
  pricePerHour: Scalars['Float']['output']
  type: SlotType
  updatedAt: Scalars['DateTime']['output']
  width?: Maybe<Scalars['Int']['output']>
}

export type SlotListRelationFilter = {
  every?: InputMaybe<SlotWhereInput>
  none?: InputMaybe<SlotWhereInput>
  some?: InputMaybe<SlotWhereInput>
}

export type SlotOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type SlotOrderByWithRelationInput = {
  bookings?: InputMaybe<BookingOrderByRelationAggregateInput>
  createdAt?: InputMaybe<SortOrder>
  displayName?: InputMaybe<SortOrder>
  garage?: InputMaybe<GarageOrderByWithRelationInput>
  garageId?: InputMaybe<SortOrder>
  height?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  length?: InputMaybe<SortOrder>
  pricePerHour?: InputMaybe<SortOrder>
  type?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
  width?: InputMaybe<SortOrder>
}

export type SlotRelationFilter = {
  is?: InputMaybe<SlotWhereInput>
  isNot?: InputMaybe<SlotWhereInput>
}

export enum SlotScalarFieldEnum {
  CreatedAt = 'createdAt',
  DisplayName = 'displayName',
  GarageId = 'garageId',
  Height = 'height',
  Id = 'id',
  Length = 'length',
  PricePerHour = 'pricePerHour',
  Type = 'type',
  UpdatedAt = 'updatedAt',
  Width = 'width',
}

export enum SlotType {
  Bicycle = 'BICYCLE',
  Bike = 'BIKE',
  Car = 'CAR',
  Heavy = 'HEAVY',
}

export type SlotTypeCount = {
  __typename?: 'SlotTypeCount'
  count?: Maybe<Scalars['Int']['output']>
  type: SlotType
}

export type SlotWhereInput = {
  AND?: InputMaybe<Array<SlotWhereInputStrict>>
  NOT?: InputMaybe<Array<SlotWhereInputStrict>>
  OR?: InputMaybe<Array<SlotWhereInputStrict>>
  bookings?: InputMaybe<BookingListRelationFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  displayName?: InputMaybe<StringFilter>
  garage?: InputMaybe<GarageRelationFilter>
  garageId?: InputMaybe<IntFilter>
  height?: InputMaybe<IntFilter>
  id?: InputMaybe<IntFilter>
  length?: InputMaybe<IntFilter>
  pricePerHour?: InputMaybe<FloatFilter>
  type?: InputMaybe<EnumSlotTypeFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
  width?: InputMaybe<IntFilter>
}

export type SlotWhereInputStrict = {
  AND: Array<SlotWhereInputStrict>
  NOT: Array<SlotWhereInputStrict>
  OR: Array<SlotWhereInputStrict>
  bookings: BookingListRelationFilter
  createdAt: DateTimeFilter
  displayName: StringFilter
  garage: GarageRelationFilter
  garageId: IntFilter
  height: IntFilter
  id: IntFilter
  length: IntFilter
  pricePerHour: FloatFilter
  type: EnumSlotTypeFilter
  updatedAt: DateTimeFilter
  width: IntFilter
}

export type SlotWhereUniqueInput = {
  id: Scalars['Int']['input']
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc',
}

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>
  endsWith?: InputMaybe<Scalars['String']['input']>
  equals?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  in?: InputMaybe<Array<Scalars['String']['input']>>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  mode?: InputMaybe<QueryMode>
  not?: InputMaybe<Scalars['String']['input']>
  notIn?: InputMaybe<Array<Scalars['String']['input']>>
  startsWith?: InputMaybe<Scalars['String']['input']>
}

export type StringListFilter = {
  equals?: InputMaybe<Array<Scalars['String']['input']>>
  has?: InputMaybe<Scalars['String']['input']>
  hasEvery?: InputMaybe<Array<Scalars['String']['input']>>
  hasSome?: InputMaybe<Array<Scalars['String']['input']>>
  isEmpty?: InputMaybe<Scalars['Boolean']['input']>
}

export type UpdateAddressInput = {
  address?: InputMaybe<Scalars['String']['input']>
  garageId?: InputMaybe<Scalars['Int']['input']>
  id: Scalars['Int']['input']
  latitude?: InputMaybe<Scalars['Float']['input']>
  longitude?: InputMaybe<Scalars['Float']['input']>
}

export type UpdateAdminInput = {
  uid: Scalars['String']['input']
}

export type UpdateBookingInput = {
  customerId?: InputMaybe<Scalars['String']['input']>
  endTime?: InputMaybe<Scalars['DateTime']['input']>
  garageId?: InputMaybe<Scalars['Int']['input']>
  id: Scalars['Int']['input']
  phoneNumber?: InputMaybe<Scalars['String']['input']>
  pricePerHour?: InputMaybe<Scalars['Float']['input']>
  startTime?: InputMaybe<Scalars['DateTime']['input']>
  totalPrice?: InputMaybe<Scalars['Float']['input']>
  type?: InputMaybe<SlotType>
  valetAssignment?: InputMaybe<CreateValetAssignmentInputWithoutBookingId>
  vehicleNumber?: InputMaybe<Scalars['String']['input']>
}

export type UpdateBookingTimelineInput = {
  bookingId?: InputMaybe<Scalars['Int']['input']>
  id: Scalars['Int']['input']
  status?: InputMaybe<BookingStatus>
}

export type UpdateCompanyInput = {
  description?: InputMaybe<Scalars['String']['input']>
  displayName?: InputMaybe<Scalars['String']['input']>
  id: Scalars['Int']['input']
  managerId?: InputMaybe<Scalars['String']['input']>
  managerName?: InputMaybe<Scalars['String']['input']>
}

export type UpdateCustomerInput = {
  displayName?: InputMaybe<Scalars['String']['input']>
  uid: Scalars['String']['input']
}

export type UpdateGarageInput = {
  address?: InputMaybe<CreateAddressInputWithoutGarageId>
  description?: InputMaybe<Scalars['String']['input']>
  displayName?: InputMaybe<Scalars['String']['input']>
  id: Scalars['Int']['input']
  images?: InputMaybe<Array<Scalars['String']['input']>>
  slots?: InputMaybe<Array<CreateSlotInputWithoutGarageId>>
}

export type UpdateManagerInput = {
  displayName?: InputMaybe<Scalars['String']['input']>
  uid: Scalars['String']['input']
}

export type UpdateReviewInput = {
  comment?: InputMaybe<Scalars['String']['input']>
  customerId?: InputMaybe<Scalars['String']['input']>
  garageId?: InputMaybe<Scalars['Int']['input']>
  id: Scalars['Int']['input']
  rating?: InputMaybe<Scalars['Int']['input']>
}

export type UpdateSlotInput = {
  displayName?: InputMaybe<Scalars['String']['input']>
  garageId?: InputMaybe<Scalars['Int']['input']>
  height?: InputMaybe<Scalars['Int']['input']>
  id: Scalars['Int']['input']
  length?: InputMaybe<Scalars['Int']['input']>
  pricePerHour?: InputMaybe<Scalars['Float']['input']>
  type?: InputMaybe<SlotType>
  width?: InputMaybe<Scalars['Int']['input']>
}

export type UpdateUserInput = {
  uid: Scalars['String']['input']
}

export type UpdateValetAssignmentInput = {
  bookingId: Scalars['Int']['input']
  pickupLat?: InputMaybe<Scalars['Float']['input']>
  pickupLng?: InputMaybe<Scalars['Float']['input']>
  pickupValetId?: InputMaybe<Scalars['String']['input']>
  returnLat?: InputMaybe<Scalars['Float']['input']>
  returnLng?: InputMaybe<Scalars['Float']['input']>
  returnValetId?: InputMaybe<Scalars['String']['input']>
}

export type UpdateValetInput = {
  companyId?: InputMaybe<Scalars['Int']['input']>
  displayName?: InputMaybe<Scalars['String']['input']>
  image?: InputMaybe<Scalars['String']['input']>
  licenceID?: InputMaybe<Scalars['String']['input']>
  uid: Scalars['String']['input']
}

export type UpdateVerificationInput = {
  garageId: Scalars['Int']['input']
  verified?: InputMaybe<Scalars['Boolean']['input']>
}

export type User = {
  __typename?: 'User'
  admin?: Maybe<Admin>
  createdAt: Scalars['DateTime']['output']
  customer?: Maybe<Customer>
  image?: Maybe<Scalars['String']['output']>
  manager?: Maybe<Manager>
  name?: Maybe<Scalars['String']['output']>
  uid: Scalars['String']['output']
  updatedAt: Scalars['DateTime']['output']
  valet?: Maybe<Valet>
}

export type UserOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>
  customer?: InputMaybe<CustomerOrderByWithRelationInput>
  manager?: InputMaybe<ManagerOrderByWithRelationInput>
  name?: InputMaybe<SortOrder>
  uid?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
  valet?: InputMaybe<ValetOrderByWithRelationInput>
}

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>
  isNot?: InputMaybe<UserWhereInput>
}

export enum UserScalarFieldEnum {
  CreatedAt = 'createdAt',
  Image = 'image',
  Name = 'name',
  Uid = 'uid',
  UpdatedAt = 'updatedAt',
}

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInputStrict>>
  NOT?: InputMaybe<Array<UserWhereInputStrict>>
  OR?: InputMaybe<Array<UserWhereInputStrict>>
  createdAt?: InputMaybe<DateTimeFilter>
  customer?: InputMaybe<CustomerRelationFilter>
  manager?: InputMaybe<ManagerRelationFilter>
  name?: InputMaybe<StringFilter>
  uid?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
  valet?: InputMaybe<ValetRelationFilter>
}

export type UserWhereInputStrict = {
  AND: Array<UserWhereInputStrict>
  NOT: Array<UserWhereInputStrict>
  OR: Array<UserWhereInputStrict>
  createdAt: DateTimeFilter
  customer: CustomerRelationFilter
  manager: ManagerRelationFilter
  name: StringFilter
  uid: StringFilter
  updatedAt: DateTimeFilter
  valet: ValetRelationFilter
}

export type UserWhereUniqueInput = {
  uid: Scalars['String']['input']
}

export type Valet = {
  __typename?: 'Valet'
  companyId?: Maybe<Scalars['Int']['output']>
  createdAt: Scalars['DateTime']['output']
  displayName: Scalars['String']['output']
  image?: Maybe<Scalars['String']['output']>
  licenceID: Scalars['String']['output']
  uid: Scalars['String']['output']
  updatedAt: Scalars['DateTime']['output']
}

export type ValetAssignment = {
  __typename?: 'ValetAssignment'
  bookingId: Scalars['Int']['output']
  createdAt: Scalars['DateTime']['output']
  pickupLat?: Maybe<Scalars['Float']['output']>
  pickupLng?: Maybe<Scalars['Float']['output']>
  pickupValet?: Maybe<Valet>
  pickupValetId?: Maybe<Scalars['String']['output']>
  returnLat?: Maybe<Scalars['Float']['output']>
  returnLng?: Maybe<Scalars['Float']['output']>
  returnValet?: Maybe<Valet>
  returnValetId?: Maybe<Scalars['String']['output']>
  updatedAt: Scalars['DateTime']['output']
}

export type ValetAssignmentListRelationFilter = {
  every?: InputMaybe<ValetAssignmentWhereInput>
  none?: InputMaybe<ValetAssignmentWhereInput>
  some?: InputMaybe<ValetAssignmentWhereInput>
}

export type ValetAssignmentOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type ValetAssignmentOrderByWithRelationInput = {
  booking?: InputMaybe<BookingOrderByWithRelationInput>
  bookingId?: InputMaybe<SortOrder>
  createdAt?: InputMaybe<SortOrder>
  pickupLat?: InputMaybe<SortOrder>
  pickupLng?: InputMaybe<SortOrder>
  pickupValet?: InputMaybe<ValetOrderByWithRelationInput>
  pickupValetId?: InputMaybe<SortOrder>
  returnLat?: InputMaybe<SortOrder>
  returnLng?: InputMaybe<SortOrder>
  returnValet?: InputMaybe<ValetOrderByWithRelationInput>
  returnValetId?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export type ValetAssignmentRelationFilter = {
  is?: InputMaybe<ValetAssignmentWhereInput>
  isNot?: InputMaybe<ValetAssignmentWhereInput>
}

export enum ValetAssignmentScalarFieldEnum {
  BookingId = 'bookingId',
  CreatedAt = 'createdAt',
  PickupLat = 'pickupLat',
  PickupLng = 'pickupLng',
  PickupValetId = 'pickupValetId',
  ReturnLat = 'returnLat',
  ReturnLng = 'returnLng',
  ReturnValetId = 'returnValetId',
  UpdatedAt = 'updatedAt',
}

export type ValetAssignmentWhereInput = {
  AND?: InputMaybe<Array<ValetAssignmentWhereInputStrict>>
  NOT?: InputMaybe<Array<ValetAssignmentWhereInputStrict>>
  OR?: InputMaybe<Array<ValetAssignmentWhereInputStrict>>
  booking?: InputMaybe<BookingRelationFilter>
  bookingId?: InputMaybe<IntFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  pickupLat?: InputMaybe<FloatFilter>
  pickupLng?: InputMaybe<FloatFilter>
  pickupValet?: InputMaybe<ValetRelationFilter>
  pickupValetId?: InputMaybe<StringFilter>
  returnLat?: InputMaybe<FloatFilter>
  returnLng?: InputMaybe<FloatFilter>
  returnValet?: InputMaybe<ValetRelationFilter>
  returnValetId?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type ValetAssignmentWhereInputStrict = {
  AND: Array<ValetAssignmentWhereInputStrict>
  NOT: Array<ValetAssignmentWhereInputStrict>
  OR: Array<ValetAssignmentWhereInputStrict>
  booking: BookingRelationFilter
  bookingId: IntFilter
  createdAt: DateTimeFilter
  pickupLat: FloatFilter
  pickupLng: FloatFilter
  pickupValet: ValetRelationFilter
  pickupValetId: StringFilter
  returnLat: FloatFilter
  returnLng: FloatFilter
  returnValet: ValetRelationFilter
  returnValetId: StringFilter
  updatedAt: DateTimeFilter
}

export type ValetAssignmentWhereUniqueInput = {
  bookingId: Scalars['Int']['input']
}

export type ValetListRelationFilter = {
  every?: InputMaybe<ValetWhereInput>
  none?: InputMaybe<ValetWhereInput>
  some?: InputMaybe<ValetWhereInput>
}

export type ValetOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type ValetOrderByWithRelationInput = {
  bookingTimeline?: InputMaybe<BookingTimelineOrderByRelationAggregateInput>
  company?: InputMaybe<CompanyOrderByWithRelationInput>
  companyId?: InputMaybe<SortOrder>
  createdAt?: InputMaybe<SortOrder>
  displayName?: InputMaybe<SortOrder>
  image?: InputMaybe<SortOrder>
  licenceID?: InputMaybe<SortOrder>
  pickupAssignments?: InputMaybe<ValetAssignmentOrderByRelationAggregateInput>
  returnAssignments?: InputMaybe<ValetAssignmentOrderByRelationAggregateInput>
  uid?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
  user?: InputMaybe<UserOrderByWithRelationInput>
}

export type ValetRelationFilter = {
  is?: InputMaybe<ValetWhereInput>
  isNot?: InputMaybe<ValetWhereInput>
}

export enum ValetScalarFieldEnum {
  CompanyId = 'companyId',
  CreatedAt = 'createdAt',
  DisplayName = 'displayName',
  Image = 'image',
  LicenceId = 'licenceID',
  Uid = 'uid',
  UpdatedAt = 'updatedAt',
}

export type ValetWhereInput = {
  AND?: InputMaybe<Array<ValetWhereInputStrict>>
  NOT?: InputMaybe<Array<ValetWhereInputStrict>>
  OR?: InputMaybe<Array<ValetWhereInputStrict>>
  bookingTimeline?: InputMaybe<BookingTimelineListRelationFilter>
  company?: InputMaybe<CompanyRelationFilter>
  companyId?: InputMaybe<IntFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  displayName?: InputMaybe<StringFilter>
  image?: InputMaybe<StringFilter>
  licenceID?: InputMaybe<StringFilter>
  pickupAssignments?: InputMaybe<ValetAssignmentListRelationFilter>
  returnAssignments?: InputMaybe<ValetAssignmentListRelationFilter>
  uid?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
  user?: InputMaybe<UserRelationFilter>
}

export type ValetWhereInputStrict = {
  AND: Array<ValetWhereInputStrict>
  NOT: Array<ValetWhereInputStrict>
  OR: Array<ValetWhereInputStrict>
  bookingTimeline: BookingTimelineListRelationFilter
  company: CompanyRelationFilter
  companyId: IntFilter
  createdAt: DateTimeFilter
  displayName: StringFilter
  image: StringFilter
  licenceID: StringFilter
  pickupAssignments: ValetAssignmentListRelationFilter
  returnAssignments: ValetAssignmentListRelationFilter
  uid: StringFilter
  updatedAt: DateTimeFilter
  user: UserRelationFilter
}

export type ValetWhereUniqueInput = {
  uid: Scalars['String']['input']
}

export type Verification = {
  __typename?: 'Verification'
  adminId: Scalars['String']['output']
  createdAt: Scalars['DateTime']['output']
  garageId: Scalars['Int']['output']
  updatedAt: Scalars['DateTime']['output']
  verified: Scalars['Boolean']['output']
}

export type VerificationListRelationFilter = {
  every?: InputMaybe<VerificationWhereInput>
  none?: InputMaybe<VerificationWhereInput>
  some?: InputMaybe<VerificationWhereInput>
}

export type VerificationOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type VerificationOrderByWithRelationInput = {
  admin?: InputMaybe<AdminOrderByWithRelationInput>
  adminId?: InputMaybe<SortOrder>
  createdAt?: InputMaybe<SortOrder>
  garage?: InputMaybe<GarageOrderByWithRelationInput>
  garageId?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
  verified?: InputMaybe<SortOrder>
}

export type VerificationRelationFilter = {
  is?: InputMaybe<VerificationWhereInput>
  isNot?: InputMaybe<VerificationWhereInput>
}

export enum VerificationScalarFieldEnum {
  AdminId = 'adminId',
  CreatedAt = 'createdAt',
  GarageId = 'garageId',
  UpdatedAt = 'updatedAt',
  Verified = 'verified',
}

export type VerificationWhereInput = {
  AND?: InputMaybe<Array<VerificationWhereInputStrict>>
  NOT?: InputMaybe<Array<VerificationWhereInputStrict>>
  OR?: InputMaybe<Array<VerificationWhereInputStrict>>
  admin?: InputMaybe<AdminRelationFilter>
  adminId?: InputMaybe<StringFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  garage?: InputMaybe<GarageRelationFilter>
  garageId?: InputMaybe<IntFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
  verified?: InputMaybe<BoolFilter>
}

export type VerificationWhereInputStrict = {
  AND: Array<VerificationWhereInputStrict>
  NOT: Array<VerificationWhereInputStrict>
  OR: Array<VerificationWhereInputStrict>
  admin: AdminRelationFilter
  adminId: StringFilter
  createdAt: DateTimeFilter
  garage: GarageRelationFilter
  garageId: IntFilter
  updatedAt: DateTimeFilter
  verified: BoolFilter
}

export type VerificationWhereUniqueInput = {
  garageId: Scalars['Int']['input']
}

export type RegisterWithCredentialsMutationVariables = Exact<{
  registerWithCredentialsInput: RegisterWithCredentialsInput
}>

export type RegisterWithCredentialsMutation = {
  __typename?: 'Mutation'
  registerWithCredentials: {
    __typename?: 'User'
    updatedAt: any
    uid: string
    name?: string | null
    image?: string | null
    createdAt: any
  }
}

export type LoginMutationVariables = Exact<{
  loginInput: LoginInput
}>

export type LoginMutation = {
  __typename?: 'Mutation'
  login: {
    __typename?: 'LoginResponse'
    accessToken: string
    user: {
      __typename?: 'User'
      uid: string
      name?: string | null
      image?: string | null
    }
  }
}

export type RegisterWithProviderMutationVariables = Exact<{
  registerWithProviderInput: RegisterWithProviderInput
}>

export type RegisterWithProviderMutation = {
  __typename?: 'Mutation'
  registerWithProvider: { __typename?: 'User'; uid: string }
}

export type CreateCompanyMutationVariables = Exact<{
  createCompanyInput: CreateCompanyInput
}>

export type CreateCompanyMutation = {
  __typename?: 'Mutation'
  createCompany: { __typename?: 'Company'; id: number }
}

export type CreateGarageMutationVariables = Exact<{
  createGarageInput: CreateGarageInput
}>

export type CreateGarageMutation = {
  __typename?: 'Mutation'
  createGarage: { __typename?: 'Garage'; id: number }
}

export type CreateManySlotsMutationVariables = Exact<{
  createSlotInput: CreateSlotInput
  count: Scalars['Float']['input']
}>

export type CreateManySlotsMutation = {
  __typename?: 'Mutation'
  createManySlots: { __typename?: 'ReturnCount'; count: number }
}

export type CreateBookingTimelineMutationVariables = Exact<{
  createBookingTimelineInput: CreateBookingTimelineInput
}>

export type CreateBookingTimelineMutation = {
  __typename?: 'Mutation'
  createBookingTimeline: {
    __typename?: 'BookingTimeline'
    bookingId: number
    id: number
    managerId?: string | null
    status: BookingStatus
    timestamp: any
  }
}

export type CreateValetMutationVariables = Exact<{
  createValetInput: CreateValetInput
}>

export type CreateValetMutation = {
  __typename?: 'Mutation'
  createValet: { __typename?: 'Valet'; uid: string }
}

export type AssignValetMutationVariables = Exact<{
  bookingId: Scalars['Float']['input']
  status: Scalars['String']['input']
}>

export type AssignValetMutation = {
  __typename?: 'Mutation'
  assignValet: { __typename?: 'Booking'; id: number }
}

export type CreateVerificationMutationVariables = Exact<{
  createVerificationInput: CreateVerificationInput
}>

export type CreateVerificationMutation = {
  __typename?: 'Mutation'
  createVerification: {
    __typename?: 'Verification'
    adminId: string
    createdAt: any
    garageId: number
    updatedAt: any
    verified: boolean
  }
}

export type RemoveVerificationMutationVariables = Exact<{
  where: VerificationWhereUniqueInput
}>

export type RemoveVerificationMutation = {
  __typename?: 'Mutation'
  removeVerification: {
    __typename?: 'Verification'
    adminId: string
    createdAt: any
    garageId: number
    updatedAt: any
    verified: boolean
  }
}

export type RemoveAdminMutationVariables = Exact<{
  where: AdminWhereUniqueInput
}>

export type RemoveAdminMutation = {
  __typename?: 'Mutation'
  removeAdmin: {
    __typename?: 'Admin'
    createdAt: any
    updatedAt: any
    uid: string
    user?: { __typename?: 'User'; name?: string | null } | null
  }
}

export type CreateAdminMutationVariables = Exact<{
  createAdminInput: CreateAdminInput
}>

export type CreateAdminMutation = {
  __typename?: 'Mutation'
  createAdmin: {
    __typename?: 'Admin'
    createdAt: any
    uid: string
    updatedAt: any
    user?: { __typename?: 'User'; name?: string | null } | null
  }
}

export type CompaniesQueryVariables = Exact<{
  where?: InputMaybe<CompanyWhereInput>
  orderBy?: InputMaybe<
    Array<CompanyOrderByWithRelationInput> | CompanyOrderByWithRelationInput
  >
  cursor?: InputMaybe<CompanyWhereUniqueInput>
  take?: InputMaybe<Scalars['Int']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  distinct?: InputMaybe<Array<CompanyScalarFieldEnum> | CompanyScalarFieldEnum>
}>

export type CompaniesQuery = {
  __typename?: 'Query'
  companies: Array<{
    __typename?: 'Company'
    createdAt: any
    description?: string | null
    displayName?: string | null
    id: number
    updatedAt: any
    garages: Array<{ __typename?: 'Garage'; id: number }>
    managers: Array<{ __typename?: 'Manager'; uid: string }>
  }>
}

export type GetAuthProviderQueryVariables = Exact<{
  uid: Scalars['String']['input']
}>

export type GetAuthProviderQuery = {
  __typename?: 'Query'
  getAuthProvider?: {
    __typename?: 'AuthProvider'
    uid: string
    type: AuthProviderType
  } | null
}

export type SearchGaragesQueryVariables = Exact<{
  dateFilter: DateFilterInput
  locationFilter: LocationFilterInput
  slotsFilter?: InputMaybe<SlotWhereInput>
  garageFilter?: InputMaybe<GarageFilter>
}>

export type SearchGaragesQuery = {
  __typename?: 'Query'
  searchGarages: Array<{
    __typename?: 'Garage'
    id: number
    images: Array<string>
    displayName?: string | null
    address?: {
      __typename?: 'Address'
      latitude: number
      longitude: number
      address: string
    } | null
    availableSlots: Array<{
      __typename?: 'MinimalSlotGroupBy'
      pricePerHour: number
      type: SlotType
      count: number
    }>
    verification?: { __typename?: 'Verification'; verified: boolean } | null
  }>
}

export type MyCompanyQueryVariables = Exact<{ [key: string]: never }>

export type MyCompanyQuery = {
  __typename?: 'Query'
  myCompany: {
    __typename?: 'Company'
    id: number
    createdAt: any
    displayName?: string | null
    garages: Array<{
      __typename?: 'Garage'
      displayName?: string | null
      id: number
      description?: string | null
      address?: {
        __typename?: 'Address'
        id: number
        address: string
        latitude: number
        longitude: number
      } | null
    }>
  }
}

export type GaragesQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  cursor?: InputMaybe<GarageWhereUniqueInput>
  orderBy?: InputMaybe<
    Array<GarageOrderByWithRelationInput> | GarageOrderByWithRelationInput
  >
  where?: InputMaybe<GarageWhereInput>
}>

export type GaragesQuery = {
  __typename?: 'Query'
  garages: Array<{
    __typename?: 'Garage'
    id: number
    displayName?: string | null
    description?: string | null
    images: Array<string>
    verification?: { __typename?: 'Verification'; verified: boolean } | null
    address?: {
      __typename?: 'Address'
      id: number
      latitude: number
      longitude: number
      address: string
    } | null
    slotCounts: Array<{
      __typename?: 'SlotTypeCount'
      type: SlotType
      count?: number | null
    }>
  }>
  garagesCount: { __typename?: 'AggregateCountOutput'; count: number }
}

export type ValetFieldsFragment = {
  __typename?: 'Valet'
  image?: string | null
  uid: string
  displayName: string
}

export type BookingFieldsFragment = {
  __typename?: 'Booking'
  id: number
  pricePerHour?: number | null
  endTime: any
  startTime: any
  vehicleNumber: string
  passcode?: string | null
  status: BookingStatus
  bookingTimeline: Array<{
    __typename?: 'BookingTimeline'
    status: BookingStatus
    timestamp: any
  }>
  valetAssignment?: {
    __typename?: 'ValetAssignment'
    pickupValet?: {
      __typename?: 'Valet'
      image?: string | null
      uid: string
      displayName: string
    } | null
    returnValet?: {
      __typename?: 'Valet'
      image?: string | null
      uid: string
      displayName: string
    } | null
  } | null
  slot: {
    __typename?: 'Slot'
    displayName?: string | null
    garage: {
      __typename?: 'Garage'
      images: Array<string>
      address?: {
        __typename?: 'Address'
        address: string
        latitude: number
        longitude: number
      } | null
    }
  }
}

export type BookingsForCustomerQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  cursor?: InputMaybe<BookingWhereUniqueInput>
  orderBy?: InputMaybe<
    Array<BookingOrderByWithRelationInput> | BookingOrderByWithRelationInput
  >
  where?: InputMaybe<BookingWhereInput>
  distinct?: InputMaybe<Array<BookingScalarFieldEnum> | BookingScalarFieldEnum>
}>

export type BookingsForCustomerQuery = {
  __typename?: 'Query'
  bookingsForCustomer: Array<{
    __typename?: 'Booking'
    id: number
    pricePerHour?: number | null
    endTime: any
    startTime: any
    vehicleNumber: string
    passcode?: string | null
    status: BookingStatus
    bookingTimeline: Array<{
      __typename?: 'BookingTimeline'
      status: BookingStatus
      timestamp: any
    }>
    valetAssignment?: {
      __typename?: 'ValetAssignment'
      pickupValet?: {
        __typename?: 'Valet'
        image?: string | null
        uid: string
        displayName: string
      } | null
      returnValet?: {
        __typename?: 'Valet'
        image?: string | null
        uid: string
        displayName: string
      } | null
    } | null
    slot: {
      __typename?: 'Slot'
      displayName?: string | null
      garage: {
        __typename?: 'Garage'
        images: Array<string>
        address?: {
          __typename?: 'Address'
          address: string
          latitude: number
          longitude: number
        } | null
      }
    }
  }>
  bookingsCount: { __typename?: 'AggregateCountOutput'; count: number }
}

export type BookingsForGarageQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  cursor?: InputMaybe<BookingWhereUniqueInput>
  orderBy?: InputMaybe<
    Array<BookingOrderByWithRelationInput> | BookingOrderByWithRelationInput
  >
  where?: InputMaybe<BookingWhereInput>
  distinct?: InputMaybe<Array<BookingScalarFieldEnum> | BookingScalarFieldEnum>
}>

export type BookingsForGarageQuery = {
  __typename?: 'Query'
  bookingsForGarage: Array<{
    __typename?: 'Booking'
    id: number
    pricePerHour?: number | null
    endTime: any
    startTime: any
    vehicleNumber: string
    passcode?: string | null
    status: BookingStatus
    bookingTimeline: Array<{
      __typename?: 'BookingTimeline'
      status: BookingStatus
      timestamp: any
    }>
    valetAssignment?: {
      __typename?: 'ValetAssignment'
      pickupValet?: {
        __typename?: 'Valet'
        image?: string | null
        uid: string
        displayName: string
      } | null
      returnValet?: {
        __typename?: 'Valet'
        image?: string | null
        uid: string
        displayName: string
      } | null
    } | null
    slot: {
      __typename?: 'Slot'
      displayName?: string | null
      garage: {
        __typename?: 'Garage'
        images: Array<string>
        address?: {
          __typename?: 'Address'
          address: string
          latitude: number
          longitude: number
        } | null
      }
    }
  }>
  bookingsCount: { __typename?: 'AggregateCountOutput'; count: number }
}

export type ValetMeQueryVariables = Exact<{ [key: string]: never }>

export type ValetMeQuery = {
  __typename?: 'Query'
  valetMe?: {
    __typename?: 'Valet'
    uid: string
    companyId?: number | null
  } | null
}

export type AdminMeQueryVariables = Exact<{ [key: string]: never }>

export type AdminMeQuery = {
  __typename?: 'Query'
  adminMe: { __typename?: 'Admin'; uid: string }
}

export type CompanyValetsQueryVariables = Exact<{
  distinct?: InputMaybe<Array<ValetScalarFieldEnum> | ValetScalarFieldEnum>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  cursor?: InputMaybe<ValetWhereUniqueInput>
  orderBy?: InputMaybe<
    Array<ValetOrderByWithRelationInput> | ValetOrderByWithRelationInput
  >
  where?: InputMaybe<ValetWhereInput>
}>

export type CompanyValetsQuery = {
  __typename?: 'Query'
  companyValetsTotal: number
  companyValets: Array<{
    __typename?: 'Valet'
    displayName: string
    uid: string
    createdAt: any
    updatedAt: any
    companyId?: number | null
    image?: string | null
    licenceID: string
  }>
}

export type ValetPickupsQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
}>

export type ValetPickupsQuery = {
  __typename?: 'Query'
  valetPickupsTotal: number
  valetPickups: Array<{
    __typename?: 'Booking'
    id: number
    vehicleNumber: string
    startTime: any
    endTime: any
    valetAssignment?: {
      __typename?: 'ValetAssignment'
      pickupLat?: number | null
      pickupLng?: number | null
      pickupValetId?: string | null
    } | null
    slot: {
      __typename?: 'Slot'
      garage: {
        __typename?: 'Garage'
        address?: {
          __typename?: 'Address'
          latitude: number
          longitude: number
        } | null
      }
    }
  }>
}

export type ValetDropsQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
}>

export type ValetDropsQuery = {
  __typename?: 'Query'
  valetDropsTotal: number
  valetDrops: Array<{
    __typename?: 'Booking'
    id: number
    vehicleNumber: string
    startTime: any
    endTime: any
    valetAssignment?: {
      __typename?: 'ValetAssignment'
      returnLat?: number | null
      returnLng?: number | null
      returnValetId?: string | null
    } | null
    slot: {
      __typename?: 'Slot'
      garage: {
        __typename?: 'Garage'
        address?: {
          __typename?: 'Address'
          latitude: number
          longitude: number
        } | null
      }
    }
  }>
}

export type ValetBookingFieldsFragment = {
  __typename?: 'Booking'
  id: number
  vehicleNumber: string
  passcode?: string | null
  status: BookingStatus
  startTime: any
  endTime: any
  slot: {
    __typename?: 'Slot'
    garage: {
      __typename?: 'Garage'
      address?: {
        __typename?: 'Address'
        latitude: number
        longitude: number
      } | null
    }
  }
}

export type MyPickupTripsQueryVariables = Exact<{
  distinct?: InputMaybe<Array<BookingScalarFieldEnum> | BookingScalarFieldEnum>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<
    Array<BookingOrderByWithRelationInput> | BookingOrderByWithRelationInput
  >
  where?: InputMaybe<BookingWhereInput>
}>

export type MyPickupTripsQuery = {
  __typename?: 'Query'
  bookingsForValet: Array<{
    __typename?: 'Booking'
    id: number
    vehicleNumber: string
    passcode?: string | null
    status: BookingStatus
    startTime: any
    endTime: any
    valetAssignment?: {
      __typename?: 'ValetAssignment'
      pickupLat?: number | null
      pickupLng?: number | null
      pickupValetId?: string | null
    } | null
    slot: {
      __typename?: 'Slot'
      garage: {
        __typename?: 'Garage'
        address?: {
          __typename?: 'Address'
          latitude: number
          longitude: number
        } | null
      }
    }
  }>
  bookingsCount: { __typename?: 'AggregateCountOutput'; count: number }
}

export type MyDropTripsQueryVariables = Exact<{
  distinct?: InputMaybe<Array<BookingScalarFieldEnum> | BookingScalarFieldEnum>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<
    Array<BookingOrderByWithRelationInput> | BookingOrderByWithRelationInput
  >
  where?: InputMaybe<BookingWhereInput>
}>

export type MyDropTripsQuery = {
  __typename?: 'Query'
  bookingsForValet: Array<{
    __typename?: 'Booking'
    id: number
    vehicleNumber: string
    passcode?: string | null
    status: BookingStatus
    startTime: any
    endTime: any
    valetAssignment?: {
      __typename?: 'ValetAssignment'
      returnLat?: number | null
      returnLng?: number | null
      returnValetId?: string | null
    } | null
    slot: {
      __typename?: 'Slot'
      garage: {
        __typename?: 'Garage'
        address?: {
          __typename?: 'Address'
          latitude: number
          longitude: number
        } | null
      }
    }
  }>
  bookingsCount: { __typename?: 'AggregateCountOutput'; count: number }
}

export type AdminsQueryVariables = Exact<{
  distinct?: InputMaybe<Array<AdminScalarFieldEnum> | AdminScalarFieldEnum>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  cursor?: InputMaybe<AdminWhereUniqueInput>
  orderBy?: InputMaybe<
    Array<AdminOrderByWithRelationInput> | AdminOrderByWithRelationInput
  >
  where?: InputMaybe<AdminWhereInput>
}>

export type AdminsQuery = {
  __typename?: 'Query'
  adminsCount: number
  admins: Array<{
    __typename?: 'Admin'
    uid: string
    updatedAt: any
    createdAt: any
    verificationsCount: number
    user?: { __typename?: 'User'; name?: string | null } | null
  }>
}
