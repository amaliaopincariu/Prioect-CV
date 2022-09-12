import "./Post.css"

export default function Post() {
  return (
    <div className="post">
        <img className="postImg"
             src="html5_css3_js.png" alt="skills"/>
        <div className="postInfo">
            <div className="postCat">
               <span className="postCat">Technical Skills</span>
        </div>
        <span className="postTitle">SKILLS</span>
        <hr/>

         </div>
         <p className="postDescr">- HTML Standards, Basics, Elements, Attributes, HTML5 <br></br>
          - CSS3, Flexbox Responsive Design<br></br>
         - JavaScript Expressions and Operators, Variables and Types Functions,
           Scope, Events, DOM, JSON<br></br>
           By understanding what businesses are looking for in a tech solution, you can better equip yourself to make an informed decision when it comes to selecting the right IT investment.
           IT technology is constantly evolving, and as such, businesses are always on the lookout for the latest and greatest tools to help them run their operations more efficiently.
    
        
        </p>
       
    </div>
  )
}
