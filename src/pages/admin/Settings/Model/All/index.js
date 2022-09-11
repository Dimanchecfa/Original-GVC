import React from "react";
import { HTTP_CLIENT } from "../../../../../api/client";
import { EditIcon } from "../../../../../components/icones";
import PageHeader from "../../../../../components/pageheader/index";
import { useNavigate } from "react-router-dom";


const Allmodele = () => {
  const navigate = useNavigate();
  const [modele, setmodele] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    (async () => fetchModele())();
  }, []);

  const fetchModele = async () => {
    await HTTP_CLIENT.get("http://localhost:8000/api/model")
      .then((response) => {
        setmodele(response.data?.data);
        console.log(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <PageHeader title="modele" route="/add_modele" />
      <div className="row">
        <div class="col-7 offset-2 col-xxl-56 d-flex">
          <div class="card flex-fill">
            <div class=" card-header d-flex">
              <h5 class=" col-md-2 card-title">Listes des modeles</h5>
            </div>
            <table class="table table-hover my-0">
              <thead>
                <tr>
                  <th class="text-center">Nom </th>
                    <th class="text-center">Nom de la Marque</th>
                  <th class="text-center">Action </th>
                </tr>
              </thead>
              <tbody>
                {modele.map((modele, index) => (
                  <tr key={index}>
                    <td class="text-center">{modele?.nom}</td>
                    <td class="text-center">{modele?.marque_nom}</td>
                    <td class="d-none d-md-table-cell text-center">
                      <button
                        class="btn btn-primary btn-sm"
                        onClick={() => {
                          navigate("/edit_modele" , { state:  modele  });
                        }}
                      >
                        {" "}
                        <EditIcon /> Modifier
                      </button>
                    </td>
                  </tr>
                ))}
                {isLoading ? (
                  <tr>
                    <td colSpan="6" className="text-center">
                      ...Veuillez patienter
                    </td>
                  </tr>
                ) : null}
                {!isLoading && modele.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="text-center">
                      Aucune modele
                    </td>
                  </tr>
                ) : null}
              </tbody>
            </table>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Allmodele;
