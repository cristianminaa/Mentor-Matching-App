import React from "react"
import { TextField } from 'react-md'
import "./styles.scss"

const support = () => {
    
    return (
        <div className="text-fields">
            <TextField
                id="floating-email"
                label="Enter your email address so we can reach you"
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
                label="Describe your problem in detail. We need these to help you!"
                lineDirection="right"
                rows={10}
                placeholder="Hello World"
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