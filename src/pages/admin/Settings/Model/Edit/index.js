import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { HTTP_CLIENT } from '../../../../../api/client';
import { BackButton } from '../../../../../components/button'

const EditModele
 = () => {
  const location = useLocation();
    const { state } = location;
    const navigate = useNavigate();
    const [nom, setNom] = React.useState(state?.nom);
    const [marque_nom, setMarque_nom] = React.useState(state?.marque_nom);
    const [marques , setMarques] = React.useState([]);
   
    



    React.useEffect(() => {
        (async () => fetchMarques())();
    }, []);


    const fetchMarques = () => {
        HTTP_CLIENT.get("http://localhost:8000/api/marque")
            .then((response) => {
                console.log(response);
                setMarques(response?.data?.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(nom);
        const data = {
            nom,
            marque_nom

        }
        if (nom === '' || marque_nom === '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Veuillez remplir tous les champs',
            })
            setNom('');
            setMarque_nom('');
        }
        else {
            HTTP_CLIENT.put( `http://localhost:8000/api/model/${state?.id}`, data)
                .then((response) => {
                    console.log(response);
                    setNom('');
                    setMarque_nom('');
                    navigate('/all_modele');
                    Swal.fire({
                        icon: 'success',
                        title: 'Ajout effectué avec succès',
                        showConfirmButton: false,
                        timer: 1500
                    })
                })
                .catch((error) => {
                    console.log(error);
                });
        }

    }
    return (
      <>
      <BackButton />
        <div className="row">

          <div className="col-5 offset-3 col-xxl-5 d-flex">
            <div class="card">
              <div class="card-header">
                <h5 class="card-title mb-0">Ajout d'une Marque</h5>
              </div>
              <div class="card-body">
              <label class="form-label">Marque</label>
              <select
                class="form-select mb-3"
              value={ marque_nom } onChange={ (e) => setMarque_nom(e.target.value) }
              >
                <option selected="">choisissez le model</option>
                {marques.map((item) => (
                  <option value={item.nom}>{item.nom}</option>
                ))}
              </select>
                <label class="form-label">Nom</label>
                <input type="text" class="form-control" placeholder="Nom" 
                value={ nom } onChange={ (e) => setNom(e.target.value) } 
                />
              </div>

             <div className="card-body">
            <button type="button" class="btn btn-primary"
            onClick={ handleSubmit }
            >
                Modifier
              </button>
              </div>
          </div>
            </div>
            
        </div>
      </>
    );
}

export default EditModele
