import { Vector3 } from 'three'
import { FLOOR_HEIGHT } from '../utils/constants'
import { Square, SquareProps } from './Square'

interface BuildingProps extends SquareProps {
  floors?: number
}

export const Building = ({ position, size, floors = 3 }: BuildingProps) => {
  return (
    <>
      {Array.from({ length: floors }, (_, index) => (
        <Square
          key={index}
          position={
            new Vector3(
              position.x,
              position.y + index * FLOOR_HEIGHT,
              position.z,
            )
          }
          size={size}
          borderColor="white"
        />
      ))}
    </>
  )
}
