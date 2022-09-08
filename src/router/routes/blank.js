import { Route, Routes } from "react-router-dom";
import BlankLayout from "../../layouts/blank";
import Login from "../../pages/blank/login";

const BlankRoutes = () => {
    return ( 
        <>
            <Routes>
                <Route element={<BlankLayout />}>
                   
                </Route>
            </Routes>
        </>
     );
}
 
export default BlankRoutes;