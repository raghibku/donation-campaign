import { Outlet, useLocation } from "react-router-dom"
import NavBar from "./NavBar"
import Statistics from "./Statistics";
import Donation from "./Donation";
import FrontPage from "./FrontPage";


const Home = () => {
    const location = useLocation();
    console.log(location.pathname);
  return (
    <div>
        <NavBar/>
        {
            location.pathname=='/'?<FrontPage/>:<Outlet/>
        }
    </div>
  )
}

export default Home