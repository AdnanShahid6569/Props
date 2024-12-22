import React from 'react'
import './App.css'
import Data from "./Data"
import Card from './Components/Cards/Card'

const App = () =>{

  let arr = ["a","b","c"];
  // arr.map((e,i)=>{
  //   console.log(e);
    
  // })
  return (
    <>
    {Data ?(

      Data.map((e,i)=>{
        return( <Card key={e.id} id={e.id} imgSrc={e.imgSrc} tittle={e.tittle}/>)
        
      })
    ):(
      <h1>Sorry</h1>
    )
    }

{/* <select name="" id="">

    {
      
      arr.map((e,i)=>{
      return <option>{e}</option>;
      
    })
  }
  </select> */}

    </>
    
  )
}

export default App
// Conditional Randering
// proptype define karege hum kis form me hume type chaye 
// Card.proptype =
//{
//  id:Proptype.number;
//}

// npm run build
