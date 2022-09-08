import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { HTTP_CLIENT } from '../../../../api/client';
import { alertClosed, alertConfirm, alertNotification, alertPending } from '../../../../components/notification/index';

const ShowSell = () => {
    
    const navigate = useNavigate();
    const location = useLocation();
    const {state} = location;
    const [isLoading, setIsLoading] = React.useState(true);
    const [commerciale , setCommerciale] = React.useState([]);
    const [moto , setMoto] = React.useState([]);



    useEffect (() => {
      
        const {state} = location;
        console.log(state?.numero_serie);
       (async () => fetchCommerciale(state?.pseudo_commerciale))();
         (async () => fetchMoto(state?.numero_serie))();
       
    },[]);


    const fetchCommerciale = async ( pseudo_commerciale ) => {
        alertPending();
        
        await HTTP_CLIENT.get(`http://localhost:8000/api/commerciale/pseudo/${pseudo_commerciale}`)
            .then((response) => {
                setCommerciale(response.data);
                console.log(response.data);
                setIsLoading(false);
                setTimeout(() => {
                    alertClosed();
                    
                     }, 500);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    const fetchMoto = async (numero_serie) => {
        alertPending();
        await HTTP_CLIENT.get(`http://localhost:8000/api/moto/${numero_serie}`)
            .then((response) => {
                setMoto(response?.data?.data);
                console.log(moto.data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    



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
                            <h5 class="card-title mb-0">{ state?.pseudo_commerciale}</h5>
                            <div class="text-muted mb-2">{ commerciale?.data?.[0].nom}</div>

                            <div>

                                <button class="btn btn-primary btn-sm" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-square"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg> {" "}{ commerciale?.data?.[0].numero}</button>
                            </div>
                        </div>
                        <hr class="my-0" />


                    </div>
                </div>
                <div class="col-7 offset-1 col-xxl-7 d-flex ">
                    <div class="card flex-fill">

                        <div class="card-header">

                            <h4 class="card-title mb-0">Detail de la vente de Mr { commerciale?.data?.[0].nom} le 10/10/2022</h4>
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
                                    <td>{ state?.numero_serie }</td>
                                    <td class="d-none d-md-table-cell">{ moto?.marque}</td>
                                    <td class="d-none d-md-table-cell">{ moto?.modele}</td>

                                    <td class="d-none d-md-table-cell">{ moto?.couleur}</td>
                                    <td><span class="badge bg-success">{ moto?.statut}</span></td>

                                </tr>


                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="col-9 offset-3 col-xxl-9 d-flex ">
                    <div class="card flex-fill">

                        <div class="card-header">

                            <h4 class="card-title mb-0">Detail de la vente de Mr { commerciale?.data?.[0].nom} le 10/10/2022</h4>
                        </div>
                        <table class="table table-hover my-0">
                            <thead>
                                <tr>
                                    <th class="text-center">Nom du client</th>
                                    <th class="text-center">Numero</th>
                                    <th class="text-center">Adresse</th>
                                    <th class="text-center">Identifiant CNIB</th>
                                    <th class="text-center">Statut de paiement</th>
                                    <th class="text-center">Montant Payé</th>
                                    <th class="text-center">Montant Restant</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td  class="text-center">{ state?.nom_client}</td>
                                    <td class=" text-center">{ state?.numero_client}</td>
                                    <td class="text-center">{ state?.adresse_client}</td>

                                    <td class="text-center">{ state?.identifiant_client}</td>
                                    <td  class="text-center"><span class="text-center">{ state?.statut}</span></td>
                                    <td class="text-center">{ state?.montant_verse}</td>
                                    <td class="text-center">{ state?.montant_restant}</td>

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
