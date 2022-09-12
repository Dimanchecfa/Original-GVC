import React from "react";
import { HTTP_CLIENT } from "../../../../../api/client";
import { EditIcon } from "../../../../../components/icones";
import PageHeader from "../../../../../components/pageheader/index";
import { useNavigate } from "react-router-dom";
import { Pagination } from 'antd';
import Swal from "sweetalert2";


const Allmodele = () => {
  const navigate = useNavigate();
  const [modele, setmodele] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [current, setCurrent] = React.useState(0);
  const [total, setTotal] = React.useState(1);

  React.useEffect(() => {
    (async () => fetchModele(current))();
  }, [current]);

  const fetchModele = async (page) => {
    await HTTP_CLIENT.get(`/modele/page/${page}`)
      .then((response) => {
        const data = response?.data?.data;
        setmodele(data?.data);
        setCurrent(data?.current_page);
        setTotal(data?.total);
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
                    <th class="text-center">Nom de la modele</th>
                  <th class="text-center">Action </th>
                </tr>
              </thead>
              <tbody>
                {modele.map((modele, index) => (
                  <tr key={index}>
                    <td class="text-center">{modele?.nom}</td>
                    <td class="text-center">{modele?.modele_nom}</td>
                    <td class="d-none d-md-table-cell text-center">
                      <button
                        class="btn btn-primary btn-sm"
                        onClick={() => {
                          navigate("/edit_modele" , { state:  modele  });
                        }}
                      >
                        {" "}
                        <EditIcon /> Modifier
                      </button>{" "}
                      <button class="btn btn-danger btn-sm"
								onClick={
									() => {	
                    console.log(modele.id);
										Swal.fire({
											title: 'Etes vous sur  de supprimer la modele ' + modele.nom + ' ?',
											text: "Vous ne pourrez pas revenir en arrière !",
											icon: 'warning',
											showCancelButton: true,
											confirmButtonColor: '#3085d6',
											cancelButtonColor: '#d33',
											confirmButtonText: 'Oui, supprimer !'
										  }).then((result) => {
											if (result.isConfirmed) {
												HTTP_CLIENT.delete(`http://localhost:8000/api/model/${modele.id}`)
												.then((response) => {
													console.log(response.data);
                          fetchModele(current);
													
												})
												.catch((error) => {
													console.log(error);
												});
												
												
											  Swal.fire(
												'Supprimé!',
												'Votre fichier a été supprimé.',
												'success'
											  )
											}
										  })
										}
								}
								> <EditIcon/>{" "}Supprimer</button>
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
              <tr class="text-center">
                <td>
                  <Pagination current={current} total={total} onChange={setCurrent} />
                </td>
              </tr>
            </table>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Allmodele;
