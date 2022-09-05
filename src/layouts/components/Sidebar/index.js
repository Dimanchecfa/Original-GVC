import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { DashboardIcon, HistoryIcon, StockIcon, VenteIcon } from "../../../components/icones";

const Sidebar = () => {
    
const navigate = useNavigate();

    return ( 
        <>
    <nav class="sidebar">
          <div class="sidebar-content js-simplebar">
            <a class="sidebar-brand" href="index.html">
              <span class="align-middle ">AdminKit</span>
            </a>

            <ul class="sidebar-nav">
              

              <li class="sidebar-item active"  
                onClick={
                  () => {
                    navigate("/")
                  }
                }
                
              >
                <a className="sidebar-link" >
                 <DashboardIcon />{" "} 
                  <span class="align-middle">
                    Dashboard
                   
                    </span>
                </a>
              </li>
              <li class="sidebar-item " onClick={
                  () => {
                    navigate("/all_stock")
                  }
                }>
                <a class="sidebar-link" >
                  <StockIcon />{" "}
                  <span class="align-middle">Stock</span>
                </a>
              </li>
              <li class="sidebar-item "  onClick={
                  () => {
                    navigate("/all_sale")
                  }
                }>
                <a class="sidebar-link">
                  <VenteIcon />{" "}
                  <span class="align-middle">Vente</span>
                </a>
              </li>
              
              <li class="sidebar-item ">
                <a class="sidebar-link" href="index.html">
                  <HistoryIcon />{" "}
                  <span class="align-middle">Inventaires</span>
                </a>
              </li>


              
            </ul>

            
          </div>
        </nav>
        </>
     );
}
 
export default Sidebar;