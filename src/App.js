import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar"
import Single from "./pages/single/Single";
import Work from "./pages/work/Work";
import Settings from "./pages/settings/Settings";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Education from "./pages/Education/Education";
import Toggle from "./components/toggle/Toggle";


function App() {
   
   return (
       <div>
       <TopBar/>
       <Toggle/>
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/work" element={<Work />} />
           <Route path="/single" element={<Single/>} />
           <Route path="/education" element={<Education/>} />
           <Route path="/settings" element={<Settings />} />
        </Routes>
        
      </div>     
   )
 }
 
 
 export default App
 
