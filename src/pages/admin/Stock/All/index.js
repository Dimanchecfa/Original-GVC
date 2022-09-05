
import { useNavigate } from "react-router-dom";
import { EyeIcon } from "../../../../components/icones";
import PageHeader from "../../../../components/pageheader";

const AllStock = () => {
	const navigate = useNavigate();
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
											<th>N du stock</th>
											<th class="d-none d-md-table-cell">Nombre de moto</th>
											<th class="d-none d-md-table-cell">Date de l'arrivage</th>
											<th class="d-none d-md-table-cell">Nom du Fournisseur</th>
											<th>N du fournisseur</th>
											<th class="d-none d-md-table-cell">Action</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>Project Apollo</td>
											<td class="d-none d-md-table-cell">01/01/2021</td>
											<td class="d-none d-md-table-cell">31/06/2021</td>
											<td><span class="badge bg-success">Done</span></td>
											<td class="d-none d-md-table-cell">Vanessa Tucker</td>
											<td class="d-none d-md-table-cell">
												<button type="button" class="btn btn-secondary"> <EyeIcon/>Detail</button>
											</td>
										</tr>
										<tr>
											<td>Project Fireball</td>
											<td class="d-none d-md-table-cell">01/01/2021</td>
											<td class="d-none d-md-table-cell">31/06/2021</td>
											<td><span class="badge bg-danger">Cancelled</span></td>
											<td class="d-none d-md-table-cell">William Harris</td>
											<td class="d-none d-md-table-cell">
												<button type="button" class="btn btn-secondary"> <EyeIcon/>Detail</button>
											</td>
										</tr>
										<tr>
											<td>Project Hades</td>
											<td class="d-none d-md-table-cell">01/01/2021</td>
											<td class="d-none d-md-table-cell">31/06/2021</td>
											<td><span class="badge bg-success">Done</span></td>
											<td class="d-none d-md-table-cell">Sharon Lessman</td>
											<td class="d-none d-md-table-cell">
												<button type="button" class="btn btn-secondary"> <EyeIcon/>Detail</button>
											</td>
										</tr>
									
									</tbody>
								</table>
							</div>
						</div>
        </>
     );
}
 
export default AllStock;