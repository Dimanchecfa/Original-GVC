import { Route, Routes } from "react-router-dom";
import BlankLayout from "../../layouts/blank";
import Login from "../../pages/blank/login";

const BlankRoutes = () => {
    return ( 
        <>
            <Routes>
                <Route element={<BlankLayout />}>
                    <Route path="/" element={<Login />} />
                    <Route path="/register" element={<div>Register</div>} />
                </Route>
            </Routes>
        </>
     );
}
 
export default BlankRoutes;