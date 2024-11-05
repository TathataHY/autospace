import { FormProviderBookSlot } from '@autospace/forms/src/bookSlot'
import { FormTypeSearchGarage } from '@autospace/forms/src/searchGarages'
import { SearchGaragesQuery } from '@autospace/network/src/generated/graphql'
import { useKeypress } from '@autospace/utils/hooks/keys'
import { useState } from 'react'
import { useWatch } from 'react-hook-form'
import { Dialog } from '../../atoms/Dialog'
import { ParkingIcon } from '../../atoms/ParkingIcon'
import { BookSlotPopup } from '../BookSlotPopup'
import { Marker } from '../map/MapMarker'

export const GarageMarker = ({
  marker,
}: {
  marker: SearchGaragesQuery['searchGarages'][number]
}) => {
  const [showPopup, setShowPopup] = useState(false)
  useKeypress(['Escape'], () => setShowPopup(false))

  const { endTime, startTime } = useWatch<FormTypeSearchGarage>()

  if (!marker.address?.latitude || !marker.address.longitude) {
    return null
  }

  return (
    <>
      <Dialog
        title="Booking"
        widthClassName="max-w-3xl"
        open={showPopup}
        setOpen={setShowPopup}
      >
        <FormProviderBookSlot defaultValues={{ endTime, startTime }}>
          <BookSlotPopup garage={marker} />
        </FormProviderBookSlot>
      </Dialog>

      <Marker
        latitude={marker.address.latitude}
        longitude={marker.address.longitude}
        onClick={(e) => {
          e.originalEvent.stopPropagation()
          setShowPopup((state) => !state)
        }}
      >
        <ParkingIcon />
      </Marker>
    </>
  )
}
