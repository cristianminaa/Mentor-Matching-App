import React, { useState } from "react"
import { useSelector } from "react-redux"
import "./styles.scss"
import { NavLink } from "react-router-dom"
import { Inputs } from "../../components"
import Swal from "sweetalert2"
import { usersData } from "../../data"


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

  const connectUser=()=>{
    Swal.fire({
      icon: "success",
      text: "Connection Request sent!",
    })
  }

  const mentorRequestUser=()=>{
    Swal.fire({
      icon: "success",
      text: "Mentorship Request sent!",
    })
  }

  const mentorOfferUser=()=>{
    Swal.fire({
      icon: "success",
      text: "Mentorship Offer sent!",
    })
  }

  const displaySuggestedMentors=()=>{
    return(
      usersData?.map(({fullName, position, location, profilePicture, roles, skills, toImprove, exForces, userType}, i) => {
        var idVal = `searchCard-${i}`
        if (typeof fullName!=='undefined' && fullName!== currentUser.fullName && typeof position!=='undefined' && typeof location!=='undefined' && typeof userType!=='undefined' && typeof exForces!=='undefined' && typeof profilePicture!=='undefined' && typeof roles !=='undefined' && roles.includes("mentor")) {
          return(
            <div className="row profileCard searchCard" key={i} id={idVal} onClick={()=>({})}>
              <div className="profileCardContent">
                {
                  profilePicture === ""? <img src="https://bootdey.com/img/Content/avatar/avatar7.png" style={{height: 100, width:100}} alt="User-Profile"/> 
                  : <img src={profilePicture} style={{height: 100, width: 100}} alt="User-Profile"/>
                }
              </div>
              <div className="profileCardContent">
                <h5>{fullName}</h5>
                <h6>{position}</h6>
                <p>{location}</p>
              </div>

              <div className="profileCardContent roleContent">
                {/* <h6>Roles:</h6> */}
                {roles?.map((role, i) => <li key={i}>{role}</li>)}
                {exForces? <li>Ex Forces</li> : ""}
                {<li>{userType}</li>}
              </div>
              <div className="catagories">
                <div className="profileCardContent">
                  <h6>Skills:</h6>
                  {skills.length>1? skills?.map((skill, i) => <li key={i}>{skill}</li>) : ""}
                </div>
                <div className="profileCardContent">
                  <h6>To Improve:</h6>
                  {toImprove.length>1? toImprove?.map((toImprove, i) => <li key={i}>{toImprove}</li>) : ""}
                </div>
              </div>
              <div className="connectAndMentorBtn">
                <Inputs.Button 
                  text="Connect"
                  className="connectBtn"
                  onClick={()=>{connectUser()}}
                />
                <div className="space"></div>
                <Inputs.Button 
                  text="Request Mentorship"
                  className="mentorshipBtn"
                  onClick={()=>{mentorRequestUser()}}
                />
                <div className="space"></div>
                {currentUser.roles?.includes("mentor")? 
                  <Inputs.Button 
                  text="Offer Mentorship"
                  className="mentorshipOfferBtn"
                  onClick={()=>{mentorOfferUser()}}
                /> :""}
              </div>

            </div>
          )
        }
      })
    )
  }

  const DisplayProfileCard = () =>{
    return(
      <>
        <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>  
        {displaySuggestedMentors()}
      </>
    )
  }

  //Initialise query from form input
  const [query, setQuery] = useState("")
  //Declare array which stores index of usersData found from search
  var searchResults = [];

  //Search for the users
  const SearchQuery = () => {
    const regex = query;
    searchResults = [];
    var i;
    //Check every user in userData if the name matches, push index to searchResults if there is a match
    for (i = 1; i < usersData.length; i += 2 ) {
      if (usersData[i].fullName.toLocaleLowerCase().match(regex.toLocaleLowerCase()) != null) {
        searchResults.push(i);
      }
    }
    //Initialises array of tags found in search
    var tags = regex.match(/#\w+/g);
    var j;
    console.log(tags);
    //If there are tags, loop through each user for the tags, loop through every tag in the usersData.tag array, push index to searchResults if match
    if (tags) {
      for (i = 1; i < usersData.length; i += 2) {
        for(j = 0; j < tags.length; j++)
        var checkTag = tags[j].replace(/#(\S)/g, '$1');
          if (usersData[i].skills.includes(checkTag)) {
            searchResults.push(i);
        }
      }
    }
    console.log(checkTag);
    console.log(searchResults);
    //Runs broken function which is meant to check searchResults is valid to load profiles up
    {DisplaySearchCheck(searchResults[0])}
  }

  //Broken, was meant to make it so looped searchResults to display each profile by calling function and passing index as arg
  const DisplaySearchCheck = (index) =>{
	//Meant to check if searchResults wasnt empty before running the display 
    if (searchResults[0] !== undefined) {
      console.log("yes");
      {DisplaySearch(searchResults[0])}
    }
  }
  //Copied from Display profile from old branch, displays profile based on index given
  const DisplaySearch = (index) =>{
    console.log(usersData[index]);
	  return(
      <>
        <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>  
        <div className="row profileCard" >
          <div className="profileCardContent">
            {
              usersData[index].profilePicture === ""? <img src="https://bootdey.com/img/Content/avatar/avatar7.png" style={{height: 100, width:100}} alt="User-Profile"/> 
              : <img src={usersData[index].profilePicture} style={{height: 100, width:100}} alt="User-Profile"/>
            }
          </div>
          <div className="profileCardContent">
            <h4>{usersData[index].fullName}</h4>
            <h6>{usersData[index].position}</h6>
            <p>{usersData[index].location}</p>
          </div>
          <div className="profileCardContent">
            <h1></h1>
            <h6>Roles:</h6>
            {usersData[index].roles.map((role, i) => <li key={i}>{role}</li>)}
          </div>
          <div className="catagories">
            <div className="profileCardContent">
              <h6>Skills:</h6>
              {usersData[index].skills.map((skill, i) => <li key={i}>{skill}</li>)}
            </div>
            <div className="profileCardContent">
             <h6>To Improve:</h6>
              {usersData[index].toImprove.map((toImprove, i) => <li key={i}>{toImprove}</li>)}
            </div>
          </div>
          <div className="connectAndMentorBtn">
            <Inputs.Button 
              text="Connect"
              className="connectBtn"
              onClick={()=>{connectUser()}}
            />
            <div className="space"></div>
            <Inputs.Button 
              text="Request Mentorship"
              className="mentorshipBtn"
              onClick={()=>{mentorRequestUser()}}
            />
          </div>     
        </div>
      </>
    )
  }

  const filterSearch=()=>{

  }


  return (
    <>
      <div className="wrapper">
        <div className="profilePic">
          <NavLink to="/profile">
            {
              currentUser.profilePicture === ""? <img src="https://bootdey.com/img/Content/avatar/avatar7.png" style={{height: 100, width:100}} alt="User-Profile"/> 
              : <img src={currentUser.profilePicture} style={{height: 80, width:80}} alt="User-Profile"/>
            }
          </NavLink>
        </div>
        <div className="searchContainer">
          <form role="search" id="searchForm">
            <input id="search" type="search" onChange={event => setQuery(event.target.value)} placeholder="Search..." autoFocus required/>
          </form>
          <Inputs.Button 
            text="Go"
            className="searchBtn"
            onClick={()=> SearchQuery()}
          />
        </div>
        
        <div className="msg">
          <NavLink to="/Chat">
            <svg xmlns="http://www.w3.org/2000/svg" height="50" fill="white" class="bi bi-chat-text" viewBox="0 0 16 16">
              <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
              <path d="M4 5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8zm0 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z"/>
            </svg>
          </NavLink>
        </div>
      </div>
      <div className="filter">
        <div className="filterOption">
          <h6>Role</h6>
          <select id="menteeMentorFilter">
            <option>Both</option>
            <option>Mentee</option>
            <option>Mentor</option>
          </select>
        </div>
        
        <div className="filterOption">
          <h6>Type</h6>
          <select id="userTypeFilter">
            <option>All</option>
            <option>Employee</option>
            <option>Alumni</option>
          </select>
        </div>

        <div className="filterOption">
          <h6>Ex-Forces</h6>
          <select id="exForcesFilter">
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>

        <Inputs.Button 
          text="Filter"
          className="filterBtn"
          onClick={()=>{filterSearch()}}
        />
      </div>
      <div className="profile">
        {DisplayProfileCard()}
      </div>
    </>
  )
}
export default Home
