import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { HTTP_CLIENT } from '../../../../../api/client';
import { BackButton } from '../../../../../components/button'

const EditMarque = () => {
    const location = useLocation();
    const { state } = location;
    const navigate = useNavigate();
    const [nom, setNom] = React.useState( state?.nom );

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(nom);
        const data = {
            nom
        }
        if (nom === '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Veuillez remplir tous les champs',
            })
            setNom('');
        }
        else {
            HTTP_CLIENT.put(`http://localhost:8000/api/marque/${state?.id}`, data)
                .then((response) => {
                    console.log(response);
                    setNom('');
                    navigate('/all_marque');
                    Swal.fire({
                        icon: 'success',
                        title: 'Modification effectué avec succès',
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
                <label class="form-label">Nom</label>
                <input type="text" class="form-control" placeholder="Nom" 
                value={ nom } onChange={ (e) => setNom(e.target.value) } 
                />
              </div>

             <div className="card-body">
            <button type="button" class="btn btn-primary"
            onClick={ handleSubmit }
            >
                Ajouter
              </button>
              </div>
          </div>
            </div>
            
        </div>
      </>
    );
}

export default EditMarque
