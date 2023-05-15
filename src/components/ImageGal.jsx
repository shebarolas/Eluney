import React from 'react'

export const ImageGal = ({images}) => {

  return (
    <div className="Images">
         {images.map(image => (
        <img key={image.id} src={image.image} alt={image.alt} />
      ))}
    </div>
  )
}
