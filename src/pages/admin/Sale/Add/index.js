import { Alert, Snackbar } from "@mui/material";
import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { handlingErrors, HTTP_CLIENT } from "../../../../api/client";
import { successNotif } from "../../../../components/alert";

import { BackButton } from "../../../../components/button";
import { alertClosed, alertPending } from "../../../../components/notification";

const AddSale = () => {
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
  const [marque, setMarque] = React.useState("");
  const [modele, setModele] = React.useState("");
  const [couleur, setCouleur] = React.useState("");
  const [prix_vente, setPrix_vente] = React.useState("");
  const [pseudo_commerciale, setPseudo_commerciale] = React.useState("");
  const [nom_client, setNom_client] = React.useState("");
  const [numero_client, setNumero_client] = React.useState("");
  const [adresse_client, setAdresse_client] = React.useState("");
  const [identifiant_client, setIdentifiant_client] = React.useState("");
  const [montant_verse, setMontant_verse] = React.useState("");
  const [montant_restant, setMontant_restant] = React.useState("");
  const [date_versement, setDate_versement] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  React.useEffect(() => {
    (async () => fetchMarque())();
    (async () => fetchCommerciale())();
    (async () => fetchModele(marque))();
    (async () => fetchMoto())();
   
    (async () => handleClick())();
  }, [marque]);
  const fetchMoto = async () => {
    await HTTP_CLIENT.get("http://localhost:8000/api/moto/number/stocker")
      .then((response) => {
        const data = response?.data?.data;
        setMoto(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
   alertPending();

    const data = {
      nom_client,
      numero_client,
      adresse_client,
      identifiant_client,
      numero_serie,
      pseudo_commerciale,
      marque,
      modele,
      couleur,
      prix_vente,
      montant_verse,
      montant_restant,
      statut: montant_restant > 0 ? "en_cours" : "payé",
      date_versement,
    };
    console.log(data);

    HTTP_CLIENT.post("vente", data)
      .then((res) => {
        console.log(res);
        
        setTimeout(() => {
          alertClosed();
        }, 500);
      })
      .catch((err) => {
        console.log(err);
        setTimeout(() => {
          alertClosed();
        }, 500);
      });
  };

  return (
    <>
      <BackButton />
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert variant="filled" onClose={handleClose} severity="error">
          This is an error alert — check it out!
        </Alert>
      </Snackbar>
      <div className="row">
        <div class="col-12 offset-1 col-lg-4 ">
          <div class="card">
            <div class="card-header">
              <h3 class="mb-0"> Vente d une moto </h3>
            </div>
            <div class="card-body">
              <label class="form-label">Numero de serie</label>
              <input
                type="text"
                class="form-control"
                placeholder="N de serie"
                value={numero_serie}
                onChange={(e) => setNumero_serie(e.target.value)}
              />
            </div>

            <div class="card-body">
              <label class="form-label">Marque</label>
              <select
                class="form-select mb-3"
                value={marque}
                onChange={(e) => setMarque(e.target.value)}
              >
                <option selected="">choisissez le model</option>
                {marques.map((item) => (
                  <option value={item.nom}>{item.nom}</option>
                ))}
              </select>
              <label class="form-label">Model</label>
              <select
                class="form-select mb-3"
                value={modele}
                onChange={(e) => setModele(e.target.value)}
              >
                <option selected="">choisissez le model</option>
                {modeles.map((item) => (
                  <option value={item?.nom}>{item.nom}</option>
                ))}
              </select>
              <label class="form-label">Couleur</label>
              <select
                class="form-select mb-3"
                value={couleur}
                onChange={(e) => setCouleur(e.target.value)}
              >
                <option selected="">choisissez la couleur</option>
                <option>Yamaha</option>
                <option>Adora</option>
                <option>Kaiser</option>
              </select>
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
                placeholder="N de serie"
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
                placeholder="N de serie"
                value={adresse_client}
                onChange={(e) => setAdresse_client(e.target.value)}
              />
            </div>
            <div class="card-body">
              <label class="form-label">Identifiant</label>
              <input
                type="text"
                class="form-control"
                placeholder="N de serie"
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
                placeholder="N de serie"
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
                    placeholder="N de serie"
                    //mettre a jour en temps reel
                    value={prix_vente - montant_verse}
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
