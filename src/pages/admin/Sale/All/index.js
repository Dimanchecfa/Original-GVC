import React, { useEffect } from 'react'
import { EditIcon, EyeIcon } from '../../../../components/icones';
import DatePicker from "react-datepicker";
import { useState  } from 'react';

import "react-datepicker/dist/react-datepicker.css";
import PageHeader from '../../../../components/pageheader';
import { useNavigate } from 'react-router-dom';

const AllSell = () => {
    //obtenir la date en jj/mm/aaaa
    const navigate = useNavigate();
    const [startDate, setStartDate] = useState(new Date());
    useEffect(() => {
        const dateFormat = (date) => {
            const d = new Date(date);
            let month = '' + (d.getMonth() + 1);
            let day = '' + d.getDate();
            const year = d.getFullYear();
            return [day, month, year].join('/');
        }
        
      
       console.log(dateFormat(startDate));
    }, [ startDate ])


    return (
        <>
            <PageHeader title="Listes des Ventes" route={"/add_sale"} />
            <div class="col-11 offset-2 col-xxl-9 d-flex">
				<div class="card flex-fill">
					<div class=" card-header d-flex">
                        
                            <h5 class=" col-md-2 card-title">Listes des ventes</h5>
                           
                            <div class="col-md-2 offset-md-7">
                            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                            </div>

                    
					</div>
					<table class="table table-hover my-0">
						<thead>
							<tr>
								<th>Nom du client</th>
								<th class="">N du client</th>
								<th class="">Marque</th>
								<th class="">Heure</th>
								<th class="">Montant Paye</th>
								<th class="">Action</th>

								
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Project Apollo</td>
								<td class="d-none d-md-table-cell">01/01/2021</td>
								<td class="d-none d-md-table-cell">31/06/2021</td>
								<td><span class="badge bg-success">Done</span></td>
								<td class="d-none d-md-table-cell">Vanessa Tucker</td>
								<td class="d-none d-md-table-cell">
								<button class="btn btn-secondary btn-sm" onClick={
                                    ()=> {
                                        navigate("/show_sale")
                                    }
                                }> <EyeIcon/>{" "}Details</button>{" "}
                                	<button class="btn btn-primary btn-sm"
								onClick={
									() => {
										navigate('/edit_sale')
								}
								}
								> <EditIcon/>{" "}Modifier</button>
								</td>
							
							</tr>
						
							
							<tr>
								<td>Project X</td>
								<td class="d-none d-md-table-cell">01/01/2021</td>
								<td class="d-none d-md-table-cell">31/06/2021</td>
								<td><span class="badge bg-success">Done</span></td>
								<td class="d-none d-md-table-cell">Sharon Lessman</td>
								<td class="d-none d-md-table-cell">
								<button class="btn btn-secondary btn-sm" onClick={
                                    ()=> {
                                        navigate("/show_sale")
                                    }
                                }> <EyeIcon/>{" "}Details</button>{" "}
                                	<button class="btn btn-primary btn-sm"
								onClick={
									() => {
										navigate('/edit_sale')
								}
								}
								> <EditIcon/>{" "}Modifier</button>
								</td>
							</tr>
							
							<tr>
								<td>Project Wombat</td>
								<td class="d-none d-md-table-cell">01/01/2021</td>
								<td class="d-none d-md-table-cell">31/06/2021</td>
								<td><span class="badge bg-warning">In progress</span></td>
								<td class="d-none d-md-table-cell">William Harris</td>
								<td class="d-none d-md-table-cell">
								<button class="btn btn-secondary btn-sm" onClick={
                                    ()=> {
                                        navigate("/show_sale")
                                    }
                                }> <EyeIcon/>{" "}Details</button>{" "}
                                	<button class="btn btn-primary btn-sm"
								onClick={
									() => {
										navigate('/edit_sale')
								}
								}
								> <EditIcon/>{" "}Modifier</button>
								</td>

							</tr>
						</tbody>
					</table>
				</div>
			</div>
        </>
    )
    }

export default AllSell;
