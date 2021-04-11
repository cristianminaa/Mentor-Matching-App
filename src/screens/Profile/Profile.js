import React, {useState} from "react"
import { Inputs } from "../../components"
import { useSelector, useDispatch } from "react-redux"
import { logOut } from "../../redux/actions"
import "./styles.scss"
import { NavLink } from "react-router-dom"
import { categoriesData } from "../../data"
import { usersData } from "../../data"
import Swal from "sweetalert2"

const Profile = () =>{
  const dispatch = useDispatch()
  const { currentUser } = useSelector((state) => state.users)
  const [user, setUser] = useState({})
  const handleChange = (field, value) => setUser({ ...user, [field]: value })

  const SubmitButtonClicked=()=>{
    if(document.getElementById("mainPass").value !== document.getElementById("confirmPass").value) {
      Swal.fire({ icon: "error", title: "Password does not match!" })
    } else {
      // document.getElementById("profile-form").submit();
      Swal.fire({
        title: 'Do you want to save the changes?',
        showCancelButton: true,
        confirmButtonText: `Save`,
        confirmButtonColor: '#1daded',
        cancelButtonColor: '#d33',
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('Saved!', '', 'success')
        } else if (result.isDenied) {
          Swal.fire('Changes are not saved', '', 'info')
        }
      })
    }
  }

  const ResetButtonClicked=()=>{
    Swal.fire({
      title: 'Are you sure you want to cancel the changes?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: `Go back`,
      confirmButtonColor: '#1daded',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your changes have been deleted.',
          'success'
        )
      }
    })
  }

  const UploadButtonClicked=()=>{
    document.getElementById('file-btn').click()
  }

  const deleteMenteeMentor=(type, i)=>{
    if(type === "mentor") {
      Swal.fire({
        icon: "warning",
        title: 'Do you want to remove this Mentor?',
        showCancelButton: true,
        confirmButtonText: `Yes`,
        confirmButtonColor: '#1daded',
        cancelButtonColor: '#d33',
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('Mentor Removed!', '', 'success')
          document.getElementById(`mentorCard-${i}`).style.display="none";
        } else if (result.isDenied) {
          Swal.fire('Changes are not saved', '', 'info')
        }
      })
    } else if(type === "mentee") {
      Swal.fire({
        icon: "warning",
        title: 'Do you want to remove this Mentee?',
        showCancelButton: true,
        confirmButtonText: `Yes`,
        confirmButtonColor: '#1daded',
        cancelButtonColor: '#d33',
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('Mentee Removed!', '', 'success')
          document.getElementById(`menteeCard-${i}`).style.display="none";
        } else if (result.isDenied) {
          Swal.fire('Changes are not saved', '', 'info')
        }
      })
    } else if(type === "connection") {
      var mentor = document.getElementById(`mentorCard-${i}`)
      var mentee = document.getElementById(`menteeCard-${i}`)
      var menteeCheck, mentorCheck = "";
      if (mentee!=null) {
        menteeCheck=mentee.style.display==="none";
      } else {
        menteeCheck=true
      }

      if (mentor!=null) {
        mentorCheck=mentor.style.display==="none";
      } else {
        mentorCheck=true
      }

      if (mentorCheck && menteeCheck) {
        Swal.fire({
          icon: "warning",
          title: 'Do you want to remove this Connection?',
          showCancelButton: true,
          confirmButtonText: `Yes`,
          confirmButtonColor: '#1daded',
          cancelButtonColor: '#d33',
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire('Connection Removed!', '', 'success')
            document.getElementById(`conCard-${i}`).style.display="none";
          } else if (result.isDenied) {
            Swal.fire('Changes are not saved', '', 'info')
          }
        })
      } else {
         Swal.fire({
           icon: "error",
           title: "Cannot remove this connection!",
           text: "This connection exists either in your Mentor or Mentee list. Please remove them from these lists before attempting to remove them from your connections list."
         })
      }
    }
  }

  const regBtn =()=>{
    return(
      <>
        <h6>Skills:</h6>

      </>
    )
  }

  const mentorRegistration = () =>{
    Swal.fire({
      title: 'Are you sure you want to become a Mentor?',
      text: 'You will be asked to add your skills once approved.',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#1daded',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, apply to become mentor.'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Application sent!',
          'Your mentor application has been sent.',
          'success'
        )
      }
    })
  }

  const editCardClicked=(users)=>{
    return(
      <>
        <div className="editMentors">
          <h6 className="editTitle">Manage Mentors</h6>
          <div className="scrollableMentors">
            {
              users?.map(({fullName, position, location, profilePicture, roles}, i) => {
                var idVal = `mentorCard-${i}`
                if (typeof fullName!=='undefined' && fullName!== currentUser.fullName && typeof position!=='undefined' && typeof location!=='undefined' && typeof profilePicture!=='undefined' && typeof roles !=='undefined' && roles.includes("mentor")) {
                  return(
                    <div className="row profileCard editCard" id={idVal} key={i} onClick={()=>deleteMenteeMentor("mentor",i)}>
                      <div className="profileCardContent">
                        {
                          profilePicture === ""? <img src="https://bootdey.com/img/Content/avatar/avatar7.png" style={{height: 45, width:45}} alt="User-Profile"/>
                          : <img src={profilePicture} style={{height: 45, width: 45}} alt="User-Profile"/>
                        }
                      </div>
                      <div className="profileCardContent">
                        <h4>{fullName}</h4>
                        <h6>{position}</h6>
                        <p>{location}</p>
                      </div>
                    </div>
                  )
                }
              })
            }
          </div>
        </div>
        {
        currentUser?.roles.includes("mentor")?
          <div className="editMentees">
            <h6 className="editTitle">Manage Mentees</h6>
            <div className="scrollableMentees">
              {
                users?.map(({fullName, position, location, profilePicture, roles}, i) => {
                  var idVal = `menteeCard-${i}`
                  if (typeof fullName!=='undefined' && fullName!== currentUser.fullName && typeof position!=='undefined' && typeof location!=='undefined' && typeof profilePicture!=='undefined' && typeof roles !=='undefined' && roles.includes("mentee")) {
                    return(
                      <div className="row profileCard editCard" id={idVal} key={i} onClick={()=>deleteMenteeMentor("mentee",i)}>
                        <div className="profileCardContent">
                          {
                            profilePicture === ""? <img src="https://bootdey.com/img/Content/avatar/avatar7.png" style={{height: 45, width:45}} alt="User-Profile"/>
                            : <img src={profilePicture} style={{height: 45, width: 45}} alt="User-Profile"/>
                          }
                        </div>
                        <div className="profileCardContent">
                          <h4>{fullName}</h4>
                          <h6>{position}</h6>
                          <p>{location}</p>
                        </div>
                      </div>
                    )
                  }
                })
              }
            </div>
          </div>
          :""
        }


        <div className="editConnections">
          <h6 className="editTitle">Manage Connections</h6>
          <div className="scrollableConnections ">
            {
              users?.map(({fullName, position, location, profilePicture}, i) => {
                var idVal = `conCard-${i}`
                if (typeof fullName!=='undefined' && fullName!== currentUser.fullName && typeof position!=='undefined' && typeof location!=='undefined' && typeof profilePicture!=='undefined' ) {
                  return(
                    <div className="row profileCard editCard" id={idVal} key={i} onClick={()=>deleteMenteeMentor("connection",i)}>
                      <div className="profileCardContent">
                        {
                          profilePicture === ""? <img src="https://bootdey.com/img/Content/avatar/avatar7.png" style={{height: 45, width:45}} alt="User-Profile"/>
                          : <img src={profilePicture} style={{height: 45, width: 45}} alt="User-Profile"/>
                        }
                      </div>
                      <div className="profileCardContent">
                        <h4>{fullName}</h4>
                        <h6>{position}</h6>
                        <p>{location}</p>
                      </div>
                    </div>
                  )
                }
              })
            }
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
      <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
      <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"></link>

      <div className="wrapper">
        <div className="profilePic">
          <NavLink to="/">
            <svg xmlns="http://www.w3.org/2000/svg" height="50" fill="ghostwhite" class="bi bi-arrow-left-square-fill" viewBox="0 0 16 16">
              <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z"/>
            </svg>
          </NavLink>
        </div>
        <NavLink to="/">
          <img src="https://surveymonkey-assets.s3.amazonaws.com/survey/182409455/e1ca79ba-8544-401a-b369-7cd97429a630.png" style={{ height: 60, width: 100 }} alt="Login" />
        </NavLink>
        <div className="msg">
          <NavLink to="/Chat">
            <svg xmlns="http://www.w3.org/2000/svg" height="50" fill="ghostwhite" class="bi bi-chat-text" viewBox="0 0 16 16">
              <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
              <path d="M4 5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8zm0 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z"/>
            </svg>
          </NavLink>
        </div>
      </div>
      <div className="container emp-profile">
        <div className="row">
          <div className="col-md-12">
            <form method="#" id="profile-form">
              <div className="row">
                <div className="col-md-4 bg-white">
                  <div className="profile-img">
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt=""/>
                    <div className="upload-btn" onClick={()=>UploadButtonClicked()}>Change Picture</div>
                    <input id="file-btn" type='file' /><br/>
                  </div>
                </div>
                <div className="col-md-8 intro">
                  <div className="col-md-12">
                    <div className="profile-head">
                      <h3>
                        {currentUser?.fullName}
                      </h3>
                      <p></p>
                      <h6>
                        {currentUser?.position}
                      </h6>
                      <br/>
                      {currentUser?.roles?.includes("mentor")? (
                        <p>Current number Mentee(s) : {currentUser.mentees}</p>
                      ) : ""}
                      {currentUser?.roles?.includes("mentee")? (
                        <p>Current number Mentor(s) : {currentUser.mentors}</p>
                      ) : ""}
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 skills">
                  <div className="profile-work">
                    {currentUser?.roles?.includes("mentee") ? (
                      <>
                        <h6>To Improve:</h6>
                        <Inputs.DropdownSelect
                          // defaultValue={currentUser.toImprove || []}
                          options={categoriesData}
                          onChange={(value) => handleChange("toImprove", value)}
                          placeholder="Categories for improvement:"
                        />
                      </>
                    ) : ""}
                    {currentUser?.roles?.includes("mentor")?(
                      <>
                        <h6>Skills:</h6>
                        <Inputs.DropdownSelect
                          defaultValue={currentUser.skills || []}
                          options={[categoriesData]}
                          onChange={(value) => handleChange("skills", value)}
                          placeholder="Skill to provide:"
                        />
                      </>
                    ):""}
                    <br/>
                    <h6>Interests</h6>
                    <Inputs.Textarea
                      value={currentUser?.interests || ""}
                      onChange={({ target: { value } }) =>
                        handleChange("interests", value)
                      }
                      placeholder="Interests: photography, cars, cooking "
                    />
                    {!currentUser?.roles?.includes("mentor")?(
                      <Inputs.Button
                        text="Register to become a Mentor"
                        onClick={()=>{mentorRegistration()}}
                      />
                    ):""}
                  </div>
                </div>
                <div className="col-md-8 main-info" id="main">
                  <div class="form-group">
                    <label>First name:</label>
                      <Inputs.Text
                        type="text"
                        inputClassName="form-control"
                        placeholder={currentUser.firstName}
                      />
                  </div>
                  <div class="form-group">
                    <label>Last name:</label>
                      <Inputs.Text
                        type="text"
                        inputClassName="form-control"
                        placeholder={currentUser.lastName}
                      />
                  </div>
                  <div class="form-group">
                    <label>Position:</label>
                      <Inputs.Text
                        type="text"
                        inputClassName="form-control"
                        placeholder={currentUser.position}
                      />
                  </div>
                  <div class="form-group">
                    <label>Personal Email:</label>
                      <Inputs.Text
                        type="text"
                        inputClassName="form-control"
                        placeholder={currentUser.personalEmail}
                      />
                  </div>
                  <div class="form-group">
                    <label>Username:</label>
                      <Inputs.Text
                        type="text"
                        inputClassName="form-control"
                        placeholder={currentUser.email}
                      />
                  </div>
                  <div class="form-group">
                    <label>User Type:</label>
                      <Inputs.DropdownSelect
                        options={[{label: "employee"},{label: "alumni"}]}
                        onChange={(value) => handleChange("userType", value)}
                        placeholder={currentUser.userType}
                      />
                  </div>
                  {currentUser?.roles?.includes("mentor")?(
                    <div class="form-group">
                      <label>Mentee Limit:</label>
                      <Inputs.DropdownSelect
                        options={[{label: 1},{label: 2},{label: 3},{label: 4},{label: 5}]}
                        onChange={(value) => handleChange("maxNumberOfMentees", value)}
                        placeholder={currentUser.maxNumberOfMentees}
                      />
                    </div>
                  ):""}
                  <div class="form-group">
                    <label>Password:</label>
                      <Inputs.Text
                        type="password"
                        inputClassName="form-control"
                        placeholder="Enter password:"
                        id="mainPass"
                      />
                  </div>
                  <div class="form-group">
                    <label>Confirm password:</label>
                      <Inputs.Text
                        type="password"
                        inputClassName="form-control"
                        placeholder="Confirm Password:"
                        id="confirmPass"
                      />
                  </div>
                  <div class="form-group">
                    <Inputs.Button
                      text="Save Changes"
                      onClick={()=> SubmitButtonClicked()}
                    />
                    <span></span>
                    <Inputs.Button
                      text="Cancel"
                      onClick={()=> ResetButtonClicked()}
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 connectionsAndMentorships">
            {editCardClicked(usersData)}
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 FAQ">
            <NavLink to="/faq"style={{textDecoration: "none"}}>
              <Inputs.Button
                text="FAQ"
                onClick={()=>{}}
              />
            </NavLink>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 FAQ">
              <Inputs.Button
                text="Log Out"
                onClick={()=>dispatch(logOut())}
              />
          </div>
        </div>
      </div>

    </>
  )
}

export default Profile
