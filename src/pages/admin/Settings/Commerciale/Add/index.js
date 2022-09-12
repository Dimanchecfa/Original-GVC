import React from "react";
import { HTTP_CLIENT } from "../../../../../api/client";
import { BackButton } from "../../../../../components/button";
import PageHeader from "../../../../../components/pageheader";
import { useNavigate } from 'react-router-dom';
import { openNotificationWithIcon } from "../../../../../components/alert";

const AddCommerciale = () => {
  const navigate = useNavigate();
    const [pseudo , setPseudo] = React.useState("");
    const [nom, setNom] = React.useState("");
    const [numero, setNumero] = React.useState("");
 const [logo , setLogo] = React.useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            pseudo,
            nom,
            numero,
            logo
        };
        console.log(data);
        HTTP_CLIENT.post("/commerciale", data , )
            .then((res) => {
              navigate("/all_commerciale");
              openNotificationWithIcon("success", "Ajout effectué avec succès");
                console.log(res);
            }
            )
            .catch((err) => {
                console.log(err);
            }
            );

    };

  return (
    <>
      <div className="row">
        <BackButton />

        <div className="col-12">
          {" "}
          <div class="col-lg-4 offset-lg-3">
            <form onSubmit={handleSubmit} >
            <div class="card">
              <div class="card-header">
                <h5 class="card-title mb-0">Ajout d un Commerciale</h5>
              </div>
              <div class="card-body">
                <label class="form-label">Pseudo</label>
                <input type="text" class="form-control" placeholder="Pseudo"
                value={pseudo}
                onChange={(e) => setPseudo(e.target.value)}
                />
              </div>
              <div class="card-body">
                <label class="form-label">Nom</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Nom du commerciale"
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                />
              </div>
              <div class="card-body">
                <label class="form-label">Numero</label>
                <input type="text" class="form-control" placeholder="Numero" 
                value={numero}
                onChange={(e) => setNumero(e.target.value)}
                />
              </div>
              <div class="card-body">
                <label class="form-label">Logo</label>
                <input type="text" class="form-control" placeholder="Logo" 
                    value={logo}
                    onChange={(e) => setLogo(e.target.value)}
                />
              </div>
              <div class="card-body">
                <button type="submit" class="btn btn-primary"
              
                >
                  Ajouter
                </button>
              </div>
            </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCommerciale;
