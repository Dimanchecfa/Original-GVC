import { Route, Routes } from "react-router-dom";
import AdminRoutes from "./router/routes/admin";
import BlankRoutes from "./router/routes/blank";

function App() {
  return (
   <>
     <Routes>
        <Route path="/*" element={<AdminRoutes />} />
         <Route path="/*" element={<BlankRoutes/>}/>
     </Routes>

   
   </>
  );
}

export default App;

