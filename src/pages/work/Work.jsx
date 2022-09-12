import "./work.css"
import Sidebar from "../../components/SideBar/SideBar"
export default function Work() {
  return (
  <div className="work">
    <div className="workWrapper">
     <div className=" work-text">
      <h1 className="work-title">Works in Progress</h1>
      <p className="work-desc"> The goal of the portfolio is to demonstrate my progress. The portfolio contains information illustrating my evolution and development, reflecting the actual performance in the classroom, but also the work done in years of experience.</p> 
     </div>
    <div className="container">
    <div className="card">
         <div className="imgBx">
          <img  src="Screenshot 2022-09-09 101655.png" alt=""/>
          </div>
          <div className="content">
           <h1 className="workTitle"> Web Developer</h1>
             <p className="workDesc"> In the "Informal school of IT" I made a Contact form. It was my first project in this direction.
           </p>
           </div>
    </div>
    <div className="card">
         <div className="imgBx">
          <img  src="Screenshot 2022-09-09 105826.png" alt=""/>
          </div>
          <div className="content">
           <h1 className="workTitle">  Web Developer</h1>
             <p className="workDesc"> This is a Css project where I practiced page positioning.Fortunately over time I have gained experience in organizing on pages.
           </p>
           </div>
      </div>
    <div className="card">
         <div className="imgBx">
          <img  src="Screenshot 2022-09-09 110224.png" alt=""/>
          </div>
          <div className="content">
           <h1 className="workTitle">  Web Developer</h1>
             <p className="workDesc">This is a project where I used the grid for page arranging. It also had to include the responsivnes part. An interesting challenge
           </p>
           </div>
      </div>
      <div className="card">
         <div className="imgBx">
          <img  src="8e3f320dacf8fc8c51b913ca923f6c12.jpg" alt=""/>
          </div>
          <div className="content">
           <h1 className="workTitle"> Pattern Maker</h1>
             <p className="workDesc"> Operating in CAD System - Gemini
            - realization of basic patterns 
            - making changes to the patterns according to the pre-established models and
            the materials used.
           
           </p>
           </div>
    </div>
    <div className="card">
         <div className="imgBx">
          <img  src="2d4c3cdcd0d01eb238f6982c363d0c71.jpg" alt=""/>
          </div>
          <div className="content">
           <h1 className="workTitle"> Pattern Maker</h1>
             <p className="workDesc"> Coordination of the team in order to make the product according to the
             designer's sketch
             
           </p>
           </div>
      </div>
    
    <div className="card">
         <div className="imgBx">
          <img  src="R (1).jpeg" alt=""/>
          </div>
          <div className="content">
           <h1 className="workTitle"> Designer</h1>
             <p className="workDesc"> Creating looks for individual garments, involving shape, color, fabric, trimming, and more.
           </p>
           </div>
    </div>  
   </div>  
  </div>
  
    <Sidebar/>
  
  </div>
  )
  
}
