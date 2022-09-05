import { useNavigate } from "react-router-dom";

export const BackButton = () => {
    const navigate = useNavigate();
    return (
        <div className="row">
        <div class="col-4 offset-1 mb-5">
            <button class="btn btn-danger" onClick={()=> {
                navigate(-1);
            }}>Retour</button>
        </div>
        </div>
    );
    };