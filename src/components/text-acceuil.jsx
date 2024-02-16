import React, { useEffect, useRef } from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";

export default function TextAcceuil() {
  const image = useRef(null)
  useEffect(() => {
    // Accéder au DOM de l'élément référencé (par exemple, la largeur de l'image)
    if (image.current) {
      image.current.addEventListener('click', () =>{
        image.current.style.width="300px"
      })
      }
  }, []);
  return (
    <div>
        <section className="text-accueil">
            <h1>BONJOUR ,ICI ON PARTAGE  <span>SEULEMENT LES ALIMENTS DELICIEUSES</span></h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae voluptates in, fuga provident 
            debitis quas aperiam eveniet id dolor quos similique necessitatibus u mollitia. Assu
       
            </p>
            <button className='get-started'><span>Get Started</span> <FaLongArrowAltRight/> </button>
            <div className='select'>
                <div>
                   <img src="/1.png" alt="photo" id='imag1' ref={image} />
                </div>
                <div className='image1'>
                   <img src="/Sans titre-2.png" alt="photo" id='imag2'/>
                </div>
                <div>
                    <img src="/4.png" alt="" id='imag3'/>
                </div>
            </div>
      </section>

    </div>
  )
}
