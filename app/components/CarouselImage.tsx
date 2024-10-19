import Image from 'next/image'
import React from 'react'

interface ImageProps {
  imageUrl: string
  imageAlt: string
}

export default function CarouselImage({ imageUrl, imageAlt }: ImageProps) {
  return (
    <Image src={imageUrl} fill style={{ objectFit: 'cover' }} alt={imageAlt} />
  )
}
