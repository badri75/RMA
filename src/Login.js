import React, {Component, useState, useEffect} from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import {Button, Form} from 'react-bootstrap';

function Login(){
    const [state, setState] = useState({
        username: '',
        password: '',
        submitDisabled: true,
    });

    useEffect(() => {
            const componentDidMount = () => {
            loadCaptchaEnginge(6); 
        };
    }, []);

    const doSubmit = () => {
        let user_captcha = document.getElementById('captcha').value;
 
        if (validateCaptcha(user_captcha)===true) {
            alert('Captcha Matched');
            loadCaptchaEnginge(6); 
            document.getElementById('captcha').value = "";
        }
 
        else {
            alert('Captcha Does Not Match');
            document.getElementById('captcha').value = "";
        }
    };
 

    let handleChangeEmail = (event) => {
        setState({
            ...state,
            username: event.target.value,
        });
        submitCheck();
    }
    let handleChangePassword = (event) => {
        setState({
            ...state,
            password: event.target.value,
        });
        submitCheck();
    }
    function submitCheck() {
        if (state.username.length > 0 && state.password.length > 8) {
            setState({
                ...state,
                submitDisabled: false,
            });
        }
        else {
            setState({
                ...state,
                submitDisabled: true,
            });
        }
    }
    return (
        <div style={boxStyle}>
            <h4 style={{display: 'flex', justifyContent: 'center'}}>Real Madrid CF</h4>
            <Form style={formStyle}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" 
                    required={true} onChange={handleChangeEmail}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" 
                    required={true} onChange={handleChangePassword}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCaptcha">
                    <Form.Label>Captcha</Form.Label>
                    <LoadCanvasTemplate />
                    <Form.Control type="text" placeholder="Enter Captcha" name="captcha" 
                    required={true} id="captcha"/>
                </Form.Group>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <Button variant="primary" type="submit" onClick={doSubmit}>Submit</Button>
                </div>
            </Form>
        </div>
    );
}

// class Login extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             email: '',
//             pwd: '', 
//             submitDisabled: true       // separate flag for submit
//         }
//     }
//     handleChangeEmail(e) {
//         this.setState({email: e.target.value});
//         this.submitCheck();
//     }
//     handleChangeText(e) {
//         this.setState({pwd: e.target.value});
//         this.submitCheck();
//     }
//     submitCheck() {
//         if (this.state.email.length > 0 && this.state.pwd.length > 8)
//             this.setState({submitDisabled: false});
//     }
//     render(){
//         return(
//             <div style={boxStyle}>
//                 <h4 style={{display: 'flex', justifyContent: 'center'}}>Real Madrid CF</h4>
//                 <Form style={formStyle}>
//                     <Form.Group className="mb-3" controlId="formBasicEmail">
//                         <Form.Label>Email address</Form.Label>
//                         <Form.Control type="email" placeholder="Enter email" name="email" 
//                         required={true} onChange={this.handleChangeEmail.bind(this)}/>
//                         <Form.Text className="text-muted">
//                             We'll never share your email with anyone else.
//                         </Form.Text>
//                     </Form.Group>
//                     <Form.Group className="mb-3" controlId="formBasicPassword">
//                         <Form.Label>Password</Form.Label>
//                         <Form.Control type="password" placeholder="Password" name="password" 
//                         required={true} onChange={this.handleChangeText.bind(this)}/>
//                     </Form.Group>
//                     <Form.Group className="mb-3" controlId="formBasicCheckbox">
//                         <Form.Check type="checkbox" label="Terms & Conditions" required={true} />
//                     </Form.Group>
//                     <div style={{display: 'flex', justifyContent: 'center'}}>
//                         <Button variant="primary" type="submit"  disabled={this.state.submitDisabled}>Submit</Button>
//                     </div>
//                 </Form>
//             </div>
//         );
//     }
// }

const boxStyle = {
    marginTop: '45%',
}

const formStyle = {
    padding: '15px', 
    border: '2px solid black', 
    backgroundColor: "rgba(255,250,250, 0.8)"
}

export default Login;