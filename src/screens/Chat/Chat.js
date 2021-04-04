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
    <div className="containerChat">
      <div className="conversationsMenuLeft">
        <p>conversationsMenuLeft</p>
        <Conversation />
      </div>
      <nav className="navbarTop">
        <p>navbarTop</p>
      </nav>
      <div className="main">
        {chat?.map(({ message, senderIsNotMe }, i) => (
          <p key={`message-${i}`} className={senderIsNotMe ? "right" : "left"}>
            {message}
          </p>
        ))}
      </div>
      <div className="barBottom">
        <p>barBottom</p>
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
      </div>
      <footer>hello footer</footer>
    </div>
  )
}

export default Chat
