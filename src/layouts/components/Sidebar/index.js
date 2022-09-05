import { DashboardIcon, HistoryIcon, StockIcon, VenteIcon } from "../../../components/icones";

const Sidebar = () => {
    


    return ( 
        <>
    <nav class="sidebar">
          <div class="sidebar-content js-simplebar">
            <a class="sidebar-brand" href="index.html">
              <span class="align-middle ">AdminKit</span>
            </a>

            <ul class="sidebar-nav">
              

              <li class="sidebar-item active">
                <a class="sidebar-link" href="index.html">
                  <DashboardIcon />{" "}
                  <span class="align-middle">Dashboard</span>
                </a>
              </li>
              <li class="sidebar-item ">
                <a class="sidebar-link" href="index.html">
                  <StockIcon />{" "}
                  <span class="align-middl">Stock</span>
                </a>
              </li>
              <li class="sidebar-item ">
                <a class="sidebar-link" href="index.html">
                  <VenteIcon />{" "}
                  <span class="align-middl">Vente</span>
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