import React, { useState } from 'react'

const Tour = ({prop, removeTour}) => {
  const [readMore, setReadmore] = useState(false)

  return (
    <article className='single-tour'>
      <img src={prop.image} alt={prop.name} />
      <footer>
        <div className='tour-info'>
          <h4>{prop.name}</h4>
          <h4 className='tour-price'>${prop.price}</h4>
        </div>
        <p>
          {readMore ? prop.info : `${prop.info.substring(0, 180)}...`}
          <button
            onClick={() => {
              setReadmore(!readMore) // set upthe functionality
            }}      
          >          
            {readMore ? 'show less' : 'read more'} 
            {/* set up what it will show on our screen suong tenary operator */}
          </button>
        </p>
        <button className='delete-btn' onClick={()=>{

          // i could have just destructred instead of all of these props that i have been using since
          removeTour(prop.id)
        }}>not interested</button>
      </footer>
    </article>
  )
}

export default Tour
