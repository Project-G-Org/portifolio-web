import Image from 'next/image'
import React from 'react'

interface ImageProps {
  imageUrl: string
  imageAlt: string
  status: boolean
}

export default function CarouselImage({ imageUrl, imageAlt }: ImageProps) {
  return (
    <Image
      id={status}
      src={imageUrl}
      fill
      style={{ objectFit: 'cover' }}
      alt={imageAlt}
    />
  )
}
