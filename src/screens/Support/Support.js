import React from "react"
import { NavLink } from "react-router-dom"
import "./styles.scss"
import Swal from "sweetalert2"
import { Inputs } from "../../components";
import { history } from "../../redux/store"

const support = () => {
    
    return (
        <div className="supportPage">
            <div className="wrapper">
                <div className="login">
                    <NavLink to="/">
                        <img src="https://surveymonkey-assets.s3.amazonaws.com/survey/182409455/e1ca79ba-8544-401a-b369-7cd97429a630.png" style={{ height: 60, width: 100 }} alt="Login" />
                    </NavLink>
                </div>
            </div>
        <div className="texts">
            <textarea
                id="floating-email"
                label="Email Address"
                placeholder="Enter your email address so we can reach you"
                className="email"
            />
            <textarea
                id="floating-title"
                label="Title"
                placeholder="Short description of your problem"
                className="title"
            />
            <textarea
                id="floating-multiline"
                label="Description"
                placeholder="Describe your problem in detail. We need these to help you!"
                className="description"
            />
        </div>
            
            <Inputs.Button text="Submit" className="submit" onClick={buttonClick}/>
            
        </div>
    )
}

function buttonClick() {
    history.push("/faq")
    Swal.fire({
        icon: "success",
        text: "Success!",
    })
}

export default support