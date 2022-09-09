import React from 'react'
import { BackButton } from '../../../../../components/button'
import PageHeader from '../../../../../components/pageheader'

const EditCommerciale = () => {
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
                                        <input type="text" class="form-control"   placeholder="Pseudo"/>

                                    </div>
                                    <div class="card-body">
                                        <label class="form-label">Nom</label>
                                        <input type="text" class="form-control" placeholder="Nom du commerciale"/>

                                    </div>
                                    <div class="card-body">
                                        <label class="form-label">Numero</label>
                                        <input type="text" class="form-control" placeholder="Numero" />

                                    </div>
                                    <div class="card-body">
                                        <label class="form-label">Logo</label>
                                        <input type="file" class="form-control" placeholder="Numero" />

                                    </div>
                                    <div class="card-body">

                                        <button type="button" 
                                            class="btn btn-primary">Modifier</button>

                                    </div>


                                </div>
                            </div>

                            </div>
                        </div>
                    </>
    )
}

export default EditCommerciale
