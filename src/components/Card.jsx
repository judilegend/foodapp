import React from 'react'

export default function Card(props) {
  return (
    <div className='card'>
        <div className='image-header'><img src={props.image} alt="photo" /> </div>
        <div className="titre">
            <h1>Salade avocat au oeuf</h1>
            <h2>Ingredients: </h2><p>Lorem ipsum dolor oloremque consequuntur atque placeat.</p> 
            <h2>Preparation:</h2> <p>Lorem ipsum dolor oloremque consequuntur atque placeat.</p>

        </div>   
        <div className="panier">
          <img src="/basket2_64.png" alt="" />
        </div>
      
    </div>
  )
}
