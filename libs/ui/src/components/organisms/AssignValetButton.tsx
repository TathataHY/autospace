import {
  AssignValetDocument,
  BookingStatus,
  namedOperations,
} from '@autospace/network/src/generated/graphql'
import { ReactNode } from 'react'
import { useMutation } from '@apollo/client'
import { toast } from '../molecules/Toast'
import { Button } from '../atoms/Button'

export const AssignValetButton = ({
  bookingId,
  status,
  children,
}: {
  bookingId: number
  status: BookingStatus
  children: ReactNode
}) => {
  const [assignPickup, { loading }] = useMutation(AssignValetDocument, {
    awaitRefetchQueries: true,
    refetchQueries: [
      namedOperations.Query.valetDrops,
      namedOperations.Query.valetPickups,
      namedOperations.Query.myDropTrips,
      namedOperations.Query.myPickupTrips,
    ],
    onCompleted(data) {
      toast(`Action successful.
            ID: ${data.assignValet.id}`)
    },
  })

  return (
    <Button
      loading={loading}
      variant="outlined"
      fullWidth
      onClick={async () => {
        await assignPickup({
          variables: { bookingId, status },
        })
      }}
    >
      {children}
    </Button>
  )
}