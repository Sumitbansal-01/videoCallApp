import { useState } from "react"
import { Link } from "react-router-dom"
import { Form, Button } from "react-bootstrap"
export const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <Form style={{ width: '35%', height: '42vh', position: 'absolute', top: '20%', left: '30%', boxShadow: '5px 5px 5px grey', borderRadius: '5%', backgroundColor: 'white', padding: '2%' }} >
            <h3>Login</h3>
            <hr></hr>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.target.value)} required />
            </Form.Group>

            <center><Button variant="primary" size='lg' type="submit" onClick={async e => {
                e.preventDefault()

                const requestOptions = {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        email, password
                    }),
                };
                fetch('/api/login', requestOptions)
                    .then((response) => response.json())
                    .then((e) => {
                        console.log(e);
                    })
                    .catch((e) => console.error(e));
            }}>
                Submit
            </Button></center>
            <br></br>
            <center><span>For creating account <Link to='/register'><b>Click Here</b></Link></span></center>

        </Form>
    )
}