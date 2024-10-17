import { useNavigate } from "react-router-dom"

export const data = [
    {
        name:"React",
        id:0,
        description:"React açıklama"
    },
    {
        name:"Vue",
        id:1,
        description:"Vue açıklama"
    },
    {
        name:"Angular",
        id:2,
        description:"Angular açıklama"
    }
   ]
const Home = () => {
    const navigate =useNavigate()
   

  return (
    <div>
       {
        data && data.map((dt,i)=>(
           <div onClick={() => navigate(`detail/${dt.id}`)} style={{cursor:"pointer",marginBottom:"30px"}} key={i} >
            <div>{dt.name}</div>
            <div>{dt.description}</div>
            <div><hr /></div>
           </div>
        ))
       } 
    </div>
  )
}

export default Home