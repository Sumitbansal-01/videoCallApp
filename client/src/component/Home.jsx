import { useState } from "react"
import { Dropdown, Form } from "react-bootstrap"
import { Link } from "react-router-dom"

export const Home = () => {
    const [room, setRoom] = useState('')
    return (
        <div className="full-container">
            <p style={{ width: '30%', display: 'flex', }}>
                <span style={{width:'80%', display:'flex', justifyContent:'space-around'}}>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            New Meeting
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Start Instant Meeting</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Schedule Meeting</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Create Chat Lobby</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Form.Control placeholder="Enter Room" style={{ width: '55%', height: '100%' }} value={room} onChange={e => setRoom(e.target.value)}></Form.Control >
                </span>
                {room !== '' ? <Link to="#"> Join </Link> : null}
            </p>
        </div>
    )
} 