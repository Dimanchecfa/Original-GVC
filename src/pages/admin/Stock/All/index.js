
import { useEffect, useState } from "react";
import { Empty, Pagination, Spin } from 'antd';
import { useNavigate } from "react-router-dom";
import { HTTP_CLIENT } from "../../../../api/client";
import { EditIcon, EyeIcon } from "../../../../components/icones";
import PageHeader from "../../../../components/pageheader";


const onShowSizeChange = (current, pageSize) => {
	console.log(current, pageSize);
  };
const AllStock = () => {
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(true);
	const [stock, setStock] = useState([]);
	const [current, setCurrent] = useState(0);
	const [total, setTotal] = useState(0);

	useEffect(() => {
		(async () => fetchStock(current))();
	}, [current]);
	const onChange = (page) => {
		console.log(page);
		setCurrent(page);
	  };

	const fetchStock = async (page) => {
		//paginate
		await HTTP_CLIENT.get(`/stock/page/${page}`)
			.then((response) => {
				const  data  = response.data?.data;
				setStock(data?.data);
				console.log(data);
				setCurrent(data?.current_page);
				setTotal(data?.total);
				
				setIsLoading(false);
			})
			.catch((error) => {
				setTimeout(() => {
					setIsLoading(false);
				}, 1000);
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
										<Spin />
									</td>
								</tr>
							): null
							}
							{
								!isLoading && stock.length === 0 ? (
									<tr>
										<td colSpan="6" className="text-center">
											<Empty description="Aucun stock disponible" />
										</td>
									</tr>
								): null
							}
						
							
							
						</tbody>
						 {
								!isLoading && stock.length > 0 && (
									<tr class="offset-2 text-center">
						<td colSpan="6">
						<Pagination current={current} onChange={onChange} total={
							total
						}
						
						/>
						</td>
						</tr>
								)
						 }
						
							
									
								
						
					</table>
							</div>
						</div>
        </>
     );
}
 
export default AllStock;