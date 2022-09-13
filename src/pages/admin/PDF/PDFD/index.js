import { View, StyleSheet, Text, Image } from '@react-pdf/renderer';
import { Tables } from '../components/Table/paiements';
import { Table }  from "../components/Table";
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { HTTP_CLIENT } from '../../../../api/client';
import { alertClosed } from '../../../../components/notification';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: '25px',
    
  },
  headerTitle: {
    fontWeight: 700,
    fontSize: '15px',
    color: '#00072B',   
    marginBottom: '20px',
    textDecoration: 'underline',
  },
 entreprise : {
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: '10px',
    color: '#00072B', 
  
   
  },
  address: {
    fontWeight: 400,
    fontSize: '13px',
    color: '#828282',
    textAlign: 'right',
    flexDirection: 'column',
  },
  addres: {
    fontWeight: 'bold',
    fontSize: '17px',
    color: '#00072B',
    textAlign: 'right',
    flexDirection: 'column',
    marginTop: '20px',
  },
  
  addresse: {
    fontWeight: 400,
    //noir
    color : '#00072B',
    textAlign: 'right',
    paddingTop: '50px',
    flexDirection: 'column',
    textDecoration: 'underline',
  },
  Moto : {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding : '20px 0px',
  } ,
  Motos : {
   
    padding : '30px 0px',
  } ,
  headerMoto : {
    fontWeight: 700,
    fontSize: '15px',
    color: '#00072B',   
    marginBottom: '18px',
    textDecoration: 'underline',
  },
  footerTitle : {
    fontWeight: 700,
    fontSize: '15px',
    color: '#00072B',
   paddingTop : '150px' ,
    textDecoration: 'underline',
  },
  DateTitle : {
    fontWeight: 700,
    fontSize: '13px',
    color: '#00072B',
    paddingTop : '150px' ,
   
  },
});

export const InvoiceInfo = () => {
  useEffect(() => {
    (async () => fetchLastVente())();
  }, []);

  const [lastVente , setLastVente] = useState([]);
  const fetchLastVente = async () => {
    await HTTP_CLIENT.get("/last_vente")
    .then((response) => {
        const data = response?.data?.data;
        setLastVente(data);
        console.log(data);
        setTimeout(() => {
            alertClosed();
        }, 500);
    })
    .catch((error) => {
        console.log(error);
    });
  }



 
 
   

  return (
 <>
  <View style={styles.header}>
    <View>
        
            
      <Text style={styles.headerTitle}>
        Information de l'entreprise
      </Text>
      <View style={styles.address}>
        <Text>
          Nom de l'entreprise : <Text style={{ fontWeight: 700 }}>{
            lastVente?.pseudo_commerciale
          }</Text>

        </Text>
        <Text>
          Adresse : <Text style={{ fontWeight: 700 }}>
            Goughin , Avenue kwame Nkrumah
          </Text>
        </Text>
        <Text>
          Ville : <Text style={{ fontWeight: 700 }}>
            Ouagadougou
          </Text>
        </Text>
        <Text>
          Contact : <Text style={{ fontWeight: 700 }}>
            70 00 00 00
          </Text>
        </Text>
      </View>
     
         
    </View>

    <View>
      <Text style={styles.headerTitle}>Informations du client</Text>
      <View style={styles.address}>
        <Text>
          Nom du client : <Text style={{ fontWeight: 700 }}>
            {lastVente?.nom_client}
          </Text>
        </Text>
        <Text>
          Numero de telephone : <Text style={{ fontWeight: 700 }}>
            {lastVente?.numero_client}
          </Text>
        </Text>
        <Text>
          Adresse : <Text style={{ fontWeight: 700 }}>
            {lastVente?.adresse_client}
          </Text>
        </Text>
        <Text>
          Numero d 'idendite : <Text style={{ fontWeight: 700 }}>
            {lastVente?.identifiant_client}
          </Text>
        </Text>
      </View>
      <View>
      <Text style={styles.addres}>
          {lastVente?.numero_facture}
        </Text>
      </View>
    </View>
  </View>
  <View style={styles.Motos}>
    <View style={styles.Moto} >
      <Text style={styles.headerMoto}>Informations de la moto</Text>
    </View>
    <Table 
        numero_serie={lastVente?.numero_serie}
        marque={lastVente?.marque}
        modele={lastVente?.modele}
        couleur={lastVente?.couleur}
        prix = {lastVente?.prix_vente}
    />
  </View>
  <View>
    <View style={styles.Moto} >
      <Text style={styles.headerMoto}>Paiements</Text>
    </View>
    <Tables 
      montant_paye= {lastVente?.montant_verse}
      montant_restant= {lastVente?.montant_restant ?? 0}
      date_versement= {lastVente?.date_versement ?? "2022-09-13"}
    total= {lastVente?.prix_vente}
      
     
      />
  </View>
  <View style={styles.header}>
    <View>
        
            
      <Text style={styles.DateTitle}>
        Date: <Text style={{ fontWeight: 700 }}>2022-09-13</Text>
      </Text>
      <View style={styles.addresse}>
        <Text>
          <Text style={{ fontWeight: 700 }}>
            Merci pour votre confiance !
          </Text>

        </Text>
       
      </View>
     
         
    </View>

    <View>
      <Text style={styles.footerTitle}>Signature du client</Text>
     
    </View>
  </View>
  </>
  );
};
