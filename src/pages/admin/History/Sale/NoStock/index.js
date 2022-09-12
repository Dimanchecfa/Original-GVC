import { Empty, Spin } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HTTP_CLIENT } from "../../../../../api/client";
import { BackButton } from "../../../../../components/button";
import { EyeIcon } from "../../../../../components/icones";
import { alertClosed, alertPending } from "../../../../../components/notification";

const NoStocked = () => {
    const navigate = useNavigate();
	
	const [motos , setMotos] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	

	useEffect (() => {
		
		
		(async () => fetchMotors())();
	},[]);

    const fetchMotors = async () => {
        alertPending();
        await HTTP_CLIENT.get("http://localhost:8000/api/moto/number/vendue")
        .then((response) => {
            const data = response?.data?.data;
            setMotos(data);
            setTimeout(() => {
                alertClosed();
            }
            , 500);
           setTimeout(() => {
			setIsLoading(false);
		   }
		   , 1000);
            
        })
        .catch((error) => {
            console.log(error);
            
            setTimeout(() => {
                alertClosed();
				
            }
            , 800);
			setTimeout(() => {
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

									<h4 class="card-title mb-0">Listes des motos en Stock</h4>
								</div>
								<table class="table table-hover my-0">
						<thead>
							<tr>
                            <th class="text-center">Numero de stock</th>
								<th class="text-center">Numero de serie</th>
								<th class="text-center">Marque</th>
								<th class="text-center">Model</th>
								<th class="text-center">Couleur</th>
                                <th class="text-center">Couleur</th>
								

								
							</tr>
						</thead>
						<tbody>
							{
								motos.map((moto , index) => (
									<tr key={index}>
                                        <td class="text-center">{ moto?.numero_stock}</td>
								<td class="text-center">{ moto?.numero_serie}</td>
								<td class="d-none d-md-table-cell text-center">{ moto?.marque}</td>
								<td class="d-none d-md-table-cell text-center "> {  moto?.modele}</td>
								<td class="d-none d-md-table-cell text-center">{ moto?.couleur}</td>
                                <td class="d-none d-md-table-cell text-center">
                                <button class="btn btn-primary btn-sm"
									onClick={
										() => {
											navigate('/show_motors'  , {state : moto})
											
									}
									}
								> <EyeIcon/>{" "}Details</button>
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
								!isLoading && motos.length === 0 ? (
									<tr>
										<td colSpan="6" className="text-center">
											<Empty description="Aucune moto en vendu" />
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
 
export default NoStocked;