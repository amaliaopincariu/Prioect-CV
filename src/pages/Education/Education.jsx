import "./Education.css"
export default function education() {
  return (
    <div className="education">
       <div id="demo" class="carousel slide" data-ride="carousel">
  <ul className="carousel-indicators">
    <li data-target="#demo" data-slide-to="0" class="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
   
  </ul>
  <div className="carousel-inner">
    <div class="carousel-item active">
      <img src="logo_color_bg_transparent.png" alt="Scoala informala IT" />
    </div>
  <div className="carousel-item">
      <img src="OIP.jpeg" alt="Universitatea Tehnica" />
    </div>
  </div>
  <a className="carousel-control-prev" href="#demo" data-slide="prev">
    <span className="carousel-control-prev-icon"></span>
  </a>
  <a className="carousel-control-next" href="#demo" data-slide="next">
    <span className="carousel-control-next-icon"></span>
  </a>
</div>
   <h1 className="educationkTitle"> Education</h1>
   <p className="educationDesc">Informal School of IT - Cluj-Napoca  Web Development
   </p>
   <p className="educationDesc">  Universitatea „Lucian Blaga” din Sibiu 
    Industrial Engineering · (septembrie 2003 - septembrie
    2008)
   </p>

</div>
  )
}
