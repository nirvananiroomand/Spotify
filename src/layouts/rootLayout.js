import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import Header from "./header";
import "./rootLayout.css";

const RootLayout = () => {
    return ( 
        <div className="App d-flex flex-row">
          <Sidebar/>
          <div className="custom-width">
            <Header/>
            <Outlet/>
          </div>
        </div>
     );
}
 
export default RootLayout;