import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN


const url = 'https://course-api.com/react-tours-project' 
//this is a type of an api that you will work with in a real life project


function App() {
const[loading, setLoading]=useState(true)
const[tours, setTours]= useState([])
const fetchTours= async()=>{
    setLoading(true)
    try{
      const response= await fetch(url)
      const tours= await response.json()
      setLoading(false)
      setTours(tours)
    }
     catch(error){
        setLoading(false)
        console.log(error)
    }
  }
//if you don't make use of the useeffect, hook you won't even get to see the response.json in the console

 useEffect(()=>{
fetchTours()
  },[])

const removeTour=(id)=>{
  const newTours=tours.filter((tour)=>  //the id inside of the braces is the normal param that accomplies the filter method that we can use to access individual stuffs, and then sa
     tour.id !== id)
    setTours(newTours)    
}



// { loading ? (<main><Loading/></main> ):(<main><Tours tours={tours}/></main> )}

//note the below, if this(return this), if this(return this) and then(if this return this) and lastly just return


  if(loading){
      return(
        <main>
          <Loading/>
        </main>
      )
    } 
    if(tours.length===0){
      return(
        <main>
            <h1>No Tours Left</h1>
            <button style={{marginLeft:'190px'}} className='btn' onClick={()=>{
              fetchTours()  //to reinitialize our stuff
            }}>
                Refresh
            </button>
        </main>
      )
    }
      return(
  <main>
    <Tours tours={tours} removeTour={removeTour} />
     {/* so i will have to pass in the removeTour to the Tours first and then to Tour which is the concept of props drilling  because that is where our button is*/}
  </main>
      )     
}

export default App
