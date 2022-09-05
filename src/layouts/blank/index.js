import { Outlet } from "react-router-dom";

const BlankLayout = () => {
    return ( 
        <>
        <div className="blank-img">
            <Outlet />
        </div>
        </>
     );
}
 
export default BlankLayout;