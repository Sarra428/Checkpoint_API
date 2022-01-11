import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'

function Details({login}) {
   
    const {id} = useParams()
    const navigate = useNavigate()
    const [user, setuser] = useState({})

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response=>setuser(response.data))
        .catch(err=>console.log(err))
}, [])

    return (
        <div>
           {
               login  ?
               <>
                <h1>{user.name}</h1>
                <h2> {user.username}  </h2>
                <h2> {user.email} </h2>

           <button   onClick={()=>navigate(-1)}   >go back</button>
           <button  onClick={()=>navigate('/')}  >  home  </button>
               </>

                : <Navigate   to='/users'   />




           }
          
        </div>
    )
}

export default Details
