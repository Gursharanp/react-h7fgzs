import React, { useState } from "react";
import UserContext from "./MyContext";
export default function ContextWrapper({ children }){
  const[name,setName]=React.useState(null)
  return(
    <UserContext.Provider value={{ name, setName}}>
           {children}
    </UserContext.Provider>
  )
}