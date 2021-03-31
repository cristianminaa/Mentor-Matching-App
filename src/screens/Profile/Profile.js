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
          <a href="/home"><img src={currentUser.profilePicture} style={{height: 100, width:100}} alt="User-Profile"/></a>
        </div>
        <div className="searchbar">
          <img class="search-icon" src="https://static.thenounproject.com/png/101791-200.png" alt="" />
          <input placeholder="Search" type="text" class="search" />
        </div>
        <div className="msg">
          <img height="30" src="http://cdn.onlinewebfonts.com/svg/img_397748.png" alt="Messenger free icon"/>
        </div>
      </div>
      <div class="container emp-profile">
        <form method="post">
          <div class="row">
            <div class="col-md-4">
              <div class="profile-img">
                <img src={currentUser.profilePicture} alt=""/>
                <div class="upload-btn" onClick={()=>{document.getElementById('file-btn').click()}}>Change Picture</div><br/>
                  <input id="file-btn" type='file' /><br/>
              </div>
            </div>
            <div class="col-md-5">
              <div class="profile-head">
                <h5>
                  {currentUser.fullName}
                </h5>
                <h6>
                  {currentUser.position}
                </h6>
                <p class="proile-rating">RANKINGS : <span>8/10</span></p>
              </div>
            </div>
            <div class="col-md-3">
              <input type="#" class="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <div class="profile-work">
                <p>SKILLS</p>
                {/* instead of calling each element, just map it later */}
                {/* {currentUser.skills[0]}<br/>
                {currentUser.skills[1]}<br/>
                {currentUser.skills[2]}<br/>
                {currentUser.skills[3]}<br/>
                {currentUser.skills[4]}<br/> */}
              </div>
            </div>
            <div class="col-md-8">
              <div class="tab-content profile-tab" id="myTabContent">
                  <div class="row">
                    <div class="col-md-6">
                      <label>Work Email</label>
                    </div>
                    <div class="col-md-6">
                      <p>{currentUser.email}</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>Name</label>
                    </div>
                    <div class="col-md-6">
                      <p>{currentUser.fullName}</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>Personal Email</label>
                    </div>
                    <div class="col-md-6">
                      <p>{currentUser.personalEmail}</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>Phone</label>
                    </div>
                    <div class="col-md-6">
                      <p>{currentUser.phoneNumber}</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>Profession</label>
                    </div>
                    <div class="col-md-6">
                      <p>{currentUser.position}</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>Experience</label>
                    </div>
                    <div class="col-md-6">
                      <p>Expert</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>Total Projects</label>
                    </div>
                    <div class="col-md-6">
                      <p>230</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>English Level</label>
                    </div>
                    <div class="col-md-6">
                      <p>Expert</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>Availability</label>
                    </div>
                    <div class="col-md-6">
                      <p>6 months</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <label>Your Bio</label><br/>
                      <p>Your detail description</p>
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