import { createContext, useContext, useState } from "react";
const AuthContext = createContext();
const gh = 0;
export const AuthProvider = ({ children }) => {
    const [oldtoken,newtoken]=useState(localStorage.getItem('token')||"")
  const storeinlocalstorage=(token)=>{
localStorage.setItem('token',token)
newtoken(localStorage.getItem('token'))
}
const deletelocal=()=>{
  localStorage.removeItem('token')
newtoken("")
}
  const checkingtoken=!!oldtoken
  return (
    <AuthContext.Provider value={{ gh,storeinlocalstorage,checkingtoken ,deletelocal}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
