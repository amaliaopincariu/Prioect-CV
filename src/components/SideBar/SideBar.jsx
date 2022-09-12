import React from "react"
import "./SideBar.css"

export default function SideBar() {
  return (
    <div className="sideBar">
          <div className="sideBarItem">
              <span className="sideBarTitle"> ABOUT ME</span>
              <img className="sideBarImg" src="10489858_76653959003.jpg" alt=""/>
              <p> 
              I'm dedicated and passionate about web and front-end development.<br></br>
               I really enjoy working with React.JS.<br></br> Open for new projects.
               I'm a person oriented to self-improvement, a good observer, and I
               have good attention to detail. In all my experience until now, I have
                accumulated valuable knowledge in working with people.<br></br>
                I like simple solutions.
            </p>
          </div>
          <div className="sideBarItem">
             <span className="sideBarTitle"> SKILLS </span>
             <ul className="sideBarList">
                 <li className="sideBarListItem">Technical Skills</li>
                 <li className="sideBarListItem">Soft Skils</li>
                 <li className="sideBarListItem">Language</li>

             </ul>
          </div>
          <div className="sideBarItem">
             <span className="sideBarTitle"> EDUCATION </span>
             <ul className="sideBarList">
                 <li className="sideBarListItem">Informal School of IT</li>
                 <li className="sideBarListItem"> Gratuated Technical University</li>
             </ul>
          </div>
          <div className="sideBarItem">
             <span className="sideBarTitle"> WORK </span>
             <ul className="sideBarList">
                 <li className="sideBarListItem">Front-end Development</li>
                 <li className="sideBarListItem">Pattern Maker </li>
                 <li className="sideBarListItem">Designer </li>


             </ul>
          </div>
    </div>

  )
}
