import React from 'react'
import { BackButton } from '../../../../components/button';

const EditSale = () => {
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
            <input type="text" class="form-control" placeholder="N de serie" />
          </div>
          <div class="card-body">
            <label class="form-label">Marque</label>
            <select class="form-select mb-3">
              <option selected="">choisissez la marque</option>
              <option>Yamaha</option>
              <option>Adora</option>
              <option>Kaiser</option>
            </select>
            <label class="form-label">Model</label>
            <select class="form-select mb-3">
              <option selected="">choisissez le model</option>
              <option>Yamaha</option>
              <option>Adora</option>
              <option>Kaiser</option>
            </select>
            <label class="form-label">Couleur</label>
            <select class="form-select mb-3">
              <option selected="">choisissez la couleur</option>
              <option>Yamaha</option>
              <option>Adora</option>
              <option>Kaiser</option>
            </select>
            <label class="form-label">Prix</label>
            <input type="text" class="form-control" placeholder="N de serie" />
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
            <label class="form-label">Nom</label>
            <input type="text" class="form-control" placeholder="N de serie" />
          </div>
          <div class="card-body">
            <label class="form-label">Numero</label>
            <input type="text" class="form-control" placeholder="N de serie" />
          </div>
          <div class="card-body">
            <label class="form-label">Adresse</label>
            <input type="text" class="form-control" placeholder="N de serie" />
          </div>
          <div class="card-body">
            <label class="form-label">Montant Paye</label>
            <input type="text" class="form-control" placeholder="N de serie" />
          </div>
          
          <div class="card-body">
            <label class="form-label">Date limite de paiement</label>
            <input type="date" class="form-control" placeholder="N de serie" />
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
          <label class="form-label">commerciale</label>
            <select class="form-select mb-3">
              <option selected="">choisissez le commerciale</option>
              <option>Yamaha</option>
              <option>Adora</option>
              <option>Kaiser</option>
            </select>
          </div>
          <div class="card-body">
            <label class="form-label">Numero du commerciale</label>
            <input type="text" class="form-control" placeholder="N de serie" />
          </div>
          <div class="card-body offset-8 mt-5">
           <button type="button" class="btn btn-primary btn-lg">Modifier</button>
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
