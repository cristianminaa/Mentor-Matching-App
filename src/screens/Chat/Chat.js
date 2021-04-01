import React from "react"
import Textarea from "../../components/Inputs/Textarea/Textarea"
import Button from "../../components/Inputs/Button/Button"
import Conversation from "./conversation"
import "./styles.scss"


const Chat = () =>{

    return(
        <div className="containerChat">
            <div className="conversationsMenuLeft">
                <p>conversationsMenuLeft</p>
                <Conversation/>
                </div>
            <nav className="navbarTop"><p>navbarTop</p></nav>
            <div className="main"><p>main</p></div>
            <div className="barBottom">
                <p>barBottom</p>
                <Textarea className="textArea"/>
                <Button className="buttonSend" text="send"></Button>
                </div>
            <footer>hello footer</footer>

        </div>
    );
}

export default Chat