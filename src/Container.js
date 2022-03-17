import React,{useContext} from "./react"
import Header from "./Header"
import UserContext from './MyContext'
export default function Container(){
  let values=useContext(UserContext)
  console.log(values);
  let handleChange=(value)=>{
      values.setName(value)
  }
  return(
    <>
    <div className="main">
    <Header />
       <div className="inner">
           <div className="box">
             <input type='text' onChange={(e)=>handleChange(e.target.value)}/>
             <input type ="text"/>
           </div>
       </div>
    </div>
    </>
  )
}