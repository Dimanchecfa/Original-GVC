import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { DashboardIcon, HistoryIcon, SettingIcon, StockIcon, VenteIcon } from "../../../components/icones";

const Sidebar = () => {
    
const navigate = useNavigate();
const item = document.querySelectorAll('.sidebar-item');

//ajouter la class active sur le lien cliqué et supprimer la class active sur les autres liens
item.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        item.forEach((i) => i.classList.remove('active'));
        link.classList.add('active');
        navigate(link.getAttribute('href'));
    });
});






    return ( 
        <>
    <nav class="sidebar">
          <div class="sidebar-content js-simplebar">
            <a class="sidebar-brand" href="index.html">
              <span class="align-middle ">GVC</span>
            </a>

            <ul class="sidebar-nav">
              

              <li class="sidebar-item"  
                onClick={
                  () => {
                    navigate("/dashboard")
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
              
              <li class="sidebar-item "  onClick={
                  () => {
                    navigate("/all_history")
                  }}>
                <a class="sidebar-link" >
                  <HistoryIcon />{" "}
                  <span class="align-middle">Inventaires</span>
                </a>
              </li>
              <li class="sidebar-item "  onClick={
                  () => {
                    navigate("/settings")
                  }}>
                <a class="sidebar-link" >
                  <SettingIcon/>{" "}
                  <span class="align-middle">Configuration</span>
                </a>
              </li>
              <li class="sidebar-item "  onClick={
                  () => {
                    navigate("/redevability")
                  }}>
                <a class="sidebar-link" >
                  <i class="fas  fa-shop"></i>{" "}
                  {" "}
                  <span class="align-middle">Redevabilites</span>
                </a>
              </li>


              
            </ul>

            
          </div>
        </nav>
        </>
     );
}
 
export default Sidebar;