import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import "./styles.scss"
import Swal from "sweetalert2"
import { Inputs } from "../../components"
import { history } from "../../redux/store"
import { useSelector } from "react-redux"

const Support = () => {
  const { email } = useSelector((s) => s.users.currentUser)
  const [value, setValue] = useState("")
  return (
    <div className="supportPage">
      <div className="wrapper">
        <NavLink to="/profile">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="50"
            fill="ghostwhite"
            class="bi bi-arrow-left-square-fill"
            viewBox="0 0 16 16"
          >
          <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z" />
          </svg>
        </NavLink>
        <NavLink to="/">
          <div style={{paddingRight: 50}}>
            <img src="https://surveymonkey-assets.s3.amazonaws.com/survey/182409455/e1ca79ba-8544-401a-b369-7cd97429a630.png" style={{ height: 60, width: 100}} alt="Login" />
          </div>
        </NavLink>
        <div>
                                   
        </div>
      </div>
      <div className="texts">
        <textarea
          id="floating-email"
          label="Email Address"
          placeholder="Enter your email address so we can reach you"
          className="email"
          value={value || email || ""}
          onChange={(e) => setValue(e.target.value)}
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

      <Inputs.Button text="Submit" className="submit" onClick={buttonClick} />
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

export default Support
