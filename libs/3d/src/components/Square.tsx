import { Mesh, Vector3 } from 'three'
import { yellowColor } from '../utils/constants'

export interface SquareProps extends Partial<Mesh> {
  position: Vector3
  size?: [number, number]
  borderColor?: string
}

export const Square: React.FC<SquareProps> = ({
  position,
  size = [5, 3],
  borderColor = yellowColor,
  ...props
}) => {
  const halfWidth = size[0] / 2
  const halfLength = size[1] / 2
  const borderThickness = 0.2

  return (
    <>
      {/* Top border */}
      <mesh
        position={[
          position.x,
          position.y,
          position.z + halfLength - borderThickness / 2,
        ]}
        {...props}
      >
        <boxGeometry args={[size[0], borderThickness, borderThickness]} />
        <meshBasicMaterial color={borderColor} />
      </mesh>
      {/* Bottom border */}
      <mesh
        position={[
          position.x,
          position.y,
          position.z - halfLength + borderThickness / 2,
        ]}
        {...props}
      >
        <boxGeometry args={[size[0], borderThickness, borderThickness]} />
        <meshBasicMaterial color={borderColor} />
      </mesh>
      {/* Left border */}
      <mesh
        position={[
          position.x - halfWidth + borderThickness / 2,
          position.y,
          position.z,
        ]}
        {...props}
      >
        <boxGeometry
          args={[
            borderThickness,
            borderThickness,
            size[1] - 2 * borderThickness,
          ]}
        />
        <meshBasicMaterial color={borderColor} />
      </mesh>
      {/* Right border */}
      <mesh
        position={[
          position.x + halfWidth - borderThickness / 2,
          position.y,
          position.z,
        ]}
        {...props}
      >
        <boxGeometry
          args={[
            borderThickness,
            borderThickness,
            size[1] - 2 * borderThickness,
          ]}
        />
        <meshBasicMaterial color={borderColor} />
      </mesh>
    </>
  )
}
