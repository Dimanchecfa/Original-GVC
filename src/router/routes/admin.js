import { Route, Routes } from "react-router-dom";
import AdminLayout from "../../layouts/admin";
import Dashboard from "../../pages/admin/Dashboard";
import AddStock from "../../pages/admin/Stock/Add";
import AllStock from "../../pages/admin/Stock/All";
import { ShowMotors, ShowStock } from "../../pages/admin/Stock/Show";




const AdminRoutes = () => {
    return ( 
        <Routes>
            <Route element={<AdminLayout />}>
               <Route index element={<Dashboard />} />
               <Route path="/stock_add" element={<AddStock />} />
               <Route path="/stock_all" element={<AllStock />} />
               <Route path="/stock_show" element={<ShowStock />} />
               <Route path="/motors_show" element={<ShowMotors />} />
               


            </Route>
        </Routes>
     );
}
 
export default AdminRoutes;