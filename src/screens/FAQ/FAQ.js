import React from "react"
import "./styles.scss"
import { NavLink } from "react-router-dom"
import {history} from "../../redux/store"
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { Inputs } from "../../components";


const FAQ = () => {

  return (
    <>
      <div className="wrapper">
        <NavLink to="/profile">
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
        <NavLink to="/">
          <div style={{paddingRight: 50}}>
            <img src="https://surveymonkey-assets.s3.amazonaws.com/survey/182409455/e1ca79ba-8544-401a-b369-7cd97429a630.png" style={{ height: 60, width: 100}} alt="Login" />
          </div>
        </NavLink>
        <div>
                                   
        </div>
      </div>
      <div className="mainContent">
        <div className="faqHeader">
            <h3>FAQ</h3>
            <p>
              <h4>Here you will find everything you need</h4>
              <p>We know that websites can sometimes be confusing, so we created this page to help you.
              </p>
            </p>
          </div>
        <div className="collapsibles">
          <Accordion allowZeroExpanded="True" allowMultipleExpanded="True">
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  Email address not accepted?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  This website is intended only for FDM employees. Thus, only FDM email addresses are accepted. 
                </p>
                <p></p>
                <p>
                  Should you be an alumni, you will receive a code to use for login/signup.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  How to edit your personal information?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  To edit your personal information, simply go to your profile and scroll down to the bottom. 
                </p>
                <p>
                  Then, click on the settings icon, and look for "edit information". 
                </p>
                <p>
                  Finally, simply edit what you want and click "Save".
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  Wondering how to find someone?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Just type their name into the search bar and relevant results will be displayed.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  How does mentoring work?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  We believe all of our employees can learn from each other!
                </p>
                <p>
                </p>
                <p>
                  We have created this system to ease the mentoring process! Our mentoring programme assigns a "newcomer" to somebody experienced so they can learn the ropes
                  from them. This way our systems and protocols are properly known by everybody, and new employees get to know senior employees!
                </p>
                <p></p>
                <p>
                  Senior employees can also learn from newcomers! It is exactly the same process, and this assures an influx of new informations and practices in our company.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="supportTicket">
          <h4>Still need help?</h4>
          <h4>Send us a support ticket and we will assist you!</h4>
          <Inputs.Button text="Help" className="helpButton" onClick={goToHelp}/>
        </div>
      </div>
    </>
  )

}

function goToHelp() {
  history.push("/support")
}

export default FAQ
