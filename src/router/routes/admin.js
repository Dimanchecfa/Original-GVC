import { Navigate, Route, Routes } from "react-router-dom";
import AdminLayout from "../../layouts/admin";
import Dashboard from "../../pages/admin/Dashboard";
import AllHistory from "../../pages/admin/History/All";
import AddSale from "../../pages/admin/Sale/Add";
import AllSale from "../../pages/admin/Sale/All";
import EditSale from "../../pages/admin/Sale/Edit ";
import ShowSale from "../../pages/admin/Sale/Show";
import AddStock from "../../pages/admin/Stock/Add";
import AllStock from "../../pages/admin/Stock/All";
import { ShowMotors, ShowStock } from "../../pages/admin/Stock/Show";
import Settings from "../../pages/admin/Settings/All";
import AllCommerciale from "../../pages/admin/Settings/Commerciale/All";
import Addcommerciale from "../../pages/admin/Settings/Commerciale/Add";
import Allmarque from "../../pages/admin/Settings/Marque/All";




const AdminRoutes = () => {
    return ( 
        <Routes>
            <Route element={<AdminLayout />}>
               <Route path="/dashboard" element={<Dashboard />} />
               <Route path="/add_stock" element={<AddStock />} />
               <Route path="/all_stock" element={<AllStock />} />
               <Route path="/show_stock" element={<ShowStock />} />
               <Route path="/show_motors" element={<ShowMotors />} />
               <Route path="/add_sale" element={<AddSale />} />
                <Route path="/all_sale" element={<AllSale />} />
                <Route path="/show_sale" element={<ShowSale />} />
                <Route path="/edit_sale" element={<EditSale />} />
                <Route path="/all_history" element={<AllHistory />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/all_commerciale" element={< AllCommerciale />} />
                <Route path="/add_commerciale" element={< Addcommerciale />} />
                <Route path="/all_marque" element={< Allmarque />} />
                <Route path="*" element={<Navigate to="/dashboard" />} />




               


            </Route>
        </Routes>
     );
}
 
export default AdminRoutes;