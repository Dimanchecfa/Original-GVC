import { Outlet } from "react-router-dom";
import AuthGuard from "../../router/components/AuthGuard";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";


const AdminLayout = () => {
    return (
        <>
        <div className="App">
        <div class="wrapper">
          <AuthGuard>
            <Sidebar />
          </AuthGuard>
          <div class="main">
            <Navbar />
            <main class="content">
              <div class="container-fluid p-0">
               <Outlet />
              </div>
            </main>
          </div>
        </div>
      </div>



        </>
    );
}

export default AdminLayout;