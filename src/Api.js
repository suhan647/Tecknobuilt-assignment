import React, { useState,useEffect } from 'react'
import axios from 'axios'
function Api() {
  const [adata , setData] = useState([])
  const [id,setid] = useState(1);

  useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/comments/${id}`)
    
    .then(res =>{
      console.log(res)
      setData(res.data)
    })

    .catch(err=>{
      console.log(err)
    })
  },[id])
  return (
    
    <div>
      <input type= 'text'  value= {id} onChange = {e=>setid(e.target.value)}/>
      {/* {
        adata.map((val)=>{
          return <li key={val.id} >{val.id} {val.body}</li>
        })
      } */}
      <div>{adata.body}</div>
      <div>{adata.email}</div>
    </div>
  )
}

export default Api

