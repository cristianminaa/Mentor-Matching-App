import React from "react"
import { useSelector } from "react-redux"
import avatar from "../../assets/user-avatar.svg"
import "./styles.scss"

const converation = () =>{
    //logic


    return(
        <div className="containerConversation">
            <img src={avatar} alt="avatar"/>
            <p>Name Name</p>
        </div>
    );
}
export default converation;