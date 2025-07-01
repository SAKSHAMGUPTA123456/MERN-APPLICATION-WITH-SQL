import { useEffect } from "react"
import { Navbar } from "./components/Navbar"
import { useState } from "react"
const Service=()=>{
    const [oldupdate,newupdate]=useState(true)
    const[oldarray,newarray]=useState([])
 const takebackendservices=async()=>{
const response=await fetch('http://localhost:1000/home/services',{
    method:"GET",
    headers:{
        "content-type":"application/json"
    }
})
const gh=await response.json()
if(response.ok){
    console.log(gh.details[0])
    newarray(gh.details[0])
}
 }
useEffect(()=>{
takebackendservices()
},[])
return(
    <>
   <Navbar value={newupdate} value2={oldupdate}/>

 <div className="flex justify-center">  <h1 style={{color:"white",fontSize:"55px",textDecoration: "underline",
    textDecorationColor: "#1877F2",}} >Services</h1></div>
    <div className="flex justify-center">
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
{oldarray?.map((curr)=>{
    return(
      
     <div style={{border:"2px solid white",}} className=" mb-11 md:w-[400px]">
        
<div className="flex justify-center"><img src="design.png" alt="images" style={{height:"340px"}}></img></div>
<div className="flex justify-between">
    <div></div>
    <div><h3 style={{color:"white"}}>Tech solutions Inc</h3></div>
    <div></div>
    <div><h3 style={{color:"white"}}>$2000-$</h3></div>
    <div></div>
</div>
<div style={{color:"white",fontSize:"40px"}}></div>
<div className="flex justify-center"><h4 style={{color:"white"}}></h4></div>
        </div> )
})}
</div>
</div>
    </>
)
}
export default Service