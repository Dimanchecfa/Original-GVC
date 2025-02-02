import React from 'react'
import { HTTP_CLIENT } from '../../../../../api/client';
import { EditIcon } from '../../../../../components/icones';
import PageHeader from '../../../../../components/pageheader/index';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { openNotificationWithIcon } from '../../../../../components/alert';
import { Pagination, Spin } from 'antd';

const AllCommerciale = () => {
    const navigate = useNavigate();
    const [commerciale, setCommerciale] = React.useState([]);
   const [isLoading, setIsLoading] = React.useState(true);
   const [current, setCurrent] = React.useState(1);
   const [total, setTotal] = React.useState(0);

    React.useEffect(() => {
        (async () => fetchCommerciale(current))();
    }, [current]);

    const fetchCommerciale = async (page) => {
        await HTTP_CLIENT.get(`/commerciale/page/${page}`)
            .then((response) => {
                const data = response?.data?.data;
				setCommerciale(data?.data);
				setCurrent(data?.current_page);
				setTotal(data?.total);
                setTimeout(() => {
					setIsLoading(false);
				}
				, 500);
            })
            .catch((error) => {
                console.log(error);
				setTimeout(() => {
					setIsLoading(false);
				}
				, 500);
				openNotificationWithIcon('error', 'Erreur', 'Erreur de connexion au serveur Veuillez mettre a jour la page');
            });
    }



	
	
	
	



    return (
        <>
            <PageHeader title='Commerciale' route="/add_commerciale" />
            <div class="col-10 offset-2 col-xxl-9 d-flex">
				<div class="card flex-fill">
					<div class=" card-header d-flex">
                        
                            <h5 class=" col-md-2 card-title">Listes des commerciales</h5>
                           
                            

                    
					</div>
					<table class="table table-hover my-0">
						<thead>
							<tr>
								<th class="text-center">Nom </th>
								<th class="text-center">Numero</th>
								<th class="text-center">Pseudo</th>
								<th class="text-center">Action</th>

								
							</tr>
						</thead>
						<tbody>
							{
								commerciale.map((commerciale , index) => (
									<tr key={index}>
								<td class="text-center">{ commerciale?.nom}</td>
								<td class="d-none d-md-table-cell text-center">{ commerciale?.numero}</td>
								<td class="d-none d-md-table-cell text-center "> {  commerciale?.pseudo}</td>
								<td class="d-none d-md-table-cell text-center">
								
								<button class="btn btn-primary btn-sm"
								onClick={
									() => {
										navigate('/edit_commerciale' , {state : commerciale});
								}
								}
								> <EditIcon/>{" "}Modifier</button>{" "}
								<button class="btn btn-danger btn-sm"
								onClick={
									() => {	
										Swal.fire({
											title: 'Etes vous sur ?',
											text: "Vous ne pourrez pas revenir en arrière !",
											icon: 'warning',
											showCancelButton: true,
											confirmButtonColor: '#3085d6',
											cancelButtonColor: '#d33',
											confirmButtonText: 'Oui, supprimer !'
										  }).then((result) => {
											if (result.isConfirmed) {
												HTTP_CLIENT.delete(`http://localhost:8000/api/commerciale/${commerciale.id}`)
												.then((response) => {
													console.log(response.data);
													fetchCommerciale();
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
							
							</tr>))
							}
							{ 
							isLoading ? (
								<tr>
									<td colSpan="6" className="text-center">
										<Spin />
									</td>
								</tr>
							): null
							}
							{
								!isLoading && commerciale.length === 0 ? (
									<tr>
										<td colSpan="6" className="text-center">
											Aucune commerciale
										</td>
									</tr>
								): null
							}
						
							
							
						</tbody>
							<tr>
								<td colSpan="6" className="text-center">
								<Pagination current={current} total={total} onChange={(page) => setCurrent(page)} />
								</td>
							</tr>
						
							
									
								
						
					</table>
				</div>
			</div>
            
        </>
    )
}

export default AllCommerciale;
