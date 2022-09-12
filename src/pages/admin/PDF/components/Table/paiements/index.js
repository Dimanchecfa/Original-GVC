import { View, StyleSheet } from '@react-pdf/renderer';
import { Header } from './header';
import { Row } from './row';


const styles = StyleSheet.create({
  tableContainer: {
    
    margin: '0 20px',
    border : '1px solid #DFE2E9',
  },
});

export const Tables = () => (
  <View style={styles.tableContainer}>
    <Header />
  
      <Row 
        montant_paye = "1000"
        montant_restant = "2000"
        date__versement = "2020-10-10"
        total = "3000"
      />
   
   
  </View>
);

