import { useParams } from "react-router-dom"
import { data } from "./Home"
import { useEffect, useState } from "react"

const Detail = () => {
    const params = useParams()
    const {id}=params
    
    const [getData,setGetData] = useState(null)

    useEffect(()=>{
        if(id) setGetData(data.find((dt)=> dt.id == id))
    },[id])

    console.log(getData,"getData");
  return (
    <div>
        <div>{getData?.description}</div>
    </div>
  )
}

export default Detail