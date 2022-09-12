import React from "react";
import { HTTP_CLIENT } from "../../../../../api/client";
import { EditIcon } from "../../../../../components/icones";
import PageHeader from "../../../../../components/pageheader/index";
import { useNavigate } from "react-router-dom";
import AddMarque from "../Add/index";
import { Pagination } from 'antd';
import Swal from "sweetalert2";

const Allmarque = () => {
  const navigate = useNavigate();
  const [marque, setMarque] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [current, setCurrent] = React.useState(0);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    (async () => fetchMarque(current))();
  }, [current]);
  const onChange= (page) => {
    console.log(page);
    setCurrent(page);
    console.log(current);
  }

  const fetchMarque = async (page) => {
    await HTTP_CLIENT.get(`/marque/page/${page}`)
      .then((response) => {
        const data = response?.data?.data;
        setMarque(data?.data);
        setCurrent(data?.current_page);
        setTotal(data?.total);
        console.log(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <PageHeader title="Marque" route="/add_marque" />
      <div className="row">
        <div class="col-5 offset-3 col-xxl-5 d-flex">
          <div class="card flex-fill">
            <div class=" card-header d-flex">
              <h5 class=" col-md-2 card-title">Listes des marques</h5>
            </div>
            <table class="table table-hover my-0">
              <thead>
                <tr>
                  <th class="text-center">Nom </th>
                  <th class="text-center">Action </th>
                </tr>
              </thead>
              <tbody>
                {marque.map((marque, index) => (
                  <tr key={index}>
                    <td class="text-center">{marque?.nom}</td>
                    <td class="d-none d-md-table-cell text-center">
                      <button
                        class="btn btn-primary btn-sm"
                        onClick={() => {
                          navigate("/edit_marque" , { state:  marque  });
                        }}
                      >
                        {" "}
                        <EditIcon /> Modifier
                      </button>{" "}
                      <button class="btn btn-danger btn-sm"
								onClick={
									() => {	
                    console.log(marque.id);
										Swal.fire({
											title: 'Etes vous sur  de supprimer la marque ' + marque.nom + ' ?',
											text: "Vous ne pourrez pas revenir en arrière !",
											icon: 'warning',
											showCancelButton: true,
											confirmButtonColor: '#3085d6',
											cancelButtonColor: '#d33',
											confirmButtonText: 'Oui, supprimer !'
										  }).then((result) => {
											if (result.isConfirmed) {
												HTTP_CLIENT.delete(`http://localhost:8000/api/marque/${marque.id}`)
												.then((response) => {
													console.log(response.data);
                          fetchMarque(current);
													
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
                {!isLoading && marque.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="text-center">
                      Aucune marque
                    </td>
                  </tr>
                ) : null}
              </tbody>
                    <tr className="text-center">
                      <td colSpan="6">
                        <Pagination current={current} total={total} onChange={onChange} />
                      </td>
                    </tr>


            </table>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Allmarque;
