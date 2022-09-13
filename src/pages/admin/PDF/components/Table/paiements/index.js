import { View, StyleSheet, Text } from '@react-pdf/renderer';
import { Header } from './header';



const thDefaultProps = {
  
  color: '#00072B',
  fontSize: '12px',
  fontWeight: 400,
};

const styles = StyleSheet.create({
  tableContainer: {
    
    margin: '0 20px',
    border : '1px solid #DFE2E9',
  },
  container: {
    flexDirection: 'row',
    flexGrow: 1,
    textAlign: 'center',
    padding: '10px 0',
    borderBottomColor: '#00072B',
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',

    
   
  },
  name: {
    width: '35%',
    textAlign: 'center',
    ...thDefaultProps,
  },
  function: {
    width: '25%',
    ...thDefaultProps,
    textAlign: 'center',
  },
  hours: {
    width: '20%',
    ...thDefaultProps,
    textAlign: 'center',
  },
  value: {
    width: '20%',
    ...thDefaultProps,
    textAlign: 'center',
  },
 
});

export const Tables = ( 
    {
        montant_paye ,
        montant_restant ,
        date_versement ,
        total ,
    }
) => (
  <View style={styles.tableContainer}>
    <Header />
  
    <View style={styles.container}>
    <Text style={styles.name}>
        {montant_paye} FCFA
    </Text>
    <Text style={styles.function}>
        {montant_restant} FCFA
    </Text>
    <Text style={styles.hours}>
        {date_versement}
    </Text>
    <Text style={styles.value}>
        {total} FCFA
    </Text>
   
  </View>
   
   
  </View>
);

