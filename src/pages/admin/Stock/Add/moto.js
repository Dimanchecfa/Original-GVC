import { useEffect } from "react";
import { useState } from "react";
import { HTTP_CLIENT } from "../../../../api/client";

const AddOnlyMoto = () => {
    const [numero_serie, setNumero_serie] = useState("");
    const [marque , setMarque] = useState("");
    const [modele, setModele] = useState("");
    const [couleur, setCouleur] = useState("");

    const [marques , setMarques] = useState([]);
    const [modeles, setModeles] = useState([]);

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
      useEffect(() => {
        (async () => fetchMarque())();
        (async () => fetchModele(marque))();
        }, [marque]);
        // const handleAddMotor = (e) => {
        //     e.preventDefault();
        //     const data = {
        //         numero_stock ,
        //         numero_serie,
        //         marque,
        //         modele,
        //         couleur
        //     }
        //     HTTP_CLIENT.post("/motos", data)
        //     .then((res) => {
        //         console.log(res);
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     })
        // }


    return ( 
        <>
        <div class="col-12 col-lg-5 offset-lg-4">


            <div class="card">
                <div class="card-header">
                    <h3 class="card-title mb-0">Ajout de moto</h3>
                </div>
                <div class="card-body">
                    <div class="mb-3">
                        <label class="form-label">N de serie</label>
                        <input type="text" class="form-control" placeholder="Disabled input" disabled="" 
                        value={numero_serie}
                        onChange={(e) => setNumero_serie(e.target.value)}
                        />
                    </div>
                    <label class="form-label">Marque</label>
                    <select class="form-select"
                        value={marque}
                        onChange={(e) => setMarque(e.target.value)}
                    >
                        <option selected="">Choisissez une marque</option>
                        {
                            marques?.map((item) => (
                                <option value={item.nom}>{item.nom}</option>
                            ))
                        }
                    </select>
                   
                    <label class="form-label">Modele</label>
                    <select class="form-select mb-3"
                    value={ modele }
                    onChange={(e) => setModele(e.target.value)}
                    >
                        <option selected="">Choisissez le model</option>
                        {
                            modeles?.map((item) => (
                                <option value={item.nom}>{item.nom}</option>
                            ))
                        }
                       
                    </select>
                   
                   <div class="mb-3">
                        <label class="form-label">N de serie</label>
                        <input type="text" class="form-control" placeholder="Couleur" 
                        value={couleur}
                        onChange={(e) => setCouleur(e.target.value)}
                        />
                    </div>
                    
                </div>

                <div class="card-body">

                    <button type="button" 
                        class="btn btn-primary">Primary</button>

                </div>


            </div>


        </div>


    </>
     );
}
 
export default AddOnlyMoto;