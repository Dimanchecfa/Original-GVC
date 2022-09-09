
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HTTP_CLIENT } from "../../../../api/client";
import { EditIcon, EyeIcon } from "../../../../components/icones";
import PageHeader from "../../../../components/pageheader";

const AllStock = () => {
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(true);
	const [stock, setStock] = useState([]);

	useEffect(() => {
		(async () => fetchStock())();
	}, []);

	const fetchStock = async () => {
		await HTTP_CLIENT.get("http://localhost:8000/api/stock")
			.then((response) => {
				const { data } = response.data;
				setStock(data);
				console.log(stock);
				
				setIsLoading(false);
			})
			.catch((error) => {
				console.log(error);
			});
	};
    return ( 
        <>
				
				<PageHeader title="Listes des Stock" route= "/add_stock" />
				

			
            <div class="col-11 offset-1 col-xxl-10 d-flex ">
							<div class="card flex-fill">

								<div class="card-header">

									<h4 class="card-title mb-0">Listes des stocks</h4>
								</div>
								<table class="table table-hover my-0">
						<thead>
							<tr>
								<th class="text-center">Numero du stock</th>
								
								<th class="text-center">Nombre de moto</th>
								<th class="text-center">Date de l'arrivage</th>
								<th class="text-center">Nom du fournisseur</th>
								<th class="text-center">Numero du fournisseur</th>
								<th class="text-center">Action</th>

								
							</tr>
						</thead>
						<tbody>
							{
								stock.map((stock , index) => (
									<tr key={index}>
								<td class="text-center">{ stock?.numero}</td>
								<td class="d-none d-md-table-cell text-center">{ stock?.nombre_moto}</td>
								<td class="d-none d-md-table-cell text-center "> 10-10-10</td>
								<td class="d-none d-md-table-cell text-center">{ stock?.nom_fournisseur}</td>
								<td class="d-none d-md-table-cell text-center">{ stock?.numero_fournisseur}</td>
								<td class="d-none d-md-table-cell text-center">
								<button class="btn btn-secondary btn-sm"
									onClick={
										() => {
											navigate('/show_stock'  , {state: stock})
											console.log(stock?.numero)
											
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
										...Veuillez patienter
									</td>
								</tr>
							): null
							}
							{
								!isLoading && stock.length === 0 ? (
									<tr>
										<td colSpan="6" className="text-center">
											Aucune stock pour le moment
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
 
export default AllStock;