import React from "react"
import { useSelector } from "react-redux"
import "./styles.scss"
import { NavLink } from "react-router-dom"


const Home = () => {
  const { currentUser } = useSelector((state) => state.users)
  const displayUser = (user) => {
    const userDetails = []
    let i=0
    for (const [key, value] of Object.entries(user)) {
      //Prints user information but does not print variable with link to profile picture
      //Skips the variable that holds the user's password for s
      i++
      if(i>Object.entries(user).length-1) {
        break
      } else if(key==="password") {
        continue
      }
      userDetails.push(<p>{`${key}: ${value}`}</p>)
    }
    return userDetails
  }

   const DisplayProfileCard = () =>{
    return(
      <>
        <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>  
        <div className="row profileCard">
          <div className="col-md-3">
            {
              currentUser.profilePicture === ""? <img src="https://bootdey.com/img/Content/avatar/avatar7.png" style={{height: 100, width:100}} alt="User-Profile"/> 
              : <img src={currentUser.profilePicture} style={{height: 100, width:100}} alt="User-Profile"/>
            }
          </div>
          <div className="col-md-4">
            <h4>{currentUser.fullName}</h4>
            <h6>{currentUser.position}</h6>
            <p>{currentUser.location}</p>
          </div>
        </div>

        <div className="row profileCard">
          <div className="col-md-3">
            {
              currentUser.profilePicture === ""? <img src="https://bootdey.com/img/Content/avatar/avatar7.png" style={{height: 100, width:100}} alt="User-Profile"/> 
              : <img src={currentUser.profilePicture} style={{height: 100, width:100}} alt="User-Profile"/>
            }
          </div>
          <div className="col-md-4">
            <h4>{currentUser.fullName}</h4>
            <h6>{currentUser.position}</h6>
            <p>{currentUser.location}</p>
          </div>
        </div>
      </>
    )
   }

  return (
    <>
      <div className="wrapper">
        <NavLink to="/">
          <img src="https://surveymonkey-assets.s3.amazonaws.com/survey/182409455/e1ca79ba-8544-401a-b369-7cd97429a630.png" style={{ height: 60, width: 100 }} alt="Login" />
        </NavLink>
        <form role="search" id="searchForm">
          <input id="search" type="search" placeholder="Search..." autofocus required />
          <button type="submit">Go</button>    
        </form>
        <div className="msg">
          <NavLink to="/Chat">
            <svg xmlns="http://www.w3.org/2000/svg" height="50" fill="white" class="bi bi-chat-text" viewBox="0 0 16 16">
              <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
              <path d="M4 5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8zm0 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z"/>
            </svg>
          </NavLink>
        </div>
        <div className="profilePic">
          <NavLink to="/profile">
            {
              currentUser.profilePicture === ""? <img src="https://bootdey.com/img/Content/avatar/avatar7.png" style={{height: 100, width:100}} alt="User-Profile"/> 
              : <img src={currentUser.profilePicture} style={{height: 80, width:80}} alt="User-Profile"/>
            }
          </NavLink>
        </div>
      </div>
      <div className="profile">
        {DisplayProfileCard()}
      </div>
    </>
  )
}
export default Home
