import { View, StyleSheet } from '@react-pdf/renderer';
import { Header } from './header';
import { Row } from './row';


const styles = StyleSheet.create({
  tableContainer: {
    
    margin: '0 20px',
    border : '1px solid #DFE2E9',
  },
});

export const Tables = ( 
    {
        montant_paye ,
        montant_restant ,
        date__versement ,
        total ,
    }
) => (
  <View style={styles.tableContainer}>
    <Header />
  
      <Row 
        montant_paye = {montant_paye}
        montant_restant = {montant_restant}
        date__versement = {date__versement}
        total = {total}

      />
   
   
  </View>
);

