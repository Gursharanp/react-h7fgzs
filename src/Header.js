import React from 'react'

export default function Header(props){
  console.log(props)
return(
<>
        <div className='header'> 
         <div> {props.props} </div>        
       </div>
</>
);
} 