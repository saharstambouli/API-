import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function UserCard(user) {
  const textStyle = { fontWeight: 'bold', fontSize: '1.2rem' };

  return (
    <Card style={{ width: '18rem' }}>
            <Card.Body>
        <Card.Title style= {{height: '4rem'}}>  
          
        <span style={{ fontWeight: 'bold', ...textStyle }}>Name:</span>
      
          
          {user.name}



        </Card.Title>
        <Card.Text> <hr />
                     
        <span style={{ fontWeight: 'bold', ...textStyle }}>Phone </span>
                      
                      {user.phone}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item> 
        <span style={{ fontWeight: 'bold' }}>Email:</span> 
        
        {user.email}
          
          </ListGroup.Item>
        <ListGroup.Item style= {{height: '6rem'}}>
          
        <span style={{ fontWeight: 'bold', ...textStyle}}>Adress: </span>
        
        {user.address.street}, {user.address.city}
          
          </ListGroup.Item>
      
      </ListGroup>
   
    </Card>
  );
}

export default UserCard;