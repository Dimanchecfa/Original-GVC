import React from 'react'
import { HTTP_CLIENT } from '../../../../../api/client';
import { EditIcon } from '../../../../../components/icones';
import PageHeader from '../../../../../components/pageheader/index';
import { useNavigate } from 'react-router-dom';
import AddMarque from '../Add/index';

const Allmarque = () => {
    const navigate = useNavigate();
    const [marque, setMarque] = React.useState([]);
   const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        (async () => fetchmarque())();
    }, []);

    const fetchmarque = async () => {
        await HTTP_CLIENT.get("http://localhost:8000/api/marque")
            .then((response) => {
                setMarque(response.data?.data);
                console.log(response.data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    return (
        <>
            <PageHeader title='Marque' route="/add_marque" />
            <div className="row">
            <div class="col-4 offset-2 col-xxl-4 d-flex">
				<div class="card flex-fill">
					<div class=" card-header d-flex">
                        
                            <h5 class=" col-md-2 card-title">Listes des marques</h5>
                           
                            

                    
					</div>
					<table class="table table-hover my-0">
						<thead>
							<tr>
								<th class="text-center">Nom </th>
								

								
							</tr>
						</thead>
						<tbody>
							{
								marque.map((marque , index) => (
									<tr key={index}>
								<td class="text-center">{ marque?.nom}</td>
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
								!isLoading && marque.length === 0 ? (
									<tr>
										<td colSpan="6" className="text-center">
											Aucune marque
										</td>
									</tr>
								): null
							}
						
							
							
						</tbody>
						
							
									
								
						
					</table>
				</div>
			</div>
            <div class="col-3 offset-1 col-xxl-3 d-flex">
                <AddMarque />
            </div>
            </div>
        </>
    )
}

export default Allmarque;
