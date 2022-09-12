import SideBar from "../SideBar/SideBar"
import "./singlePost.css"

export default function singlePost() {
  return ( 
    <div className="single">
      <div className="singleWrapper">
       <div className=" single-post-text">
         <h1 className="single-post-title">Technologies</h1>
          <p className="single-post-desc"> As the world becomes more and more connected, businesses are turning to IT technology to help them stay ahead of the curve. By understanding what businesses are looking for in a tech solution, you can better equip yourself to make an informed decision when it comes to selecting the right IT investment.</p> 
        </div>
        <div className="progress-bar">
      <div className="circle">
        <div className="card">
            <div className="box">
                <div className="par">
                    <svg>
                        <circle cx="70" cy="70" r="70"></circle>
                        <circle cx="70" cy="70" r="70"></circle>
                    </svg>
                    <div className="num">
                        <h2>80 <span>%</span></h2>
                    </div>
                </div>
                <div className="text">Html&Css</div>
            </div>
        </div>
        <div className="card">
            <div className="box">
                <div className="par">
                    <svg>
                        <circle cx="70" cy="70" r="70"></circle>
                        <circle cx="70" cy="70" r="70"></circle>
                    </svg>
                    <div className="num">
                        <h2>60 <span>%</span></h2>
                    </div>
                </div>
                <div className="text">javascript</div>
            </div>
        </div>
        <div className="card">
            <div className="box">
                <div className="par">
                    <svg>
                        <circle cx="70" cy="70" r="70"></circle>
                        <circle cx="70" cy="70" r="70"></circle>
                    </svg>
                    <div className="num">
                        <h2>65 <span>%</span></h2>
                    </div>
                </div>
                <div className="text">react js</div>
            </div>
        </div>
    </div>
    <div className="circle">
        <div className="card">
            <div className="box">
                <div className="par">
                    <svg>
                        <circle cx="70" cy="70" r="70"></circle>
                        <circle cx="70" cy="70" r="70"></circle>
                    </svg>
                    <div className="num">
                        <h2>90 <span>%</span></h2>
                    </div>
                </div>
                <div className="text">team player</div>
            </div>
        </div>
        <div className="card">
            <div className="box">
                <div className="par">
                    <svg>
                        <circle cx="70" cy="70" r="70"></circle>
                        <circle cx="70" cy="70" r="70"></circle>
                    </svg>
                    <div className="num">
                        <h2>80 <span>%</span></h2>
                    </div>
                </div>
                <div className="text">problem solving</div>
            </div>
        </div>
        <div className="card">
            <div className="box">
                <div className="par">
                    <svg>
                        <circle cx="70" cy="70" r="70"></circle>
                        <circle cx="70" cy="70" r="70"></circle>
                    </svg>
                    <div className="num">
                        <h2>72 <span>%</span></h2>
                    </div>
                </div>
                <div className="text">english</div>
            </div>
        </div>
    </div>
   </div>
   </div>
   <SideBar/>
</div>
  )
}
