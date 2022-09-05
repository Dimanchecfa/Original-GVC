import { EditIcon, EyeIcon } from "../../../../components/icones";

export const ShowStock = () => {
    return ( 
        <>
                    <div class="col-11 offset-1 col-xxl-9 d-flex ">
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
 
