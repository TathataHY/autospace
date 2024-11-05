import { useQuery } from '@apollo/client'
import {
  BookingStatus,
  ValetDropsDocument,
} from '@autospace/network/src/generated/graphql'
import { useTakeSkip } from '@autospace/utils/hooks/pagination'
import { AssignValetButton } from './AssignValetButton'
import { ShowData } from './ShowData'
import { ValetTripCard } from './ValetTripCard'

export const ShowValetAllDropTrips = () => {
  const { loading, data } = useQuery(ValetDropsDocument)
  const { setSkip, setTake, skip, take } = useTakeSkip()
  return (
    <ShowData
      loading={loading}
      pagination={{
        setSkip,
        setTake,
        skip,
        take,
        resultCount: data?.valetDrops.length || 0,
        totalCount: data?.valetDropsTotal || 0,
      }}
    >
      {data?.valetDrops.map((booking) => (
        <ValetTripCard
          key={booking.id}
          booking={{
            id: booking.id,
            time: booking.endTime,
          }}
          end={{
            lat: booking.valetAssignment?.returnLat || undefined,
            lng: booking.valetAssignment?.returnLng || undefined,
          }}
          start={{
            lat: booking.slot.garage.address?.latitude || undefined,
            lng: booking.slot.garage.address?.longitude || undefined,
          }}
        >
          <AssignValetButton
            bookingId={booking.id}
            status={BookingStatus.ValetAssignedForCheckOut}
          >
            Accept
          </AssignValetButton>
        </ValetTripCard>
      ))}
    </ShowData>
  )
}
