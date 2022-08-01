import React,{ useState } from 'react'

function Props() {
 const [color,setColor] = useState(false);
 const ColorME = () =>{
    setColor(current =>!current)
 }
  return (
    <div>
        <button
            style={{
                backgroundColor:color ? "red" : "",
            }} 
             onClick={ColorME}>Click meee</button>
    </div>
  )
}

export default Props