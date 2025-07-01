import { useEffect } from "react";

import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "./auth";
export const Logout = () => {

const {checkingtoken,deletelocal}=useAuth()

useEffect(()=>{
deletelocal()
toast.error('logout succesfully')
},[])
  return (
 
  
  <Navigate to="/login" />
)
};
