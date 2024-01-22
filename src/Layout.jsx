import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom";

const Layout = () => {
  return (
    // *! creating the layout for routing with the header and footer fixed permanently on the screen
    <div className="flex flex-col h-screen">
        <Header />
        <div className="flex flex-grow w-screen h-full">
          <aside className="w-[17vw]">
            <nav className="w-full h-full">
              <ul className="grid w-full h-full pt-2 text-center text-white bg-gray-800 grid-row-3">
                <Link to={"/"}>
                  <li> <b>HOME</b> <FaArrowRight className="inline w-3 h-3" /></li>
                </Link> 
                <Link to={"/dashboard"}>
                  <li> <b>DASHBOARD</b> <FaArrowRight className="inline w-3 h-3" /></li>
                </Link>
                <Link to={"/readme"}>
                  <li> <b>README</b> <FaArrowRight className="inline w-3 h-3" /></li>
                </Link>
              </ul>
            </nav>
          </aside>
          <div className="flex-grow">
            <Outlet />
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default Layout