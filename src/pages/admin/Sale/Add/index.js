
import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { handlingErrors, HTTP_CLIENT } from "../../../../api/client";


import { BackButton } from "../../../../components/button";
import { alertClosed, alertPending } from "../../../../components/notification";
import { notification } from 'antd';
import { TreeSelect } from 'antd';
import { openNotificationWithIcon } from '../../../../components/alert/index';
import { useNavigate } from 'react-router-dom';

const { TreeNode } = TreeSelect;




const AddSale = () => {
  const [result, setResult] = React.useState([]);
  const [moto, setMoto] = React.useState([]);
  const [marques, setMarques] = React.useState([]);
  const [modeles, setModeles] = React.useState([]);
  const [commerciale, setCommerciale] = React.useState([]);
  const fetchMarque = async () => {
    await HTTP_CLIENT.get("/marque")
      .then((response) => {
        const data = response?.data?.data;
        setMarques(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchModele = async (marque) => {
    await HTTP_CLIENT.get(`/modele/marque/${marque}`)
      .then((response) => {
        const data = response?.data?.data;
        setModeles(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchCommerciale = async () => {
    await HTTP_CLIENT.get("/commerciale")
      .then((response) => {
        const data = response?.data?.data;
        setCommerciale(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [numero_serie, setNumero_serie] = React.useState("");
  const [marque, setMarque] = React.useState(result.marque || "");
  const [modele, setModele] = React.useState( result?.modele || "");
  const [couleur, setCouleur] = React.useState(result?.couleur || "");
  const [prix_vente, setPrix_vente] = React.useState("");
  const [pseudo_commerciale, setPseudo_commerciale] = React.useState("");
  const [nom_client, setNom_client] = React.useState("");
  const [numero_client, setNumero_client] = React.useState("");
  const [adresse_client, setAdresse_client] = React.useState("");
  const [identifiant_client, setIdentifiant_client] = React.useState("");
  const [montant_verse, setMontant_verse] = React.useState("");
  const [montant_restant, setMontant_restant] = React.useState("");
  const [date_versement, setDate_versement] = React.useState("");


  

  React.useEffect(() => {
    (async () => fetchMarque())();
    (async () => fetchCommerciale())();
    (async () => fetchModele(marque))();
    (async () => fetchMotoByNumeroSerie(numero_serie))();
    (async () => fetchMoto())();
   
  
  }, [marque , numero_serie]);
  const fetchMoto = async () => {
    await HTTP_CLIENT.get("/moto/number/stocker")
      .then((response) => {
        const data = response?.data?.data;
        setMoto(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
 

const fetchMotoByNumeroSerie = async (numero_serie) => {
    await HTTP_CLIENT.get(`/moto/${numero_serie}`)
      .then((response) => {
        const data = response?.data?.data;
        setResult(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };



const navigate = useNavigate();
  const handleSubmit = async (e) => {
   
    e.preventDefault();
  
// if(numero_serie === "" || pseudo_commerciale === "" || nom_client === "" || numero_client === "" || adresse_client === "" || identifiant_client === "" || montant_verse === "" || montant_restant === "" || date_versement === "" || prix_vente === "" || couleur === "" || modele === "" || marque === "" ){
//  return openNotificationWithIcon('error', 'Erreur', 'Veuillez remplir tous les champs');
// }
const data = {
  nom_client,
  numero_client,
  adresse_client,
  identifiant_client,
  numero_serie,
  pseudo_commerciale,
  marque : result?.marque,
  modele : result?.modele,
  couleur : result?.couleur,
  prix_vente,
  montant_verse,
  montant_restant : parseInt(prix_vente) - parseInt(montant_verse),
  statut: parseInt(montant_restant) === 0 ? "payé" : "en_cours",
  date_versement,
};
    console.log(data);

    HTTP_CLIENT.post("vente", data)
      .then((res) => {
        alertPending();
        console.log(res);
        navigate('/pdfe' , {state : res?.data?.data});
        setTimeout(() => {
          alertClosed();
          openNotificationWithIcon('success' , 'Vente ajoutée avec succès');
        }, 500);
      })
      .catch((err) => {
        console.log(err);
        openNotificationWithIcon('error' , 'Erreur lors de l\'ajout de la vente');

      });
  };
  const onChange= (newValue) => {
    setNumero_serie(newValue);
    console.log(newValue);
  }

  return (
    <>
      <BackButton />
      
      <div className="row">
        <div class="col-12 offset-1 col-lg-4 ">
          <div class="card">
            <div class="card-header">
              <h3 class="mb-0"> Vente d une moto </h3>
            </div>
            <div class="card-body">
            <label class="form-label">Numero de serie</label>
            <TreeSelect
      showSearch
      style={{
        width: '100%',
      }}
      value={numero_serie}
      label = "Numero de serie"
      dropdownStyle={{
        maxHeight: 400,
        overflow: 'auto',
      }}
      placeholder="Please select"
      allowClear
      treeDefaultExpandAll
      onChange={onChange}
    >
      {moto.map((moto) => (
        <TreeNode value={moto.numero_serie} title={moto.numero_serie} />
      ))}

    </TreeSelect>
              
              
            </div>

            <div class="card-body">
              <label class="form-label">Marque</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter la marque"
                value={result?.marque}
                
              />
            </div>
            <div class="card-body">
              <label class="form-label">Model</label>
             
              <input
                type="text"
                class="form-control"
                placeholder="Enter le model"
                value={result?.modele}
                
              />
            </div>  
            <div class="card-body">
              <label class="form-label">Couleur</label>
             
              <input
                type="text"
                class="form-control"
                placeholder="Enter la couleur"
                value={result?.couleur}
                
              />
            </div>  

            <div class="card-body">
              <label class="form-label">Commerciale</label>
              <select
                class="form-select mb-3"
                value={pseudo_commerciale}
                onChange={(e) => setPseudo_commerciale(e.target.value)}
              >
                <option selected="">choisissez le commerciale</option>
                {commerciale.map((item) => (
                  <option value={item?.pseudo}>{item?.pseudo}</option>
                ))}
              </select>
           
            
              <label class="form-label">Prix</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter le prix"
                value={prix_vente}
                onChange={(e) => setPrix_vente(e.target.value)}
              />
            </div>
            <hr class="my-3"></hr>
          </div>
        </div>
        <div class="col-10  col-lg-3 ">
          <div class="card">
            <div class="card-header">
              <h3 class="mb-0">Informations du client</h3>
            </div>
            <div class="card-body">
              <label class="form-label">Nom</label>
              <input
                type="text"
                class="form-control"
                placeholder="Nom du client"
                value={nom_client}
                onChange={(e) => setNom_client(e.target.value)}
              />
            </div>
            <div class="card-body">
              <label class="form-label">Numero</label>
              <input
                type="text"
                class="form-control"
                placeholder="Numero du client"
                value={numero_client}
                onChange={(e) => setNumero_client(e.target.value)}
              />
            </div>
            <div class="card-body">
              <label class="form-label">Adresse</label>
              <input
                type="text"
                class="form-control"
                placeholder="Adresse du client"
                value={adresse_client}
                onChange={(e) => setAdresse_client(e.target.value)}
              />
            </div>
            <div class="card-body">
              <label class="form-label">Identifiant</label>
              <input
                type="text"
                class="form-control"
                placeholder="N de carte d'identité"
                value={identifiant_client}
                onChange={(e) => setIdentifiant_client(e.target.value)}
              />
            </div>

            <hr class="my-3"></hr>
          </div>
        </div>
        <div class="col-10  col-lg-4 ">
          <div class="card">
            <div class="card-header">
              <h3 class="mb-0">Versement</h3>
            </div>
            <div class="card-body">
              <label class="form-label">Montant Paye</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter le montant paye"
                value={montant_verse}
                onChange={(e) => setMontant_verse(e.target.value)}
              />
            </div>
            {prix_vente - montant_verse > 0 && (
              <>
                <div class="card-body">
                  <label class="form-label">Montant restant</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter le montant restant"
                    //mettre a jour en temps reel
                    value={
                      parseInt(prix_vente) - parseInt(montant_verse)
                    }
                  />
                </div>
                <div class="card-body">
                  <label class="form-label">Date limite de paiement</label>
                  <input
                    type="date"
                    class="form-control"
                    placeholder="Date limite de payement"
                    value={date_versement}
                    onChange={(e) => setDate_versement(e.target.value)}
                  />
                </div>
              </>
            )}

            <div class="card-body">
              <button class="btn btn-primary" onClick={handleSubmit}>
                Enregistrer
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddSale;
