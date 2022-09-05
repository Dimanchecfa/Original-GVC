import { useState } from "react";
import { BackButton } from "../../../../components/button";

const AddStock = () => {
    const [isAddMotor, setIsAddMotor] = useState(false);
    return (
        <>
            <BackButton />
            {
                !isAddMotor && (
                    <>
                        <div className="row">

                            <div className="col-12"> <div class="col-lg-4 offset-lg-3">
                                <div class="card">
                                    <div class="card-header">
                                        <h5 class="card-title mb-0">Ajout d un Stock</h5>
                                    </div>
                                    <div class="card-body">
                                        <input type="text" class="form-control" placeholder="Nom du fournisseur" />

                                    </div>
                                    <div class="card-body">
                                        <input type="text" class="form-control" placeholder="Numero" />

                                    </div>
                                    <div class="card-body">

                                        <button type="button" onClick={() => setIsAddMotor(true)}
                                            class="btn btn-primary">Primary</button>

                                    </div>


                                </div>
                            </div>

                            </div>
                        </div>
                    </>
                )
            }
            {
                isAddMotor && (
                    <>
                        <div class="col-12 col-lg-5 offset-lg-4">
                            

                            <div class="card">
                                <div class="card-header">
                                    <h3 class="card-title mb-0">Ajout de moto</h3>
                                </div>
                                <div class="card-body">
                                <div class="mb-3">
                                        <label class="form-label">N de serie</label>
                                        <input type="text" class="form-control" placeholder="Disabled input" disabled="" />
                                    </div>
                                    <label class="form-label">Model</label>
                                    <select class="form-select mb-3">
                                        <option selected="">choisissez le model</option>
                                        <option>Yamaha</option>
                                        <option>Adora</option>
                                        <option>Kaiser</option>
                                    </select>  
                                    <label class="form-label">Marque</label>
                                    <select class="form-select mb-3">
                                        <option selected="">Choisissez le model</option>
                                        <option>Sirius</option>
                                        <option>Mio</option>
                                        <option>Winner</option>
                                    </select>
                                    <label class="form-label">Couleur</label>
                                    <select class="form-select mb-3">
                                        <option selected="">Choisissez la couleur</option>
                                        <option>NOIR MAT</option>
                                        <option>RC ROUGE</option>
                                        <option>Winner</option>
                                    </select>
                                    <label class="form-label">C:C</label>
                                    <select class="form-select mb-3">
                                        <option selected="">CMC pret</option>
                                        <option>=OUI</option>
                                        <option>NON</option>
                                       
                                    </select>
                                </div>
                               
                                                              <div class="card-body">

<button type="button" onClick={() => setIsAddMotor(true)}
    class="btn btn-primary">Primary</button>

</div>

                                
                            </div>

                          
                        </div>


                    </>
                )
            }
        </>
    );
}
export default AddStock;