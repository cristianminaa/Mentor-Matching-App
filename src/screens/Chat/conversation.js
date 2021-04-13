import React from "react"
import { useSelector } from "react-redux"
import avatar from "../../assets/user-avatar.svg"
import "./styles.scss"

const converation = ({ onClick, name, isSelected }) => {
  //logic

  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6"
        crossorigin="anonymous"
      ></link>

      <div
        className={`containerConversation border border-primary align-middle ${
          isSelected && "selected"
        }`}
        onClick={() => onClick()}
      >
        <img src={avatar} alt="avatar" />
        <p>{name}</p>
      </div>
    </>
  )
}
export default converation
