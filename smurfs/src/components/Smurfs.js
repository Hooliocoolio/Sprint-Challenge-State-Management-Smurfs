import React, { useEffect } from 'react';
import { Card, Button, CardHeader,CardBody,
  CardTitle, CardText, Spinner } from 'reactstrap';

const Smurfs = ({ getSmurfs, smurfs, isFetching}) => {


useEffect(() => {
getSmurfs();
}, [getSmurfs])

 

console.log('Smurfs2', smurfs)

if(isFetching){
return <h3><Spinner color="dark" /></h3>
}

return (

<div>{smurfs.map((item, index) => {
return (
<div className='container' key={index}>
    <Card>
        <CardHeader>{item.name}</CardHeader>
        <CardBody>
          <CardTitle>Age: {item.age}</CardTitle>
          <CardText>Height: {item.height}</CardText>
          <Button color="info" size="sm">Edit</Button> 
          <Button onClick={()=> smurfs.filter(item =>item.name)}  color="danger"  size="sm">Delete</Button>
        </CardBody>
         
      </Card>

</div>
)
})}</div>
)
}

export default Smurfs;