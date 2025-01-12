import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
//import FirebaseProvider from "../FirebaseProvider/FirebaseProvider";
const MainLayout = () => {
    return (
        <div className=" ">
            <div className="h-20 ">
                <Nav></Nav>
            </div>

            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;