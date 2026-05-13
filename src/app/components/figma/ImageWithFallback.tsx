import React, { useState } from 'react'

export function ImageWithFallback(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  const [didError, setDidError] = useState(false)
  const { src, alt, className, ...rest } = props

  return didError ? (
    <div className={`inline-block bg-gray-100 flex items-center justify-center ${className ?? ''}`}>
      <span className="text-gray-400 text-sm">Imagem não encontrada</span>
    </div>
  ) : (
    <img src={src} alt={alt} className={className} {...rest} onError={() => setDidError(true)} />
  )
}