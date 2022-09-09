import React from 'react'
import { useNavigate } from 'react-router-dom';

const Card = ({ title , svg , route , state , data , button , unite}) => {
    const navigate = useNavigate(); 
     return (
      
        <>
            <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col mt-0">
                <h5 class="card-title">{ title }</h5>
              </div>

              <div class="col-auto">
                <div class="stat text-primary">
                    { svg }
                </div>
              </div>
            </div>
            <h1 class="mt-1 mb-3 offset-2">{ data } { unite }</h1>
            <div class="mb-0">
             
               
               
              
                
                 <button class="offset-md-4 btn btn-primary" onClick={()=> {
                        navigate(route, {state : {state}});
                    }
                }
                    >{ button }</button>
                
              
            </div>
          </div>
        </div>
        </>
    )
}

export default Card
