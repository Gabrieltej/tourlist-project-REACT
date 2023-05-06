import React from 'react'
import Tour from './Tour'

const Tours = ({tours, removeTour}) => {
  return (
   <section>
    <div className='title'>
      <h2>our tours</h2>
      <div className='underline'></div>
    </div>
    <div>
      {tours.map((tour)=>{
        const{id, name, image, info, price}= tour
        return <Tour key={tour.id} removeTour={removeTour}  prop={{id, name, image, info, price}}/>
          //the above is telling that you can pass in the props after destructing the stuff just like any other function or anything that we are willing to pass ads props and sent to another components or you can just simply spread it by just saying {...tour} and we will be able to access it in another compoenets
      })}
    </div>
   </section>
  )
}

export default Tours
