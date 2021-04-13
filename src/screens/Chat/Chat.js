import React, { useState, useEffect, useRef } from "react"
import { Inputs } from "../../components"
import Conversation from "./conversation"
import "./styles.scss"
import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"

const Chat = () => {
  const responses = {
    "Hello Jay": "Hello Danail",
  }

  const [chats, setChats] = useState([
    [
      { message: "oldChat 1" },
      { message: "oldChat 1 " },
      { message: "oldChat 1" },
    ],
    [
      { message: "oldChat 2" },
      { message: "oldChat 2 " },
      { message: "oldChat 2" },
    ],
  ])
  const userNames = ["Jay", "Denis"]
  const [value, setValue] = useState("")
  const [selectedConversation, setSelecetedConversation] = useState(0)
  const prevSelected = useRef(selectedConversation)
  const [chat, setChat] = useState([])

  const handleChat = () => {
    if (Object.keys(responses).includes(value)) {
      setTimeout(() => {
        setChat((chat) => [
          ...chat,
          { senderIsNotMe: true, message: responses[value] },
        ])
      }, 1000)
    }
    setChat([...chat, { message: value }])
    setValue("")
  }
  useEffect(() => {
    const newChats = chats?.slice()
    newChats.splice(prevSelected.current, 1, chat)
    setChats(newChats)
    prevSelected.current = selectedConversation
    setChat(chats[selectedConversation])
  }, [selectedConversation])

  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6"
        crossorigin="anonymous"
      ></link>
      <div className="wrapper">
        <div className="profilePic">
          <NavLink to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="50"
              fill="ghostwhite"
              class="bi bi-arrow-left-square-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z" />
            </svg>
          </NavLink>
        </div>
        <NavLink to="/">
          <img
            src="https://surveymonkey-assets.s3.amazonaws.com/survey/182409455/e1ca79ba-8544-401a-b369-7cd97429a630.png"
            style={{ height: 60, width: 100 }}
            alt="Login"
          />
        </NavLink>
      </div>
      <div className="containerChat">
        {/*<nav className="navbarTop">
          <p>navbarTop</p>
        </nav>
        <div className="inner d-flex justify-content-center">*/}
        <div className="conversationsMenuLeft border border-dark">
          <h6 className="text-white bg-primary">Conversations</h6>
          <div className="scrollableConversations">
            {chats.map((chat, i) => (
              <Conversation
                onClick={() => setSelecetedConversation(i)}
                name={userNames[i]}
                isSelected={selectedConversation === i}
              />
            ))}
          </div>
        </div>

        <div className="main border border-dark">
          {chat?.map(({ message, senderIsNotMe }, i) => (
            <p
              key={`message-${i}`}
              className={`message ${!senderIsNotMe && "right"}`}
            >
              {message}
            </p>
          ))}
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

        {/*  </div>
            <footer>hello footer</footer>*/}
      </div>
    </>
  )
}

export default Chat
