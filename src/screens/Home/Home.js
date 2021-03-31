import React from "react"
import { useSelector } from "react-redux"
import "./styles.scss"

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
      } else if(key=="password") {
        continue
      }
      userDetails.push(<p>{`${key}: ${value}`}</p>)
    }
    return userDetails
  }

  return (
    <>
      <div className="wrapper">
        <div className="profilePic">
          <a href="/profile"><img src={currentUser.profilePicture} style={{height: 100, width:100}} alt="User-Profile"/></a>
        </div>
        <div className="msg">
          <img height="30" src="http://cdn.onlinewebfonts.com/svg/img_397748.png" alt="Messenger free icon"/>
        </div>
      </div>
      <div className="profile">
        <h3>Personal Details</h3>
        {displayUser(currentUser)}
      </div>
      <div className="profile">
        <p><h3>Categories</h3></p>
        <p>Tag A</p>
        <p>Tag B</p>
        <p>Tag C</p>
        <p>Tag D</p>
        <p>Tag E</p>
        <p>Tag F</p>
      </div>
    </>
  )
}
export default Home
