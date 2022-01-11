import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navigate} from 'react-router-dom'
import CardUser from './CardUser'

function List({login}) {

    const [users, setusers] = useState([])
    

            useEffect(() => {
              
                    axios.get('https://jsonplaceholder.typicode.com/users')
                    .then(response=>setusers(response.data))
                    .catch(error=> console.log(error))

            }, [])


    return (
        
        <div  style={{display:"flex", justifyContent:"space-around", width:"75%" , position: "relative", flexWrap:"wrap", margin:"auto", padding:"20px" }} >
            {   login ?  users.map(el=>   <CardUser el={el}  key={el.id}   />  )  :
             <Navigate to='/' /> }
        </div>
    )
}

export default List
