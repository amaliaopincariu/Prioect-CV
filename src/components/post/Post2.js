import "./Post.css"

export default function Post() {
  return (
    <div className="post">
        
        <img className="postImg"
             src="R.jpeg" alt="skills"/>
        <div className="postInfo">
            <div className="postCat">
               <span className="postCat">Web Development</span>
               
        </div>
        <span className="postTitle">WORK</span>
        <hr/>

         </div>
         <p className="postDescr">- Web Introduction TCP/IP Protocol, DNS Protocol, HTTP Protocol
        - HTML Standards, Basics, Elements, Attributes, HTML5
         - CSS3, Flexbox Responsive Design
         - JavaScript Expressions and Operators, Variables and Types Functions,
        Scope, Events, DOM, JSON
        - JavaScript Advanced Functions Scope, Closure, Hoisting Object Methods,
        Prototypes, ECMAScript 6,
        JavaScript BOM, AJAX
        - Introduction to React JS (architecture, virtual DOM), JSX Components
       (props, state, lifecycle), Forms (refs, routing), Events (DOM events, component
        events)
          
           
        
        </p>
    </div>
  )
}
