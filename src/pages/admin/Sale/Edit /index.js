import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { HTTP_CLIENT } from '../../../../api/client';
import { BackButton } from '../../../../components/button';

const EditSale = () => {
  const {state} = useLocation();
  useEffect(() => {
    console.log(state);
  }, [])
 
  const [numero_serie, setNumero_serie] = React.useState(state?.numero_serie);
  const [marque , setMarque] = React.useState(state?.marque);
  const [modele, setModele] = React.useState(state?.modele);
  const [couleur, setCouleur] = React.useState(state?.couleur);
 const [pseudo_commerciale , setPseudo_commerciale] = React.useState(state?.pseudo_commerciale);
  const [prix_vente, setPrix_vente] = React.useState(state?.prix_vente);
  const [nom_client, setNom_client] = React.useState(state?.nom_client);
  const [numero_client, setNumero_client] = React.useState(state?.numero_client);
  const [adresse_client, setAdresse_client] = React.useState(state?.adresse_client);
  const [identifiant_client, setIdentifiant_client] = React.useState(state?.identifiant_client);
  const [montant_verse, setMontant_verse] = React.useState(state?.montant_verse);
  const [montant_restant, setMontant_restant] = React.useState(state?.montant_restant ?? "");
const [date_versement, setDate_versement] = React.useState(state?.date_versement);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      numero_serie,
      marque,
      modele,
      couleur,
      pseudo_commerciale,
      prix_vente,
      nom_client,
      numero_client,
      adresse_client,
      identifiant_client,
      montant_verse,
      statut: montant_restant > 0 ? "en_cours" : "payé",
      montant_restant,
      date_versement,
    };
    console.log(data);

    HTTP_CLIENT.put(`/vente/${state.id}`, data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

  };


  
  
    return (
        <>
              <>
      <BackButton />

      <div className="row">
      <div class="col-12 offset-1 col-lg-4 ">
        <div class="card">
          <div class="card-header">
            <h3 class="mb-0"> Vente d une moto </h3>
          </div>
          <div class="card-body">
            <label class="form-label">N de serie</label>
            <input type="text" class="form-control" placeholder="Num de serie" 
            value={numero_serie}
            onChange={(e) => setNumero_serie(e.target.value)}
            />
          </div>
          <div class="card-body">
            <label class="form-label">marque</label>
            <input type="text" class="form-control" placeholder="marque" 
            value={marque}
            onChange={(e) => setMarque(e.target.value)}
            />
          </div>
          <div class="card-body">
            <label class="form-label">modele</label>
            <input type="text" class="form-control" placeholder="modele" 
            value={modele}
            onChange={(e) => setModele(e.target.value)}
            />
          </div>
          <div class="card-body">
            <label class="form-label">couleur</label>
            <input type="text" class="form-control" placeholder="couleur" 
            value={couleur}
            onChange={(e) => setCouleur(e.target.value)}
            />
          </div>
          <div class="card-body">
          <select
                class="form-select mb-3"
                value={pseudo_commerciale}
                onChange={(e) => setPseudo_commerciale(e.target.value)}
              >
                <option selected="">{state?.pseudo_commerciale}</option>
              
              </select>
            <label class="form-label">Prix</label>
            <input type="text" class="form-control" placeholder="N de serie"
            value={prix_vente}
            onChange={(e) => setPrix_vente(e.target.value)}
            />
          </div>
          <hr class="my-3"></hr>
        </div>
      </div>
      <div class="col-12  col-lg-3 ">
        <div class="card">
          <div class="card-header">
            <h3 class="mb-0">Informations du client</h3>
          </div>
          <div class="card-body">
            <label class="form-label">Nom du client</label>
            <input type="text" class="form-control" placeholder="N de serie" 
            value={nom_client}
            onChange={(e) => setNom_client(e.target.value)}
            />
          </div>
          <div class="card-body">
            <label class="form-label">Numero du client</label>
            <input type="text" class="form-control" placeholder="N de serie"
            value={numero_client}
            onChange={(e) => setNumero_client(e.target.value)}
            />
          </div>
          <div class="card-body">
            <label class="form-label">Adresse du client</label>
            <input type="text" class="form-control" placeholder="N de serie" 
            value={adresse_client}
            onChange={(e) => setAdresse_client(e.target.value)}
            />
          </div>
         
          
          <div class="card-body">
            <label class="form-label">Identifiant du clienr</label>
            <input type="text" class="form-control" placeholder="N de serie" 
            value={identifiant_client}
            onChange={(e) => setIdentifiant_client(e.target.value)}
            />
          </div>
         
          <hr class="my-3"></hr>
          
        </div>
      </div>
      <div class="col-12  col-lg-4 ">
        <div class="card">
          <div class="card-header">
            <h3 class="mb-0">Informations du commerciale</h3>
          </div>
         
          <div class="card-body">
            <label class="form-label">Montant Paye</label>
            <input type="text" class="form-control" placeholder="N de serie" 
            value={montant_verse}
            onChange={(e) => setMontant_verse(e.target.value)}
            />
          </div>
          
         {
          prix_vente - montant_verse > 0 && (
            <>
               <div class="card-body">
            <label class="form-label">Montant Restant</label>
            <input type="text" class="form-control" placeholder="Montant Restant" 
            value={
              prix_vente - montant_verse
            }
            />
          </div>
          <div class="card-body">
            <label class="form-label">Date limite de payement</label>
            <input type="date" class="form-control" placeholder="Montant Restant" 
            value={date_versement}
            onChange={(e) => setDate_versement(e.target.value)}
            />
          </div>
            </>
          )

         }
          <div class="card-body offset-8 mt-5">
            <button type="button" class="btn btn-primary btn-lg"
             onClick={handleSubmit}
            >Modifier</button>
          </div>
         <hr class="my-3"></hr> 
        </div>
      </div>
      
      </div>
    </>
        </>
    )
}

export default EditSale;
