import { Avatar } from "antd";
import { useNavigate } from "react-router-dom";
import { AvatarIcon } from "../../../components/icones";

const Navbar = () => {
  const navigate = useNavigate();
    return (
        <>
            <nav class="navbar navbar-expand navbar-dark ">
            <div className="sidebar-toggle js-sidebar-toggle">
              
            </div>

            <div class="navbar-collapse collapse">
              <ul class="navbar-nav navbar-align">
                <li class="nav-item dropdown">
                  <li
                    class="nav-icon dropdown-toggle"
                    href="#"
                    id="alertsDropdown"
                    data-bs-toggle="dropdown"
                  >
                    <Avatar size={64} icon={<AvatarIcon />} />
                  </li>
                  <div
                    class="dropdown-menu dropdown-menu-lg dropdown-menu-end py-0"
                    aria-labelledby="alertsDropdown"
                  >
                    <div class="dropdown-menu-header">
                      <button class="btn btn-danger"
                        onClick={() => {
                          navigate("/");
                        }}
                      >
                        Se déconnecter
                      </button>
                    </div>
                    <div class="list-group">
                      
                     
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </>
     );
}
 
export default Navbar;