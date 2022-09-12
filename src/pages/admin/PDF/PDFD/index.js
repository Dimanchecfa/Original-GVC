import { View, StyleSheet, Text, Image } from '@react-pdf/renderer';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Table } from '../components/Table';
import { Tables } from '../components/Table/paiements';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: '30px',
    
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
    marginBottom: '20px',
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
    paddingTop : '155px' ,
   
  },
});

export const InvoiceInfo = () => {
  const location = useLocation();
  const { state } = location;
  useEffect(() => {
    console.log(state);
  }, []);

  return (
 <>
  <View style={styles.header}>
    <View>
        
            
      <Text style={styles.headerTitle}>
        Information de l'entreprise
      </Text>
      <View style={styles.address}>
        <Text>
          Nom de l'entreprise : <Text style={{ fontWeight: 700 }}>Nom de l'entreprise</Text>

        </Text>
        <Text>
          Adresse : <Text style={{ fontWeight: 700 }}>Adresse</Text>
        </Text>
        <Text>
          Ville : <Text style={{ fontWeight: 700 }}>Ville</Text>
        </Text>
        <Text>
          Contact : <Text style={{ fontWeight: 700 }}>Numero de telephone</Text>
        </Text>
      </View>
     
         
    </View>

    <View>
      <Text style={styles.headerTitle}>Informations du client</Text>
      <View style={styles.address}>
        <Text>
          Nom du client : <Text style={{ fontWeight: 700 }}>John Doe</Text>
        </Text>
        <Text>
          Numero de telephone : <Text style={{ fontWeight: 700 }}>+55 51 99999-9999</Text>
        </Text>
        <Text>
          Adresse : <Text style={{ fontWeight: 700 }}>Rua ABC, 123</Text>
        </Text>
        <Text>
          Numero d 'idendite : <Text style={{ fontWeight: 700 }}>000.000.000-00</Text>
        </Text>
      </View>
      <View>
      <Text style={styles.addres}>
          FACRURE-001
        </Text>
      </View>
    </View>
  </View>
  <View style={styles.Motos}>
    <View style={styles.Moto} >
      <Text style={styles.headerMoto}>Informations de la moto</Text>
    </View>
    <Table 
    numero_serie="Numero de serie"
    marque="Marque"
    modele="Modele"
    couleur="Couleur"
    prix="Prix"
    />
  </View>
  <View>
    <View style={styles.Moto} >
      <Text style={styles.headerMoto}>Paiements</Text>
    </View>
    <Tables 
    montant_paye="1000"
    montant_restant="1000"
    date__versement="2021-01-01"
    total="3000"
    />
  </View>
  <View style={styles.header}>
    <View>
        
            
      <Text style={styles.DateTitle}>
        Date: <Text style={{ fontWeight: 700 }}>Date de la facture</Text>
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
