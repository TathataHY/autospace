import { useEffect, useState } from 'react'
import { MathUtils, Vector3 } from 'three'
import { radians, randExp } from '../utils'
import { BUILDING_SETS } from '../utils/buildingSets'
import { FLOOR_HEIGHT } from '../utils/constants'
import { Building } from './Building'

export const BuildingSet = ({
  minHeight = 2,
  maxHeight = 20,
}: {
  minHeight?: number
  maxHeight?: number
}) => {
  const [buildingSetIndex, setBuildingSetIndex] = useState<number>(0)
  const [floors, setFloors] = useState<number[]>([])

  useEffect(() => {
    setBuildingSetIndex(MathUtils.randInt(0, BUILDING_SETS.length - 1))

    setFloors(
      BUILDING_SETS[buildingSetIndex].map(() => {
        const randHeight = randExp(minHeight, maxHeight, 7)
        return Math.floor(randHeight)
      }),
    )
  }, [])

  return (
    <group>
      {BUILDING_SETS[buildingSetIndex].map(({ length, position, width }, i) => (
        <group key={i}>
          <Building
            position={
              new Vector3(position[0] * 2, position[1] * 2, position[2] * 2)
            }
            size={[width * 2, length * 2]}
            floors={floors[i]}
          />
          <mesh
            position={[
              position[0] * 2,
              FLOOR_HEIGHT * (floors[i] - 1),
              position[2] * 2,
            ]}
            rotation={[radians(-90), 0, 0]}
          >
            <planeGeometry args={[width * 2, length * 2]} />
            <meshBasicMaterial color={'black'} transparent opacity={0.6} />
          </mesh>
        </group>
      ))}
    </group>
  )
}
