import { Empty, Pagination, Spin } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HTTP_CLIENT } from "../../../api/client";
import { BackButton } from "../../../components/button";
import { alertClosed, alertPending } from "../../../components/notification";




export const Redevability = () => {
	const navigate = useNavigate();
	
	const [redevability , setRedevability] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
    const [current , setCurrent] = useState(1);
    const [total , setTotal] = useState(0);
	
const onChange= (page) => {
    setCurrent(page);
}
	useEffect (() => {
		
		
		(async () => fetchRedevability(current))();
	},[current]);

    const fetchRedevability = async (page) => {
        alertPending();
        await HTTP_CLIENT.get(`/vente/en_cours/${page}`)
        .then((response) => {
            const data = response?.data?.data;
            setRedevability(data?.data);
            console.log(data);
            setCurrent(data?.current_page);
            setTotal(data?.total);
            setTimeout(() => {
                alertClosed();
            }
            , 500);
            setIsLoading(false);
            
        })
        .catch((error) => {
            console.log(error);
            setIsLoading(false);
            setTimeout(() => {
                alertClosed();
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

									<h4 class="card-title mb-0">Listes de redevabilité</h4>
								</div>
								<table class="table table-hover my-0">
						<thead>
							<tr>
                            <th class="text-center">Nom du client</th>
								<th class="text-center">Numero du client</th>
								<th class="text-center">Adresse du client</th>
								<th class="text-center">
                                    Numero Identifiant
                                </th>
								<th class="text-center">
                                    Numero de serie
                                </th>
                                <th class="text-center">
                                    Montant restant
                                </th>
                                <th class="text-center">
                                    Date de versement
                                </th>
								

								
							</tr>
						</thead>
						<tbody>
							{
								redevability.map((moto , index) => (
									<tr key={index}>
                                        <td class="text-center">{ moto?.nom_client}</td>
								<td class="text-center">{ moto?.numero_client}</td>
								<td class="d-none d-md-table-cell text-center">{ moto?.adresse_client}</td>
								<td class="d-none d-md-table-cell text-center "> {  moto?.identifiant_client}</td>
								<td class="d-none d-md-table-cell text-center">{ moto?.numero_serie}</td>
                                <td class="d-none d-md-table-cell text-center">{ moto?.montant_restant}</td>
                                <td class="d-none d-md-table-cell text-center">{ moto?.date_versement}</td>
								
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
								!isLoading && redevability.length === 0 ? (
									<tr>
										<td colSpan="7" className="text-center">
											<Empty description="Aucune redevabilite" />
										</td>
									</tr>
								): null
							}
						
							
							
						</tbody>
						{
                            !isLoading && redevability.length > 0 ? (
                                <tr>
							<td colSpan="6">
								<Pagination current={current} total={total} onChange={(page) => setCurrent(page)} />
							</td>
						</tr> ): null
                        }
							
									
								
						
					</table>
							</div>
						</div>
        </>
     );
}
 
