import { useNavigate } from "react-router-dom";
import { EditIcon, EyeIcon } from "../../../components/icones";

const Dashboard = () => {
	const navigate = useNavigate();
	
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
							<h1 class="mt-1 mb-3 text-center">7</h1>
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
							<h1 class="mt-1 mb-3">2.382.2222</h1>
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
			<div class="col-11 offset-2 col-xxl-9 d-flex">
				<div class="card flex-fill">
					<div class="card-header">

						<h5 class="card-title mb-0">Latest Projects</h5>
					</div>
					<table class="table table-hover my-0">
						<thead>
							<tr>
								<th>Nom du client</th>
								
								<th class="">Marque</th>
								<th class="">Nom du commerciale</th>
								<th class="">Heure</th>
								<th class="">Montant Paye</th>
								<th class="">Action</th>

								
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
								<button class="btn btn-secondary btn-sm"
									onClick={
										() => {
											navigate('/show_sale')
									}
									}
								> <EyeIcon/>{" "}Details</button>{" "}
								<button class="btn btn-primary btn-sm"
								onClick={
									() => {
										navigate('/edit_sale')
								}
								}
								> <EditIcon/>{" "}Modifier</button>
								</td>
							
							</tr>
						
							
							<tr>
								<td>Project X</td>
								<td class="d-none d-md-table-cell">01/01/2021</td>
								<td class="d-none d-md-table-cell">31/06/2021</td>
								<td><span class="badge bg-success">Done</span></td>
								<td class="d-none d-md-table-cell">Sharon Lessman</td>
								<td class="d-none d-md-table-cell">
								<button class="btn btn-secondary btn-sm"
								onClick={
									() => {
										navigate('/show_sale')
								}
								}
								> <EyeIcon/>{" "}Details</button>{" "}
								<button class="btn btn-primary btn-sm"
								onClick={
									() => {
										navigate('/edit_sale')
								}
								}
								> <EditIcon/>{" "}Modifier</button>
								</td>
							</tr>
							
							
						</tbody>
						<tfoot>
							
						</tfoot>
					</table>
				</div>
			</div>
		</>
	);
}

export default Dashboard;