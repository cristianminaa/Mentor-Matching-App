import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Swal from "sweetalert2"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { NavLink } from "react-router-dom"
import { Inputs } from "../../components"
import { addUser } from "../../redux/actions"
import { history } from "../../redux/store"
import { isAuthenticated } from "../../utilities"
import { categoriesData } from "../../data"
import "./styles.scss"

const Register = () => {
  const [step, setStep] = useState(1)
  const [user, setUser] = useState({})
  const handleChange = (field, value) => setUser({ ...user, [field]: value })

  const { currentUser } = useSelector((state) => state.users)
  useEffect(() => {
    isAuthenticated() && history.push("/")
  }, [currentUser])

  const dispatch = useDispatch()
  const handleRegister = () =>
    dispatch(
      addUser({
        ...user,
        registrationDate: new Date(),
        interests: user?.interests?.split(", "),
        profilePicture: "",
      })
    )

  const verifyStep = (step) => {
    const { fullName, email, password, roles, phoneNumber, dateOfBirth } = user
    if (!fullName || !email || !password || !roles) {
      Swal.fire({ icon: "error", title: "Missing details" })
      return false
    }
    if (!/fdm.com$/.test(email)) {
      Swal.fire({ icon: "error", title: "Please enter a FDM email!" })
      return false
    }
    if (step === 1) return true
    if (!phoneNumber || !dateOfBirth) {
      Swal.fire({
        icon: "error",
        title: "Please personal details",
        text: "Please enter phone number and date of birth",
      })
      return false
    }
    if (!user?.toImprove && !user?.skills) {
      Swal.fire({ icon: "error", title: "Please choose at least on category" })
      return false
    }
    return true
  }

  return (
    <div className="register-container">
      <div className="register-container-inner">
        <div className="register-image-logo" />
        <div className="register-input">
          {step === 1 && (
            <>
              <Inputs.Text
                value={user?.fullName || ""}
                onChange={({ target: { value } }) =>
                  handleChange("fullName", value)
                }
                placeholder="Full Name: "
              />
              <Inputs.Text
                value={user?.email || ""}
                onChange={({ target: { value } }) =>
                  handleChange("email", value)
                }
                placeholder="Email: "
              />
              <Inputs.Text
                type="password"
                value={user?.password || ""}
                onChange={({ target: { value } }) =>
                  handleChange("password", value)
                }
                placeholder="Password:"
                onKeyDown={({ keyCode }) => keyCode === 13 && handleRegister()}
              />
              <span>Register as:</span>
              <Inputs.Tabs
                options={[
                  { value: "mentee", label: "Mentee" },
                  { value: "mentor", label: "Mentor" },
                  { value: "admin", label: "Admin" },
                ]}
                value={user?.roles}
                onClick={(value) => handleChange("roles", [value])}
              />
              <Inputs.Button
                text={user?.roles?.includes("admin") ? "Register" : "Next"}
                onClick={() => {
                  if (!verifyStep(1)) return
                  if (user?.roles?.includes("admin")) handleRegister()
                  else setStep(2)
                }}
              />
            </>
          )}
          {step === 2 && (
            <>
              <div
                className="text-button"
                onClick={() => setStep(1)}
              >{`< Go back`}</div>

              <Inputs.Text
                value={user?.personalEmail || ""}
                onChange={({ target: { value } }) =>
                  handleChange("personalEmail", value)
                }
                placeholder="Personal email: "
              />
              <Inputs.Text
                value={user?.phoneNumber || ""}
                onChange={({ target: { value } }) =>
                  handleChange("phoneNumber", value)
                }
                placeholder="Phone Number: "
              />
              <div
                className={`row ${
                  !user?.roles?.includes("mentor") && "no-padding"
                }`}
              >
                <Inputs.Text
                  value={user?.Position || ""}
                  onChange={({ target: { value } }) =>
                    handleChange("Position", value)
                  }
                  placeholder="Position: "
                />
                {user?.roles?.includes("mentor") && (
                  <Inputs.Text
                    value={user?.maxNumberOfMentees || ""}
                    onChange={({ target: { value } }) =>
                      handleChange("maxNumberOfMentees", value)
                    }
                    className="maxNumberOfMentees"
                    placeholder="Max number of mentees: "
                  />
                )}
              </div>
              <div className="row">
                <Inputs.Text
                  value={user?.location || ""}
                  onChange={({ target: { value } }) =>
                    handleChange("location", value)
                  }
                  placeholder="Location: "
                />
                <DatePicker
                  selected={user?.dateOfBirth || null}
                  onChange={(date) => handleChange("dateOfBirth", date)}
                  placeholderText="Date of Birth:"
                />
              </div>
              {user?.roles?.includes("mentee") ? (
                <Inputs.DropdownSelect
                  defaultValue={user?.toImprove || []}
                  options={categoriesData}
                  onChange={(value) => handleChange("toImprove", value)}
                  placeholder="Categories for improvement:"
                />
              ):""}
              {user?.roles?.includes("mentee") ? (
                <Inputs.DropdownSelect
                  defaultValue={user?.skills || []}
                  options={categoriesData}
                  onChange={(value) => handleChange("skills", value)}
                  placeholder="Skill to provide:"
                />
              ):""}

              <Inputs.Textarea
                value={user?.interests || ""}
                onChange={({ target: { value } }) =>
                  handleChange("interests", value)
                }
                placeholder="Interests: photography, cars, cooking "
              />
              <Inputs.Button
                text="Register"
                onClick={() => verifyStep() && handleRegister()}
              />
            </>
          )}
        </div>
        <div className="additional">
          <NavLink to="/login">Sign in!</NavLink>
          <NavLink to="/faq">Need Help?</NavLink>
        </div>
      </div>
    </div>
  )
}
export default Register
