import React from 'react'
import ProductText from './product-text'
export default function Product() {
  return (
    <div className='product-page'>
      <section className='product'>
          <img src="/unsplash_zcUgjyqEwe8.png" alt="" className='img1'/>
          <img src="/Sans titre-2.png" alt="" className='img2' />
          <img src="/1.png" alt="" className='img3'/>
      </section>
        <section>
           <ProductText/>
        </section>
    </div>
    
  )
}
