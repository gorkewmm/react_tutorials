import { useState } from 'react'
import './App.css'
import Button from './Button'

function App() {
  const [name, setName] = useState(null)
  const [data, setData] = useState([])

 const clickFunc = (x)=>{
  setData(x=>([...x,name]))
 }
 console.log(data);

  
  return (
    
      <div>
       
         <input type="text" onChange={(e)=>setName(e.target.value)}/>
         <button onClick={clickFunc}>tikla</button>
         <div>{
         data && data.map((dt,i)=>(
          <div key={i}>{dt}</div>
         ))
         }
         </div>
         {/* <Button name={"tıkla"} onClick={()=>setData(name)}/>
          {data} */}
     
     </div>
      
  )
}

export default App
