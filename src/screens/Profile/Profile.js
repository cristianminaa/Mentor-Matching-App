import React from "react"
import { Inputs } from "../../components"
import { useSelector } from "react-redux"
import "./styles.scss"
import { NavLink } from "react-router-dom"

const Profile = () =>{
    const { currentUser } = useSelector((state) => state.users)
    const SubmitButtonCLicked=()=>{
      // alert('Form has been submitted');
      document.getElementById("profile-form").submit();
    }

    const ResetButtonCLicked=()=>{
      if(window.confirm("Click ok to reset changes")) {
        document.getElementById("profile-form").reset();
      }
    }

    const UploadButtonClicked=()=>{
      document.getElementById('file-btn').click()
    }

    return (
    <>
      <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
      {/* <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script> */}
      {/* <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script> */}
      <div className="wrapper">
        <div className="profilePic">
          <NavLink to="/"><img src={currentUser.profilePicture} style={{height: 100, width:100}} alt="User-Profile"/></NavLink>
        </div>
        <div className="msg">
          <img height="30" src="src\images\message.png" alt="Messenger free icon"/>
        </div>
      </div>
      <div className="container emp-profile">
        <form method="#" id="profile-form">
          <div className="row">
            <div className="col-md-4 bg-white">
              <div className="profile-img">
                <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt=""/>
                <div className="upload-btn" onClick={()=>UploadButtonClicked()}>Change Picture</div>
                  <input id="file-btn" type='file' /><br/>
              </div>
            </div>
            <div className="col-md-8">
              <div className="row top-bar">
                <div className="col-md-12">
                  <div className="profile-head">
                    Name and position here
                    <h5>
                      {currentUser.fullName}
                    </h5>
                    <h6>
                      {currentUser.position}
                    </h6>
                  </div>
                </div>
                
              </div>
              <div className="row top-bar">
                <div className="col-md-6">
                  Current number Mentor(s) : {currentUser.mentors}
                </div>
                <div className="col-md-6">
                  Current number Mentee(s) : {currentUser.mentees}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="profile-work">
                <p>SKILLS</p>
                {/* instead of calling each element, just map it later */}
                {currentUser.skills[0]}<br/>
                {currentUser.skills[1]}<br/>
                {currentUser.skills[2]}<br/>
                {currentUser.skills[3]}<br/>
                {currentUser.skills[4]}<br/>
              </div>
            </div>
            <div className="col-md-8 main-info" id="main">
              <div class="form-group">
                <label>First name:</label>
                  <Inputs.Text
                    type="text"
                    inputClassName="form-control"
                    value={currentUser.fullName}
                    placeholder="First name:"
                  />
              </div>
              <div class="form-group">
                <label>Last name:</label>
                  <Inputs.Text
                    type="text"
                    inputClassName="form-control"
                    value={currentUser.fullName}
                    placeholder="Last name:"
                  />
              </div>
              <div class="form-group">
                <label>Position:</label>
                  <Inputs.Text
                    type="text"
                    inputClassName="form-control"
                    value={currentUser.position}
                    placeholder="Position:"
                  />
              </div>
              <div class="form-group">
                <label>Personal Email:</label>
                  <Inputs.Text
                    type="text"
                    inputClassName="form-control"
                    value={currentUser.personalEmail}
                    placeholder="Personal Email:"
                  />
              </div>
              <div class="form-group">
                <label>Username:</label>
                  <Inputs.Text
                    type="text"
                    inputClassName="form-control"
                    value={currentUser.email}
                    placeholder="Username:"
                  />
              </div>
              <div class="form-group">
                <label>Password:</label>
                  <Inputs.Text
                    type="password"
                    inputClassName="form-control"
                    value={currentUser.password}
                    placeholder="Password:"
                  />
              </div>
              <div class="form-group">
                <label>Confirm password:</label>
                  <Inputs.Text
                    type="password"
                    inputClassName="form-control"
                    placeholder="Password:"
                  />
              </div>
              <div class="form-group">
                <Inputs.Button 
                  text="Save Changes"
                  className="profile-edit-btn"
                  onClick={()=> SubmitButtonCLicked()}
                />
                <span></span>
                <Inputs.Button 
                  text="Cancel"
                  className="profile-edit-btn"
                  onClick={()=> ResetButtonCLicked()}
                />
              </div>
            </div>
          </div>
        </form>           
      </div>
    </>
  )
}

export default Profile