import React, { useState } from 'react';
import { Button, Input, Form, CardHeader } from 'reactstrap';
const SmurfForm = props => {

    console.log('Form', props)
    
    const startingState = { name: '', age: '', height: ''}
    const [allSmurfs, setAllSmurfs] = useState(startingState);
    const handleChange = event => {
        setAllSmurfs({...allSmurfs, [event.target.name]: event.target.value})
    }
    const handleSubmit = event => {
        event.preventDefault();
        console.log(JSON.stringify(allSmurfs))
        props.addSmurfs(allSmurfs)
        setAllSmurfs(startingState);
    }

    return (
        <div className="form-container">
            <CardHeader className="cardheader">Add A Smurf</CardHeader>
            <Form onSubmit={handleSubmit}>
                <Input type='text' 
                       name='name' 
                       placeholder='Name' 
                       value={allSmurfs.name} 
                       onChange={handleChange}    
                       />
                <Input type='number' 
                       name='age' 
                       placeholder='Age' 
                       value={allSmurfs.age} 
                       onChange={handleChange}
                       />
                <Input type='text' 
                       name='height' 
                       placeholder='Height in cm' 
                       value={allSmurfs.height} 
                       onChange={handleChange}
                       />
                <Button color="info" type='sumbit'>Add Smurf</Button>
            </Form>
        </div>
    )
}

export default SmurfForm;