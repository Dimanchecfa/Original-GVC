import React from 'react'
import { useNavigate } from 'react-router-dom';

const ShowSell = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="row">
                <div class="col-md-4 offset-md-1 col-xl-3">
                    <button type="button" class="btn btn-danger btn-block mb-3"  onClick={
                        () => {
                            navigate(-1);
                        }

                    }>
                        <i class="align-middle me-2" data-feather="plus"></i>Retour
                    </button>
                    <div class="card mb-3">
                        <div class="card-header">
                            <h5 class="card-title mb-0">Profile Details</h5>
                        </div>
                        <div class="card-body text-center">
                            <img src="img/logo.png" alt="Christina Mason" class="img-fluid rounded-circle mb-2" width="128" height="128" />
                            <h5 class="card-title mb-0">EBIZAF</h5>
                            <div class="text-muted mb-2">BIKIENGA ZAKARIA</div>

                            <div>

                                <button class="btn btn-primary btn-sm" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-square"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg> {" "}70-70-37-54</button>
                            </div>
                        </div>
                        <hr class="my-0" />


                    </div>
                </div>
                <div class="col-7 offset-1 col-xxl-7 d-flex ">
                    <div class="card flex-fill">

                        <div class="card-header">

                            <h4 class="card-title mb-0">Detail de la vente de Mr BIKIENGA ZAKARIA le 10/10/2022</h4>
                        </div>
                        <table class="table table-hover my-0">
                            <thead>
                                <tr>
                                    <th>N serie</th>
                                    <th class="d-none d-md-table-cell">Marque</th>
                                    <th class="d-none d-md-table-cell">Model</th>
                                    <th class="d-none d-md-table-cell">Couleur</th>
                                    <th class="d-none d-md-table-cell">Statut</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>RLCUEMY280652</td>
                                    <td class="d-none d-md-table-cell">YAMAHA</td>
                                    <td class="d-none d-md-table-cell">SIRIUS</td>

                                    <td class="d-none d-md-table-cell">NOIR MAT</td>
                                    <td><span class="badge bg-success">Vendu</span></td>

                                </tr>


                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="col-7 offset-5 col-xxl-7 d-flex ">
                    <div class="card flex-fill">

                        <div class="card-header">

                            <h4 class="card-title mb-0">Detail de la vente de Mr BIKIENGA ZAKARIA le 10/10/2022</h4>
                        </div>
                        <table class="table table-hover my-0">
                            <thead>
                                <tr>
                                    <th>Nom du client</th>
                                    <th class="d-none d-md-table-cell">Numero</th>
                                    <th class="d-none d-md-table-cell">Statut de paiement</th>
                                    <th class="d-none d-md-table-cell">Montant Payé</th>
                                    <th class="d-none d-md-table-cell">Montant Restant</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>BOUBA</td>
                                    <td class="d-none d-md-table-cell">70709090</td>
                                    <td class="d-none d-md-table-cell">Terminé</td>

                                    <td class="d-none d-md-table-cell">790.000</td>
                                    <td><span class="badge bg-success">00000</span></td>

                                </tr>


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        
        </>
    )
}

export default ShowSell;
