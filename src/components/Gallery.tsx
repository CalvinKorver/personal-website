'use client'

import { useState } from 'react'
import Image from 'next/image'
import { urlFor } from '../../lib/sanity'

interface GalleryImage {
  _key: string
  asset: {
    _ref: string
  }
  alt?: string
}

interface GalleryProps {
  images: GalleryImage[]
  display: 'stacked' | 'inline' | 'carousel'
  zoom?: boolean
}

export default function Gallery({ images, display = 'stacked', zoom = false }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  if (!images || images.length === 0) {
    return null
  }

  const handleImageClick = (index: number) => {
    if (zoom) {
      setSelectedImage(index)
    }
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)
  }

  let galleryContent

  if (display === 'carousel') {
    galleryContent = (
      <div className="relative w-full max-w-4xl mx-auto">
        <div className="relative overflow-hidden rounded-lg bg-gray-100">
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {images.map((image, index) => (
              <div key={image._key} className="w-full flex-shrink-0">
                <Image
                  src={urlFor(image).width(800).height(600).url()}
                  alt={image.alt || `Gallery image ${index + 1}`}
                  width={800}
                  height={600}
                  className={`w-full h-auto object-cover ${zoom ? 'cursor-zoom-in' : ''}`}
                  onClick={() => handleImageClick(index)}
                />
              </div>
            ))}
          </div>
        </div>
        
        {images.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              aria-label="Previous image"
            >
              ←
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              aria-label="Next image"
            >
              →
            </button>
            
            <div className="flex justify-center mt-4 space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    )
  } else if (display === 'inline') {
    galleryContent = (
      <div className="flex flex-wrap gap-4 justify-center">
        {images.map((image, index) => (
          <div key={image._key} className="flex-shrink-0">
            <Image
              src={urlFor(image).width(300).height(300).url()}
              alt={image.alt || `Gallery image ${index + 1}`}
              width={300}
              height={300}
              className={`rounded-lg object-cover ${zoom ? 'cursor-zoom-in' : ''}`}
              onClick={() => handleImageClick(index)}
            />
          </div>
        ))}
      </div>
    )
  } else {
    // Default: stacked
    galleryContent = (
      <div className="space-y-6">
        {images.map((image, index) => (
          <div key={image._key} className="w-full">
            <Image
              src={urlFor(image).width(800).url()}
              alt={image.alt || `Gallery image ${index + 1}`}
              width={800}
              height={600}
              className={`w-full h-auto rounded-lg ${zoom ? 'cursor-zoom-in' : ''}`}
              onClick={() => handleImageClick(index)}
            />
          </div>
        ))}
      </div>
    )
  }

  return (
    <>
      {galleryContent}
      {zoom && selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-full max-h-full">
            <Image
              src={urlFor(images[selectedImage]).width(1200).url()}
              alt={images[selectedImage].alt || `Gallery image ${selectedImage + 1}`}
              width={1200}
              height={800}
              className="max-w-full max-h-full object-contain"
            />
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-2xl bg-black/50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70 transition-colors"
              aria-label="Close"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  )
}