import React from 'react'
import { HTTP_CLIENT } from '../../../../../api/client';
import { EditIcon } from '../../../../../components/icones';
import PageHeader from '../../../../../components/pageheader/index';
import { useNavigate } from 'react-router-dom';

const AllCommerciale = () => {
    const navigate = useNavigate();
    const [commerciale, setCommerciale] = React.useState([]);
   const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        (async () => fetchCommerciale())();
    }, []);

    const fetchCommerciale = async () => {
        await HTTP_CLIENT.get("http://localhost:8000/api/commerciale")
            .then((response) => {
                setCommerciale(response.data?.data);
                console.log(response.data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error);
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
										navigate('/edit_sale');
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
								!isLoading && commerciale.length === 0 ? (
									<tr>
										<td colSpan="6" className="text-center">
											Aucune commerciale
										</td>
									</tr>
								): null
							}
						
							
							
						</tbody>
						
							
									
								
						
					</table>
				</div>
			</div>
            
        </>
    )
}

export default AllCommerciale;
