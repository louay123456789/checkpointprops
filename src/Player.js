import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Players } from './Players';
const Player=({element})=>{
    return(
            <CardGroup>
    <Card>
      <Card.Img variant="top" src={element.image} style={{width:"180px",height:"150px"}} />
      <Card.Body>
        <Card.Title>{element.name}</Card.Title>
        <Card.Text>
       {element.team}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>
    </CardGroup>

    )
}
export default Player