import React from 'react'
import TextAcceuil from './text-acceuil'
import ImageAcceuil from './image-acceuil'
export default function acceuil() {
  return (
    <div className='acceuil'>
      <TextAcceuil/>
      <ImageAcceuil/>
      <div className="eclipse">
          <img src="/Ellipse.png" alt="photo"  />
          
      </div>
      {/* <div className="flex">
                <div id='layer'></div> 
                <div className='layer1'></div>
      </div> */}
    </div>
  )
}
