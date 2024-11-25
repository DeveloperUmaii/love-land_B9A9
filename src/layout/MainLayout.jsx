import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
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