import { Route, Routes } from "react-router-dom";
import AdminLayout from "../../layouts/admin";
import Dashboard from "../../pages/admin/Dashboard";
import AddSale from "../../pages/admin/Sale/Add";
import AllSale from "../../pages/admin/Sale/All";
import EditSale from "../../pages/admin/Sale/Edit ";
import ShowSale from "../../pages/admin/Sale/Show";
import AddStock from "../../pages/admin/Stock/Add";
import AllStock from "../../pages/admin/Stock/All";
import { ShowMotors, ShowStock } from "../../pages/admin/Stock/Show";




const AdminRoutes = () => {
    return ( 
        <Routes>
            <Route element={<AdminLayout />}>
               <Route index element={<Dashboard />} />
               <Route path="/add_stock" element={<AddStock />} />
               <Route path="/all_stock" element={<AllStock />} />
               <Route path="/show_stock" element={<ShowStock />} />
               <Route path="/show_motors" element={<ShowMotors />} />
               <Route path="/add_sale" element={<AddSale />} />
                <Route path="/all_sale" element={<AllSale />} />
                <Route path="/show_sale" element={<ShowSale />} />
                <Route path="/edit_sale" element={<EditSale />} />

               


            </Route>
        </Routes>
     );
}
 
export default AdminRoutes;