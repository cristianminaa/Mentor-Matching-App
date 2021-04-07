import React from "react"
import { Inputs } from "../../components"
import Conversation from "./conversation"
import "./styles.scss"

const Chat = () => {
  const [chat, setChat] = React.useState([])
  const [value, setValue] = React.useState("")

  const handleChat = () => {
    if (value === "Hello Jay") {
      setTimeout(() => {  setChat((chat) => [...chat,  { senderIsNotMe: true, message: "Hello Danail" },])}, 1000)
    }
    setChat([...chat, { message: value }])
    setValue("")
  }
  return (
    <>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous"></link>
    
    <div className="containerChat">
      <nav className="navbarTop">
          <p>navbarTop</p>
        </nav>
        <div className="inner d-flex justify-content-center">
      <div className="conversationsMenuLeft border border-dark">
        <h6 className="text-white bg-primary">Conversations</h6>
        <Conversation />
      </div>
      
      <div className="main border border-dark">
        {chat?.map(({ message, senderIsNotMe }, i) => (
          <p key={`message-${i}`} className={senderIsNotMe ? "right" : "left"}>
            {message}
          </p>
        ))}
      </div>
      <center className="barBottom bg-secondary">
        <p></p>
        <Inputs.Text
          className="textArea"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={({ keyCode }) => keyCode === 13 && handleChat()}
        />
        <Inputs.Button
          className="buttonSend"
          text="send"
          onClick={() => handleChat()}
        />
      </center>

  </div>
      <footer>hello footer</footer>
    </div>
    </>
  )
}

export default Chat