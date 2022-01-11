import React from 'react'
import {Card, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'


function CardUser({el}) {
    return (
        <div>
           <Card style={{ width: '18rem' , marginBottom:"20px", backgroundColor:"beige"}}>
  <Card.Body>
    <Card.Title>   {el.name} </Card.Title>
    <Card.Subtitle className="mb-2 text-muted">{el.username}</Card.Subtitle>
    <Card.Text>
 {el.email}
    </Card.Text>
  <Link  to= {`/details/${el.id}`} > <Button>Details</Button> </Link> 
  </Card.Body>
</Card> 
        </div>
    )
}

export default CardUser
