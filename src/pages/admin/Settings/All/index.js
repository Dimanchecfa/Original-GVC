import React from 'react'
import Card from '../../../../components/Card'
import PageHeader from '../../../../components/pageheader'

const Settings = () => {
    return (
        <><PageHeader title='Settings' />
            <div className='row mt-5'>
                
                <div className='col-md-3 offset-md-1'>
                    <Card title='Nombres de commerciales' svg={<i class="fas fa-box"></i>} route='/all_commerciale' data="5" button='Details'/>
                </div>
                <div className='col-md-3 offset-md-1'>
                    <Card title='Nombres de Marques' svg={<i class="fas fa-box"></i>} route='/all_marque' data="5" button='Details'/>
                </div>
                <div className='col-md-3 offset-md-1'>
                    <Card title='Nombres de Modeles' svg={<i class="fas fa-box"></i>} route='/all_modele' data="5" button='Details'/>
                </div>
            </div>
        </>
    )
}

export default Settings
