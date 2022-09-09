import { EditIcon, EyeIcon } from "../../../../components/icones";
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { alertClosed, alertPending } from "../../../../components/notification";
import { HTTP_CLIENT } from "../../../../api/client";

export const ShowStock = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const [moto , setMoto] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const {state} = location;

	useEffect (() => {
		const {state} = location;
		console.log(state?.numero);
		(async () => fetchMoto(state?.numero))();
	},[]);

	const fetchMoto = async (numero) => {
		alertPending();
		await HTTP_CLIENT.get(`http://localhost:8000/api/moto/stock/${numero}`)
			.then((response) => {
				if(response?.data?.data.length > 0){
					const data = response?.data?.data;
					setMoto(data);

				setIsLoading(false);

				setTimeout(() => {
					alertClosed();
				}
				, 500);
			}else{
				alertClosed();
				
			}
			})
			.catch((error) => {
				console.log(error);
			});
	}



    return ( 
        <>
			<div className="row">
				<div class="col-4 offset-1 mb-5">
					<button class="btn btn-danger">Retour</button>
				</div>
			</div>
                    <div class="col-11 offset-1 col-xxl-10 d-flex ">
							

							<div class="card flex-fill">
							

								<div class="card-header">

									<h4 class="card-title mb-0">Detail du stock N 1010MMM</h4>
								</div>
								<table class="table table-hover my-0">
						<thead>
							<tr>
								<th class="text-center">Numero de serie</th>
								
								<th class="text-center">Marque</th>
								<th class="text-center">Model</th>
								<th class="text-center">Couleur</th>
								<th class="text-center">Statut</th>
								<th class="text-center">Action</th>

								
							</tr>
						</thead>
						<tbody>
							{
								moto.map((moto , index) => (
									<tr key={index}>
								<td class="text-center">{ moto?.numero_serie}</td>
								<td class="d-none d-md-table-cell text-center">{ moto?.marque}</td>
								<td class="d-none d-md-table-cell text-center "> {  moto?.modele}</td>
								<td class="d-none d-md-table-cell text-center">{ moto?.couleur}</td>
								<td class="d-none d-md-table-cell text-center">{ moto?.statut}</td>
								<td class="d-none d-md-table-cell text-center">
								<button class="btn btn-secondary btn-sm"
									onClick={
										() => {
											navigate('/show_motors'  , {state : moto})
											
									}
									}
								> <EyeIcon/>{" "}Details</button>{" "}
								<button class="btn btn-primary btn-sm"
								onClick={
									() => {
										navigate('/edit_sale')
								}
								}
								> <EditIcon/>{" "}Modifier</button>
								</td>
							
							</tr>))
							}
							{ 
							isLoading ? (
								<tr>
									<td colSpan="6" className="text-center">
										...Veuillez patienter
									</td>
								</tr>
							): null
							}
							{
								!isLoading && moto.length === 0 ? (
									<tr>
										<td colSpan="6" className="text-center">
											Aucune moto pour le moment
										</td>
									</tr>
								): null
							}
						
							
							
						</tbody>
						
							
									
								
						
					</table>
							</div>
						</div>
        </>
     );
}
 
