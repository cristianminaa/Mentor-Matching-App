import React from "react"
import { useSelector } from "react-redux"
import "./styles.scss"

const Profile = () =>{
    const { currentUser } = useSelector((state) => state.users)
    return (
    <>
      <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
      <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
      <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

      <div className="wrapper">
        <div className="profilePic">
          <a href="/home"><img src="https://bootdey.com/img/Content/avatar/avatar7.png" style={{height: 100, width:100}} alt="User-Profile"/></a>
        </div>
        <div className="msg">
          <img height="30" src="src\images\message.png" alt="Messenger free icon"/>
        </div>
      </div>
      <div className="container emp-profile">
        <form method="post">
          <div className="row">
            <div className="col-md-4 bg-white">
              <div className="profile-img">
                <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt=""/>
                <div className="upload-btn" onClick={()=>{document.getElementById('file-btn').click()}}>Change Picture</div><br/>
                  <input id="file-btn" type='file' /><br/>
              </div>
            </div>
            <div className="col-md-8">
              <div className="row top-bar">
                <div className="col-md-7">
                  <div className="profile-head">
                    <h5>
                      {currentUser.fullName}
                    </h5>
                    <h6>
                      {currentUser.position}
                    </h6>
                  </div>
                </div>
                <div className="col-md-5">
                  <input type="#" className="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>
                </div>
              </div>
              <div className="row top-bar">
                <div className="col-md-12">
                  hi
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="profile-work">
                <p>SKILLS</p>
                {/* instead of calling each element, just map it later */}
                {/* {currentUser.skills[0]}<br/>
                {currentUser.skills[1]}<br/>
                {currentUser.skills[2]}<br/>
                {currentUser.skills[3]}<br/>
                {currentUser.skills[4]}<br/> */}
              </div>
            </div>
            <div className="col-md-8 main-info">
              <div className="" >
                <div className="row">
                  <div className="col-sm-6">
                    <label>Work Email:</label>
                  </div>
                  <div className="col-sm-6">
                    <p>{currentUser.email}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <label>Name:</label>
                  </div>
                  <div className="col-sm-6">
                    <p>{currentUser.fullName}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <label>Personal Email:</label>
                  </div>
                  <div className="col-sm-6">
                    <p>{currentUser.personalEmail}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <label>Phone:</label>
                  </div>
                  <div className="col-sm-6">
                    <p>{currentUser.phoneNumber}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <label>Position:</label>
                  </div>
                  <div className="col-sm-6">
                    <p>{currentUser.position}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <label>Location:</label>
                  </div>
                  <div className="col-sm-6">
                      <p>{currentUser.location}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <label>Date Of Birth:</label>
                  </div>
                  <div className="col-sm-6">
                    <p>{currentUser.dateOfBirth}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <label>Roles:</label>
                  </div>
                  <div className="col-sm-6">
                    <p>{currentUser.roles}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <label>Password:</label>
                  </div>
                  <div className="col-sm-6">
                    <p>**************</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>           
      </div>
    </>
  )
}

export default Profile