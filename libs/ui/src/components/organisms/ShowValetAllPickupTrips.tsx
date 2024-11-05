import { useQuery } from '@apollo/client'
import {
  BookingStatus,
  ValetPickupsDocument,
} from '@autospace/network/src/generated/graphql'
import { useTakeSkip } from '@autospace/utils/hooks/pagination'
import { AssignValetButton } from './AssignValetButton'
import { ShowData } from './ShowData'
import { ValetTripCard } from './ValetTripCard'

export const ShowValetAllPickupTrips = () => {
  const { loading, data } = useQuery(ValetPickupsDocument)
  const { setSkip, setTake, skip, take } = useTakeSkip()
  return (
    <ShowData
      loading={loading}
      pagination={{
        setSkip,
        setTake,
        skip,
        take,
        resultCount: data?.valetPickups.length || 0,
        totalCount: data?.valetPickupsTotal || 0,
      }}
    >
      {data?.valetPickups.map((booking) => (
        <ValetTripCard
          key={booking.id}
          booking={{
            id: booking.id,
            time: booking.startTime,
          }}
          start={{
            lat: booking.valetAssignment?.pickupLat || undefined,
            lng: booking.valetAssignment?.pickupLng || undefined,
          }}
          end={{
            lat: booking.slot.garage.address?.latitude,
            lng: booking.slot.garage.address?.longitude,
          }}
        >
          <AssignValetButton
            bookingId={booking.id}
            status={BookingStatus.ValetAssignedForCheckIn}
          >
            Accept
          </AssignValetButton>
        </ValetTripCard>
      ))}
    </ShowData>
  )
}
