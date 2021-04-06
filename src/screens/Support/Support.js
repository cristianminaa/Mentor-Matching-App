import React from "react"
import { TextField } from 'react-md'
import { NavLink } from "react-router-dom"
import "./styles.scss"

const support = () => {
    
    return (
        
        <div className="text-fields">
            <div className="wrapper">
                <div className="login">
                    <NavLink to="/login">
                        {
                            <img src="http://localhost:3000/static/media/logo.13c86e98.jpg" style={{ height: 60, width: 100 }} alt="Login" />
                        }
                    </NavLink>
                </div>
            </div>
            <TextField
                id="floating-email"
                label="Email Address"
                placeholder="Enter your email address so we can reach you"
                className="md-cell md-cell--bottom"
            />
            <TextField
                id="floating-title"
                label="Title"
                lineDirection="center"
                placeholder="Short description of your problem"
                className="md-cell md-cell--bottom"
            />
            <TextField
                id="floating-multiline"
                label="Description"
                lineDirection="right"
                rows={5}
                placeholder="Describe your problem in detail. We need these to help you!"
                className="md-cell md-cell--bottom"
            />
            <button className="submit" onClick={buttonClick}>Submit</button>
        </div>
    )
}

function buttonClick() {
    return (
        <h1>SUCCESS!</h1>
    )
}

export default support