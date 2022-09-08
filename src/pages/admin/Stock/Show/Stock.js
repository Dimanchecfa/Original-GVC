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
		console.log(state?.numero_stock);
		(async () => fetchMoto(state?.numero_stock))();
	},[]);

	const fetchMoto = async (numero_stock) => {
		alertPending();
		await HTTP_CLIENT.get(`http://localhost:8000/api/moto/stock/${numero_stock}`)
			.then((response) => {
				if(response?.data?.data.length > 0){
					setMoto(response?.data);
					console.log(moto);

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
											<th>N serie</th>
											<th class="d-none d-md-table-cell">Marque</th>
											<th class="d-none d-md-table-cell">Model</th>
											<th class="d-none d-md-table-cell">Couleur</th>
											<th class="d-none d-md-table-cell">Statut</th>
											<th class="d-none d-md-table-cell">Action</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>RLCUEMY280652</td>
											<td class="d-none d-md-table-cell">YAMAHA</td>
											<td class="d-none d-md-table-cell">SIRIUS</td>
											
											<td class="d-none d-md-table-cell">NOIR MAT</td>
											<td><span class="badge bg-success">Vendu</span></td>
											<td class="d-none d-md-table-cell">
												<button type="button" class="btn btn-primary"> <EditIcon />Editer</button>{" "}
												<button type="button" class="btn btn-secondary"><EyeIcon/>Detail</button>
											</td>
										</tr>
										<tr>
											<td>RLCUEMY280652</td>
											<td class="d-none d-md-table-cell">YAMAHA</td>
											<td class="d-none d-md-table-cell">SIRIUS</td>
											
											<td class="d-none d-md-table-cell">NOIR MAT</td>
											<td><span class="badge bg-danger">Non Vendu</span></td>
											<td class="d-none d-md-table-cell">
												<button type="button" class="btn btn-primary"> <EditIcon />Editer</button> {" "}
												<button type="button" class="btn btn-secondary"><EyeIcon/>Detail</button>
											</td>
										</tr>
										
									</tbody>
								</table>
							</div>
						</div>
        </>
     );
}
 
