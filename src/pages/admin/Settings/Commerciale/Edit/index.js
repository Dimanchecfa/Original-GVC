import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { HTTP_CLIENT } from '../../../../../api/client'
import { BackButton } from '../../../../../components/button'
import PageHeader from '../../../../../components/pageheader'

const EditCommerciale = () => {
    const location = useLocation();
    const { state } = location;
    const [pseudo, setPseudo] = React.useState(state?.pseudo);
    const [nom, setNom] = React.useState(state?.nom);
    const [numero, setNumero] = React.useState(state?.numero);
    const [logo , setLogo] = React.useState(state?.logo);

    useEffect(()=>{
        console.log(state)
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            pseudo,
            nom,
            numero,
            logo
        }
        console.log(data);
        HTTP_CLIENT.put(`/commerciale/${state.id}`, data)
        .then((res) => {
            console.log(res);
        }
        )
        .catch((err) => {
            console.log(err);
        }
        );
    }



    return (
        <>
                        <div className="row">
                            <BackButton />

                            <div className="col-12"> <div class="col-lg-4 offset-lg-3">
                                <div class="card">
                                    <div class="card-header">
                                        <h5 class="card-title mb-0">Ajout d un Commerciale</h5>
                                    </div>
                                    <div class="card-body">
                                        <label class="form-label">Pseudo</label>
                                        <input type="text" class="form-control"   placeholder="Pseudo"
                                        value={pseudo}
                                        onChange={(e) => setPseudo(e.target.value)}
                                        />

                                    </div>
                                    <div class="card-body">
                                        <label class="form-label">Nom</label>
                                        <input type="text" class="form-control" placeholder="Nom du commerciale"
                                        value={nom}
                                        onChange={(e) => setNom(e.target.value)}
                                        />

                                    </div>
                                    <div class="card-body">
                                        <label class="form-label">Numero</label>
                                        <input type="text" class="form-control" placeholder="Numero" 
                                        value={numero}
                                        onChange={(e) => setNumero(e.target.value)}
                                        />

                                    </div>
                                    <div class="card-body">
                                        <label class="form-label">Logo</label>
                                        <input type="text" class="form-control" placeholder="Logo" 
                                       
                                       value={logo}
                                        onChange={(e) => setLogo(e.target.value)}
                                        />

                                    </div>
                                    <div class="card-body">

                                        <button type="button" 
                                            class="btn btn-primary"
                                            onClick={handleSubmit}
                                            >Modifier</button>

                                    </div>


                                </div>
                            </div>

                            </div>
                        </div>
                    </>
    )
}

export default EditCommerciale
