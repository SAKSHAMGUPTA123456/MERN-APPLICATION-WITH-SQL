import { Navbar } from "./components/Navbar"
import { useState } from "react"
import { toast } from "react-toastify"

const Login=()=>{
const [oldupdate,newupdate]=useState(true)


 const userclick=()=>{
        if(oldupdate===false){
          newupdate(!oldupdate)
        }
    }
return(
  <>
   <Navbar value={newupdate} value2={oldupdate}/>
    <div className={!oldupdate?"blur":"md:flex justify-between"}  >
<div className="hidden md:block"></div>
<div><img src="login.png" className="md:w-[445px]" alt="good"></img></div>
<div style={{border:"2px solid black"}} >
<div style={{color:"white",fontSize:"35px",fontStyle:"italic",textDecoration:"underline",    textDecorationColor: "#1877F2"}} className="flex justify-center">Login Form</div>
<div style={{color:"white"}} className="ml-1">Email</div>
<div className="ml-1"><input
  type="text"
  placeholder="Enter your email"
  className="border border-black"
  style={{
    background: "linear-gradient(to bottom, #111 0%, #222 100%)",
    color: "#fff",
  
    padding: "10px",
    borderRadius: "8px",
    outline: "none",
    width: "100%",
  }}
  // onChange={(e)=>handling(e,"email")}
  // value={olddetails.email}
/>
</div>
<div style={{color:"white"}} className="ml-1">Password</div>
<div className="ml-1"><input
  type="text"
  placeholder="Enter your password"
    className="border border-black"

  style={{
    background: "linear-gradient(to bottom, #111 0%, #222 100%)",
    color: "#fff",
    padding: "10px",
    borderRadius: "8px",
    outline: "none",
    width: "100%",
  }}
  // onChange={(e)=>handling(e,"password")}
  // value={olddetails.password}
/>
</div>
<div><button
  style={{
    backgroundColor: "#1877F2", // Facebook blue
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "8px",
    fontWeight: "bold",
    cursor: "pointer",
  }}
  className="mt-3"
  // onClick={registering}
>
 Login Now
</button></div>

</div>
<div></div>
   </div>
   <div className="hidden md:block"></div>
<br></br>
   <div className="flex justify-center" style={{backgroundColor:"#1877F2",height:"50px"}}>
    <div style={{color:"white"}} className="mt-4">@Thapatechnical 2024</div>
   </div>
    </>


)
}
export default Login