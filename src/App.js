import { Route, Routes } from "react-router-dom";
import AuthGuard from "./router/components/AuthGuard";
import AdminRoutes from "./router/routes/admin";
import BlankRoutes from "./router/routes/blank";
import Login from './pages/blank/login/index';

function App() {
  return (
   <>
     <Routes>
        <Route path="/*" element={
        <AuthGuard>
          <AdminRoutes />
        </AuthGuard>
        } />
          <Route index element={<Login />} />
          <Route path="/register" element={<div>Register</div>} />
     </Routes>
    </>
  );
}

export default App;

