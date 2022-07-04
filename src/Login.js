import React, {Component} from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Button, Form} from 'react-bootstrap';

class Login extends Component {
    render(){
        return(
            <div style={boxStyle}>
                <h4 style={{display: 'flex', justifyContent: 'center'}}>Real Madrid CF</h4>
                <Form style={formStyle}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email"/>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit" style={{display: 'flex', justifyContent: 'center'}}>Submit</Button>
                </Form>
            </div>
        );
    }
}

const boxStyle = {
    marginTop: '45%',
}

const formStyle = {
    padding: '15px', 
    border: '2px solid black', 
    backgroundColor: "rgba(255,250,250, 0.8)"
}

export default Login;