import React from 'react'
import { BackButton } from '../../../../../components/button'

const AddMarque = () => {
    return (
        <>
        
           

            
                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title mb-0">Ajout d'une Marque</h5>
                    </div>
                    <div class="card-body">
                        <label class="form-label">Nom</label>
                        <input type="text" class="form-control"   placeholder="Nom"/>

                    </div>
             
                        <button type="button" class="btn btn-primary">
                            Ajouter
                        </button>

                   


                </div>
          

      
       
    </>
    )
}

export default AddMarque
