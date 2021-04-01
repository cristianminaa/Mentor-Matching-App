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
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap" rel="stylesheet"></link>
      <div className="wrapper">
        <div className="profilePic">
          <a href="/home"><img src="https://bootdey.com/img/Content/avatar/avatar7.png" style={{height: 100, width:100}} alt="User-Profile"/></a>
        </div>
        <div className="msg">
          <img height="30" src="src\images\message.png" alt="Messenger free icon"/>
        </div>
      </div>
      <div className="container emp-profile">
        <form method="#">
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
                  <input type="submit" href="#main" className="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>
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
            <div className="col-md-8 main-info" id="main">
              <div class="form-group">
                <label class="col-lg-3 control-label">First name:</label>
                <div class="col-lg-9">
                  <input class="form-control" type="text" value={currentUser.fullName}/>
                </div>
              </div>
              <div class="form-group">
                <label class="col-lg-3 control-label">Last name:</label>
                <div class="col-lg-9">
                  <input class="form-control" type="text" value={currentUser.fullName}/>
                </div>
              </div>
              <div class="form-group">
                <label class="col-lg-3 control-label">Position:</label>
                <div class="col-lg-9">
                  <input class="form-control" type="text" value={currentUser.position}/>
                </div>
              </div>
              <div class="form-group">
                <label class="col-lg-3 control-label">Personal Email:</label>
                <div class="col-lg-9">
                  <input class="form-control" type="text" value={currentUser.personalEmail}/>
                </div>
              </div>
              <div class="form-group">
                <label class="col-lg-3 control-label">Username:</label>
                <div class="col-lg-9">
                  <input class="form-control" type="text" value={currentUser.email}/>
                </div>
              </div>
              <div class="form-group">
                <label class="col-lg-3 control-label">Password:</label>
                <div class="col-lg-9">
                  <input class="form-control" type="password" value={currentUser.password}/>
                </div>
              </div>
              <div class="form-group">
                <label class="col-lg-3 control-label">Confirm password:</label>
                <div class="col-lg-9">
                  <input class="form-control" type="password" value=""/>
                </div>
              </div>
              <div class="form-group">
                <label class="col-lg-3 control-label"></label>
                <div class="col-lg-9">
                  <input type="submit" class="btn btn-primary" value="Save Changes"/>
                  <span></span>
                  <input type="reset" class="btn btn-default" value="Cancel"/>
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