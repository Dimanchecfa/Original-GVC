import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { EditIcon, EyeIcon } from "../../../components/icones";
import  { getAllVente, } from "../../../api/request";
import { Axios } from 'axios';
import { HTTP_CLIENT } from '../../../api/client';
import PaginationPage from "../../../components/paginate";
import { openNotificationWithIcon } from "../../../components/alert";
import { Spin, Pagination, Empty } from 'antd';

const Dashboard = () => {
	const navigate = useNavigate();
	const [moto , setMoto] = useState([]);
	const [price , setPrice] = useState([]);
	const [vente , setVente] = useState([]);
	const [current , setCurrent] = useState(0);
	const [total , setTotal] = useState(0);
	const [isLoading , setIsLoading] = useState(true);
	
//obtenir l ' heure a partir de la date 2002-02-02T00:00:00.000Z
	
	
		



	useEffect(() => {
		(async () => fetchMoto())();
		(async () => fetchPrice())();
		(async () => fetchTodayVente(current))();
		
	
		
		
	}, []);

	const fetchMoto = async () => {
		await HTTP_CLIENT.get("http://localhost:8000/api/dashboard_moto")
		    .then((response) => {
					setMoto(response.data);
					
				})
				.catch((error) => {
					console.log(error);
				});
	}

	const fetchPrice = async () => {
		 await HTTP_CLIENT.get("http://localhost:8000/api/dashboard_price")
				.then((response) => {
					setPrice(response.data);
					
				})
				.catch((error) => {
					console.log(error);
				});
	}
	const fetchTodayVente = async (page) => {
		await HTTP_CLIENT.get(`http://localhost:8000/api/vente/today/${page}`)
				.then((response) => {
					const data = response?.data?.data;
					setVente(data?.data);
					setCurrent(data?.current_page);
					setTotal(data?.total);
					
					
					

					
				
					setIsLoading(false);
				})
				.catch((error) => {
					console.log(error);
				});
	}



	

	


	   


	
	
	
			
		
	

	return (
		<>
			<div className="row">
				<div class="col-sm-4 offset-sm-2">
					<div class="card">
						<div class="card-body">
							<div class="row">
								<div class="col mt-0">
									<h5 class="card-title">Nombres de moto vendues</h5>
								</div>

								<div class="col-auto">
									<div class="stat text-primary">
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-truck align-middle"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
									</div>
								</div>
							</div>
							<h1 class="mt-1 mb-3 text-center">{moto?.data}</h1>
							<div class="mb-0">
								<span class="text-danger"> <i class="mdi mdi-arrow-bottom-right"></i></span>
								<span class="text-muted">
									Aujourd'hui
								</span>
							</div>
						</div>
					</div>

				</div>
				<div class="col-sm-4 offset-sm-1">
					<div class="card">
						<div class="card-body">
							<div class="row">
								<div class="col mt-0">
									<h5 class="card-title">Sommes encaissee</h5>
								</div>

								<div class="col-auto">
									<div class="stat text-primary">
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-truck align-middle"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
									</div>
								</div>
							</div>
							<h1 class="mt-1 mb-3">{ price?.data}</h1>
							<div class="mb-0">
								<span class="text-danger"> <i class="mdi mdi-arrow-bottom-right"></i> </span>
								<span class="text-muted">
									Aujourd'hui
								</span>
							</div>
						</div>
					</div>

				</div>
			</div>
			<div class="col-10 offset-2 col-xxl-8 d-flex">
				<div class="card flex-fill">
					<div class="card-header">

						<h5 class="card-title mb-0">Latest Projects</h5>
					</div>
					<table class="table table-hover my-0">
						<thead>
							<tr>
								<th class="text-center">Nom du client</th>
								
								<th class="text-center">Marque</th>
								<th class="text-center">Nom du commerciale</th>
								<th class="text-center">Montant Paye</th>
								<th class="text-center">Action</th>

								
							</tr>
						</thead>
						<tbody>
							{
								vente.map((vente , index) => (
									<tr key={index}>
								<td class="text-center">{ vente?.nom_client}</td>
								<td class="d-none d-md-table-cell text-center">{ vente?.marque}</td>
								<td class="d-none d-md-table-cell text-center "> {  vente?.pseudo_commerciale}</td>
								<td class="d-none d-md-table-cell text-center">{ vente?.montant_verse}{" "} FCFA</td>
								<td class="d-none d-md-table-cell text-center">
								<button class="btn btn-secondary btn-sm"
									onClick={
										() => {
											navigate('/show_sale'  , {state : vente})
											
									}
									}
								> <EyeIcon/>{" "}Details</button>{" "}
							
								</td>
							
							</tr>))
							}
							{ 
							isLoading ? (
								<tr>
									<td colSpan="6" className="text-center">
										<Spin size="large" />
									</td>
								</tr>
							): null
							}
							{
								!isLoading && vente.length === 0 ? (
									<tr>
										<td colSpan="6" className="text-center">
											<Empty description="Aucune vente pour le moment" />
										</td>
									</tr>
								): null
							}
						
							
							
						</tbody>
								{
									vente.length > 0 ? (

						<tr>
						<td colSpan="6" className="text-center">
						<Pagination current={current} total={total} onChange={(page) => setCurrent(page)} />
						</td>
					</tr>
									): null
								}
							
									
								
						
					</table>
					
				</div>
			</div>
		</>
	);
}

export default Dashboard;