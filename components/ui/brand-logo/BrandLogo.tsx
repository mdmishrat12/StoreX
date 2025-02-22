import React from 'react'
import { BrandLogoProps } from './styles'
// import Image from 'next/image'
import Link from 'next/link'

const BrandLogo:React.FC<BrandLogoProps> = ({
    // src,
    // alt,
    className,
    // height=50,
    // width=100
}) => {
  return (
    <div className={`relative ${className}`}>
        <Link href='/'>
      {/* <Image
        src={src||'/brand-logo.png'}
        alt={alt||'StoreX'}
        width={width}
        height={height}
        className="object-contain" // Ensures the image scales properly
      /> */}

      <div className="text-2xl font-bold text-[tomato]">
        StoreX
      </div>
      </Link>
    </div>
  )
}

export default BrandLogo