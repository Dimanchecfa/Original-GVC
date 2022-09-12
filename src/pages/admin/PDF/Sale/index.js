
import React from "react";
import "./index.css";

const PDF = () => {
  return (
    <>
    
      <div class="col-md-12">
        <div class="row">
          <div class="receipt-main col-xs-10 col-sm-10 col-md-6 col-xs-offset-1 col-sm-offset-1 col-md-offset-3 ">
            <div class="row d-flex">
              <div
                class="receipt-header d-flex 
                justify-content-between
                "
              >
                <div class="col-xs-6 col-sm-6 col-md-6 text-right">
                  <div class="receipt-right">
                    <img
                      class="img-res"
                      alt="iamgurdeeposahan"
                      src="https://bootdey.com/img/Content/avatar/avatar6.png"
                    />

                    <h4>Informations de l'entreprise</h4>
                    <p>
                      +1 3649-6589 <i class="fa fa-phone"></i>
                    </p>
                    <p>
                      company@gmail.com <i class="fa fa-envelope-o"></i>
                    </p>
                    <p>
                      USA <i class="fa fa-location-arrow"></i>
                    </p>
                  </div>
                </div>
                <div class="col-xs-8 col-sm-8 col-md-8 text-left ">
                  <div class="receipt-rig">
                    <h3 className="text-bold">Informations du client</h3>
                    <p>
                      <b>Nom:</b> John Doe
                    </p>
                    <p>
                      <b>Mobile :</b> +1 12345-4569
                    </p>
                  
                    <p>
                      <b>Address :</b> New York, USA
                    </p>
                    <p>
                        <b>
                            N CNIB:
                        </b> {" "}
                        123456789
                    </p>
                    <div class="receipt-left mt-5">
                      <h3>FACTURE# 102</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="receipt-header receipt-header-mid  d-flex
                justify-content-center align-items-center
                "
              >
                <h2 className="text-bold">Informations de la moto</h2>
              </div>
            </div>

            <div>
              <table class="table table-bordered">
                <thead class="thead-dark">
                  <tr>
                    <th scope="col" className="fs-4">
                      Numero de serie
                    </th>
                    <th scope="col" className="fs-4">
                      Marque
                    </th>
                    <th scope="col" className="fs-4">
                      Modele
                    </th>
                    <th scope="col" className="fs-4">
                      Couleur
                    </th>
                    <th scope="col" className="fs-4">
                      Prix
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row" className="fs-4">
                      10101010101010
                    </th>
                    <td className="fs-4">Yamaha</td>
                    <td className="fs-4">Sirius</td>
                    <td className="fs-4">Blanc</td>
                    <td className="fs-4">500.000fr</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div
              class=" receipt-header receipt-header-mid  d-flex
                justify-content-center align-items-center mt-1
                "
            >
              <h2 className=" fs-1">Paiements</h2>
            </div>
            <div className="mt-3">
              <table class="table table-bordered">
                <thead class="thead-dark">
                  <tr>
                    <th scope="col" className="fs-4">
                      Montant payé
                    </th>
                    <th scope="col" className="fs-4">
                      Montant du   
                    </th>
                    <th scope="col" className="fs-4">
                      Total 
                    </th>
                    {/* <th scope="col" className="fs-4">
                     
                    </th>
                    <th scope="col" className="fs-4">
                      Prix
                    </th> */}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row" className="fs-4">
                      500.000fr
                    </th>
                    <td className="fs-4">
                        0fr
                    </td>
                   <td className="fs-4">
                        500.000fr
                   </td>
                    {/*  <td className="fs-4">Blanc</td>
                    <td className="fs-4">500.000fr</td> */}
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="row mt-5 py-5">
              <div class="receipt-header receipt-header-mid receipt-footer">
                <div class="col-xs-8 col-sm-8 col-md-8 text-left">
                  <div class="receipt-right">
                   
                      <h1 className="fs-3" >
                        Signature du client
                      </h1>
                    
                    
                  </div>
                </div>
                <div class="col-xs-4 col-sm-4 col-md-4">
                  <div class="receipt-left">
                   
                        
                    <h1  className="fs-4 py-1">
                      Date: <b>12/12/2021</b>

                    </h1>
                   
                    <h1 className="fs-5 py-5">

                        Merci pour votre achat !
                    </h1>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PDF;
