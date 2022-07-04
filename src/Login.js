import React, {Component} from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Button, Form} from 'react-bootstrap';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            pwd: '', 
            submitDisabled: true       // separate flag for submit
        }
    }
    handleChangeEmail(e) {
        this.setState({email: e.target.value});
        this.submitCheck();
    }
    handleChangeText(e) {
        this.setState({pwd: e.target.value});
        this.submitCheck();
    }
    submitCheck() {
        if (this.state.email.length > 0 && this.state.pwd.length > 8) {
            this.setState({submitDisabled: false});
        } else {    
            this.setState({submitDisabled: true});
        }
        console.log(this.state.email);
    }
    render(){
        return(
            <div style={{marginTop: '230px',}}>
                <h4 style={{display: 'flex', justifyContent: 'center'}}>Real Madrid CF</h4>
                <Form style={{padding: '15px', border: '2px solid black', backgroundColor: "rgba(255,250,250, 0.8)"}}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email" 
                        required={true} onChange={this.handleChangeEmail}/>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password" 
                        required={true} onChange={this.handleChangeText}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Terms & Conditions" required={true} />
                    </Form.Group>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <Button variant="primary" type="submit"  disabled={this.state.submitDisabled}>Submit</Button>
                    </div>
                </Form>
            </div>
        );
    }
}

export default Login;