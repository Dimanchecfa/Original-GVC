import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { HTTP_CLIENT } from '../../../../api/client';
import { alertClosed, alertPending } from '../../../../components/notification';

export const ShowMotors = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = React.useState(true);
    const [vente, setVente] = React.useState([]);
    const [commerciale , setCommerciale] = React.useState([]);
    const location = useLocation();
    const {state} = location;

    React.useEffect(() => {
        const {state} = location;
        console.log(state?.numero);
        (async () => fetchVenteData(state?.numero_serie))();
    }, []);

        const fetchVenteData = async (numero_serie) => {
            alertPending();
            await HTTP_CLIENT.get(`http://localhost:8000/api/moto/vente/${numero_serie}`)
                .then((response) => {
                    const data = response?.data?.data;
                    setVente(data?.[0]);
                    console.log(data);
                    (async () => fetchCommerciale(data?.[0].pseudo_commerciale))();
                    setIsLoading(false);
                    setTimeout(() => {
                        alertClosed();
                    }, 500);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
        const fetchCommerciale = async ( pseudo_commerciale ) => {
            alertPending();
            await HTTP_CLIENT.get(`http://localhost:8000/api/commerciale/pseudo/${pseudo_commerciale}`)
                .then((response) => {
                    const data = response?.data?.data?.[0];
                    setCommerciale(data);
                    console.log(data);
                    setIsLoading(false);
                    setTimeout(() => {
                        alertClosed();
                    }, 500);
                })
                .catch((error) => {
                    console.log(error);
                });
        }



    return (
        <>
            <div className="row">
                <div class="col-md-4 offset-md-1 col-xl-3">
                    <button type="button" class="btn btn-danger btn-block mb-3" 
                    onClick={() => {
                        navigate(-1);
                    }}
                    >
                        <i class="align-middle me-2" data-feather="plus"></i>Retour
                    </button>
                    <div class="card mb-3">
                        <div class="card-header">
                            <h5 class="card-title mb-0">Profile Details</h5>
                        </div>
                        <div class="card-body text-center">
                            <img src="img/logo.png" alt="Christina Mason" class="img-fluid rounded-circle mb-2" width="128" height="128" />
                            <h5 class="card-title mb-0">{ commerciale?.pseudo}</h5>
                            <div class="text-muted mb-2">{ commerciale?.nom}</div>

                            <div>

                                <button class="btn btn-primary btn-sm" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-square"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg> {" "}{ commerciale?.numero}</button>
                            </div>
                        </div>
                        <hr class="my-0" />


                    </div>
                </div>
                <div class="col-7 offset-1 col-xxl-7 d-flex ">
                    <div class="card flex-fill">

                        <div class="card-header">

                            <h4 class="card-title mb-0">Detail de la moto N { state?.numero_serie}</h4>
                        </div>
                        <table class="table table-hover my-0">
                            <thead>
                                <tr>
                                    <th class="text-center">N serie</th>
                                    <th class="text-center">Marque</th>
                                    <th class="text-center">Model</th>
                                    <th class="text-center">Couleur</th>
                                    <th class="text-center">Statut</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="text-center">{ state?.numero_serie }</td>
                                    <td class="text-center">{ state?.marque}</td>
                                    <td class="text-center">{ state?.modele}</td>

                                    <td class="text-center">{ state?.couleur}</td>
                                    <td class="text-center"><span class="badge bg-success">{ state?.statut}</span></td>

                                </tr>


                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="col-9 offset-3 col-xxl-9 d-flex ">
                    <div class="card flex-fill">

                        <div class="card-header">

                            <h4 class="card-title mb-0">Detail de la moto N  {state?.numero_serie}</h4>
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
                                    {
                                        vente?.statut === "en_cours" ? (
                                            <th class="text-center">Montant Restant</th>
                                        ) : null
                                    }

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td  class="text-center">{ vente?.nom_client}</td>
                                    <td class=" text-center">{ vente?.numero_client}</td>
                                    <td class="text-center">{ vente?.adresse_client}</td>

                                    <td class="text-center">{ vente?.identifiant_client}</td>
                                    <td  class="text-center"><span class="text-center badge bg-success">{ vente?.statut}</span></td>
                                    <td class="text-center">{ vente?.montant_verse}</td>
                                    {
                                        vente?.statut === "en_cours" ? (
                                            <td class="text-center">{ vente?.montant_restant}</td>
                                        ) : null
                                    }

                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

