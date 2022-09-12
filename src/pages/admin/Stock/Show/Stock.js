import { EditIcon, EyeIcon } from "../../../../components/icones";
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { alertClosed, alertPending } from "../../../../components/notification";
import { HTTP_CLIENT } from "../../../../api/client";
import { BackButton } from '../../../../components/button/index';
import { Empty, Pagination, Spin } from "antd";

export const ShowStock = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const [moto , setMoto] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const {state} = location;
	const [current, setCurrent] = useState(0);
	const [total, setTotal] = useState(1);

	useEffect (() => {
		const {state} = location;
		
		(async () => fetchMoto(state?.numero , current))();
	},[current]);
	const onChange = (page) => {
		console.log(page);
		setCurrent(page);
	  };

	const fetchMoto = async (numero , page) => {
		alertPending();
		await HTTP_CLIENT.get(`http://localhost:8000/api/moto/page/${page}/${numero}`)
			.then((response) => {
				
					const data = response?.data?.data;
					setMoto(data?.data);
					setCurrent(data?.current_page);
					setTotal(data?.total);
					console.log(data);

				setIsLoading(false);

				setTimeout(() => {
					alertClosed();
				}
				, 500);
			
			})
			.catch((error) => {
				console.log(error);
				setTimeout(() => {
					alertClosed();
					setIsLoading(false);
				}
				, 1000);
			});
	}



    return ( 
        <>
			<div className="row">
				<BackButton />
			</div>
                    <div class="col-11 offset-1 col-xxl-10 d-flex ">
							

							<div class="card flex-fill">
							

								<div class="card-header">

									<h4 class="card-title mb-0">Detail du stock N { state?.numero}</h4>
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
								<td class="d-none d-md-table-cell text-center"><span class="badge bg-success">{ moto?.statut}</span></td>
								<td class="d-none d-md-table-cell text-center">
								{
									moto?.statut === "vendue" ? (
										<button class="btn btn-primary btn-sm"
									onClick={
										() => {
											navigate('/show_motors'  , {state : moto})
											
									}
									}
								> <EyeIcon/>{" "}Details</button>
									):null
								}
								{" "}
								<button class={
									moto?.statut === "vendue" ? "btn btn-secondary btn-sm" : "offset-3 btn btn-secondary btn-sm"
								}
								onClick={
									() => {
										navigate('/edit_moto'  , {state : moto})
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
										<Spin />
									</td>
								</tr>
							): null
							}
							{
								!isLoading && moto.length === 0 ? (
									<tr>
										<td colSpan="6" className="text-center">
											<Empty />
										</td>
									</tr>
								): null
							}
						
							
							
						</tbody>
						<tr class="offset-2 text-center">
						<td colSpan="6">
						{
							moto.length > 0 && (
								<Pagination current={current} onChange={onChange} total={
									total } />
								
							)
						}
								
						
						
						
						</td>
						</tr>
						
							
									
								
						
					</table>
							</div>
						</div>
        </>
     );
}
 
