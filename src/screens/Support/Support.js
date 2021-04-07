import React from "react"
import { TextField } from 'react-md'
import { NavLink } from "react-router-dom"
import "./styles.scss"
import Swal from "sweetalert2"

const support = () => {
    
    return (
        
        <div className="text-fields">
            <div className="wrapper">
                <div className="login">
                    <NavLink to="/">
                        <img src="https://surveymonkey-assets.s3.amazonaws.com/survey/182409455/e1ca79ba-8544-401a-b369-7cd97429a630.png" style={{ height: 60, width: 100 }} alt="Login" />
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
            
            <NavLink to="/faq"><button className="submit" onClick={buttonClick}>Submit</button></NavLink>
            
        </div>
    )
}

function buttonClick() {
    return (
        Swal.fire({
            icon: "success",
            text: "Success!",
        })
    )
}

export default support