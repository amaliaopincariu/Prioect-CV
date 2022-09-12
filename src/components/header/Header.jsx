import "./Header.css"

export default function Header() {
  return (
    <div className="header">
         <div className="headerTitle">
            <span className="headerTitleText"> Curriculum Vitae</span>
         </div>
         <img 
             className="headerImg"
             src="https://i.pinimg.com/originals/8f/61/f5/8f61f5c09b13f409143158de7396baab.jpg"
             alt="my office"
          />
     </div>
  )
}
