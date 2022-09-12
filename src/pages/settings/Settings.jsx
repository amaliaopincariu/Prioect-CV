import "./settings.css"
import Sidebar from "../../components/SideBar/SideBar"

export default function Settings() {
  return (
    <div className="settings">
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle"> Contact Me</span>
                <span className="settingsDeleteTitle"> </span>
            </div>
            <form className="settingsForm" action="https://formsubmit.co/botaamalia84@gmail.com" method="POST">
                <label>Profil Picture</label>
                <div className="settingsPP">
                    <img src="43458452_2087206651302557_2812731763837632512_n.jpg" alt="pp"/>
                    <label htmlFor="fileInput">
                        <i className="settingsPPIcon far fa-user-circle"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display: "none"}}/>
                </div>
                 <label> Name</label>
                 <input type="text" placeholder=" Your Name"/>
                 <label> Email</label>
                 <input type="email" placeholder=" Yourn Email"/>
                 <label> Phone</label>
                 <input type="number" placeholder=" Your Phone"/>
                 <label> Message</label>
                 <textarea className="field area" type="text" placeholder="... "></textarea>
                 <button className="settingsSubmit" type="submit"> Submit </button>
            </form>
            
            
        </div>
        <Sidebar />
    
    </div>
  )
}
