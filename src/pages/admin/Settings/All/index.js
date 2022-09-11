import React, { useEffect } from 'react'
import { HTTP_CLIENT } from '../../../../api/client';
import Card from '../../../../components/Card'
import PageHeader from '../../../../components/pageheader'

const Settings = () => {
    const [commerciale , setCommerciale] = React.useState([]);
    const [marque , setMarque] = React.useState([]);
    const [modele , setModele] = React.useState([]);

    const fetchCommerciale = async () => {
        await HTTP_CLIENT.get("http://localhost:8000/api/commerciale")
            .then((response) => {
                setCommerciale(response.data?.data);
                console.log(commerciale);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    const fetrchMarque = async () => {
        await HTTP_CLIENT.get("http://localhost:8000/api/marque")
            .then((response) => {
                setMarque(response.data?.data);
                console.log(marque);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    const fetchModele = async () => {
        await HTTP_CLIENT.get("http://localhost:8000/api/model")
            .then((response) => {
                setModele(response.data?.data);
                console.log(modele);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    useEffect(() => {
        (async () => fetchCommerciale())();
        (async () => fetrchMarque())();
        (async () => fetchModele())();
    }, []);

    return (
        <><PageHeader title='Settings' />
            <div className='row mt-5'>
                
                <div className='col-md-3 offset-md-1'>
                    <Card title='Nombres de commerciales' svg={<i class="fas fa-box"></i>} route='/all_commerciale' data={commerciale.length} button='Details'/>
                </div>
                <div className='col-md-3 offset-md-1'>
                    <Card title='Nombres de Marques' svg={<i class="fas fa-box"></i>} route='/all_marque' data={marque?.length} button='Details'/>
                </div>
                <div className='col-md-3 offset-md-1'>
                    <Card title='Nombres de Modeles' svg={<i class="fas fa-box"></i>} route='/all_modele' data={modele?.length} button='Details'/>
                </div>
            </div>
        </>
    )
}

export default Settings
