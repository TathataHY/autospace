'use client'

import dynamic from 'next/dynamic'

const CarSceneComponent = dynamic(
  () => import('./CarScene').then((mod) => mod.CarScene),
  {
    ssr: false,
    loading: () => (
      <div className="h-[calc(100vh-2rem)] flex items-center justify-center">
        Loading 3D Scene...
      </div>
    ),
  },
)

export const CarScene = (props: {
  camera?: React.ReactNode
  children?: React.ReactNode
  className?: string
  orbitControls?: boolean
  hideAllComments?: boolean
}) => {
  return <CarSceneComponent {...props} />
}
