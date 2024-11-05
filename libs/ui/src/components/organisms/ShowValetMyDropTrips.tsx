import { useQuery } from '@apollo/client'
import {
  BookingStatus,
  MyDropTripsDocument,
  SortOrder,
} from '@autospace/network/src/generated/graphql'
import { useTakeSkip } from '@autospace/utils/hooks/pagination'
import { Reveal } from '../molecules/Reveal'
import { AssignValetButton } from './AssignValetButton'
import { ShowData } from './ShowData'
import { ValetTripCard } from './ValetTripCard'

export const ShowValetMyDropTrips = ({ uid }: { uid: string }) => {
  const { setSkip, setTake, skip, take } = useTakeSkip()

  const { data, loading } = useQuery(MyDropTripsDocument, {
    variables: {
      skip,
      take,
      orderBy: { endTime: SortOrder.Asc },
      where: {
        bookingTimeline: {
          none: {
            status: BookingStatus.ValetReturned,
          },
        },
        valetAssignment: {
          is: {
            returnValetId: { equals: uid },
          },
        },
      },
    },
  })

  return (
    <ShowData
      loading={loading}
      pagination={{
        setSkip,
        setTake,
        skip,
        take,
        resultCount: data?.bookingsForValet.length || 0,
        totalCount: data?.bookingsCount.count || 0,
      }}
    >
      {data?.bookingsForValet.map((booking) => (
        <ValetTripCard
          key={booking.id}
          booking={{
            id: booking.id,
            time: booking.startTime,
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
          <div className="space-y-2">
            <div className="grid grid-cols-2 gap-3">
              <div className="text-xl font-semibold ">
                {booking.vehicleNumber}
              </div>

              <Reveal
                secret={booking.passcode}
                showIntruction={false}
                className="w-full"
              />
            </div>

            <div className="text-sm">
              {booking.status?.split('_').join(' ')}
            </div>

            {[
              BookingStatus.ValetAssignedForCheckIn,
              BookingStatus.CheckedOut,
            ].includes(booking.status) ? (
              <AssignValetButton
                bookingId={booking.id}
                status={BookingStatus.ValetReturned}
              >
                Drop
              </AssignValetButton>
            ) : null}
          </div>
        </ValetTripCard>
      ))}
    </ShowData>
  )
}
