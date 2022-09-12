import { Link } from "react-router-dom";
import "./TopBar.css";

export default function TopBar () {
   const user = true;
     return (
        <div className="top">
             <div className="topLeft">
             <a href="https://github.com/amaliaopincariu"><i className="topIcon fa-brands fa-github"></i></a>
             <a href="https://www.linkedin.com/in/amalia-opincariu-a7005991/"><i className="topIcon fa-brands fa-linkedin"></i></a>
             <a href="https://www.facebook.com/bota.amalialoredana"><i className="topIcon fa-brands fa-square-facebook"></i></a>
             <a href="https://www.instagram.com/conceptnatureclothing/"><i className="topIcon fa-brands fa-square-instagram"></i></a>
             </div>
             <div className="topCenter">
                 <ul className="topList">
                    <li className="topListItem">
                        <Link to="/"style={{ textDecoration:"none", color:"inherit"}}>HOME</Link></li>
                    <li className="topListItem"> <Link to="single"style={{ textDecoration:"none", color:"inherit"}}>SKILLS</Link></li>
                    <li className="topListItem"> <Link to="education"style={{ textDecoration:"none", color:"inherit"}}>EDUCATION</Link></li>
                    <li className="topListItem"> <Link to="work"style={{ textDecoration:"none", color:"inherit"}}>WORK</Link></li>
                    <li className="topListItem"> <Link to="settings"style={{ textDecoration:"none", color:"inherit"}}>CONTACT ME</Link></li>
                 </ul>
             </div>
             <div className="topRight">
                <img
                className="topImg"
                 src="43458452_2087206651302557_2812731763837632512_n.jpg" alt="My picture"/>
                <a href="/Amalia Opincariu CV.pdf" download><i className="topDownIcon fa-solid fa-arrow-down"></i></a>

             </div>
            
        </div>
     )

}