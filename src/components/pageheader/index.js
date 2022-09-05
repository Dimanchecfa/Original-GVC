import { useNavigate } from "react-router-dom";

const PageHeader = ({ title , route}) => {
    const navigate = useNavigate();
    return (
        <>
            <div class="row row-cols-3 d-flex">
                <div class="col-md-1 offset-md-1">
                    <button class="btn btn-danger btn-lg" 
                    onClick={()=> {
                        navigate(-1);
                    }
                }
                    >Retour</button>
                </div>
                <div class="col-md-3">
                <div class="page-header">
                    <h1 class="page-title">{title}</h1>
                </div>
                
            </div><div class="col-md-1 offset-md-6 mb-2">
                    <button class="btn btn-primary btn-lg" 
                    onClick={()=> {
                        navigate(route);
                    }
                }
                    >Ajouter</button>

                </div>
            </div>
        </>
    );
};
export default PageHeader;