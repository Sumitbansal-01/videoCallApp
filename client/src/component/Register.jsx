import React from "react"
import { useState } from "react"
import { Form, Button } from "react-bootstrap"
// import {Link} from "react-router-dom"
export const Register = () => {
    const [name, setName]=useState('')
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    const [confirmPassword, setConfirmPassword]=useState('')
    return (
        <Form style={{width: '35%',height:'55vh',  position:'absolute', top :'20%', left:'30%', boxShadow:'5px 5px 5px grey', borderRadius:'5%', backgroundColor:'white', padding:'2%'}} >
            <h3>Register</h3>
            <hr></hr>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" value={name} onChange={e=>setName(e.target.value)} required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={email} onChange={e=>setEmail(e.target.value)} required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter password" value={password} onChange={e=>setPassword(e.target.value)} required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" value={confirmPassword} onChange={e=>setConfirmPassword(e.target.value)} required/>
            </Form.Group>
            
            <center><Button variant="primary" size='lg' type="submit" onClick={async e=>{
                e.preventDefault()
                if (password!==confirmPassword){
                    alert('password and confirm Password do not match')
                }else{
                    const requestOptions = {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                          name,email, password
                        }),
                    };
                    // console.log(requestOptions.body)
                    fetch('/api/register', requestOptions)
                        .then((response) => response.json())
                        .then((e) => {
                            console.log(e);
                        })
                        .catch((e) => console.error(e));
                }
            }}>
                Submit
            </Button></center>
            <br></br>
            <center><span>If you already register <b>Click Here</b></span></center>
            
        </Form>
    )
}