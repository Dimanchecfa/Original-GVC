import { View, StyleSheet } from '@react-pdf/renderer';
import { Header } from './header';
import { Row } from './row';
import { Footer } from './footer';

const styles = StyleSheet.create({
  tableContainer: {
    
    margin: '0 20px',
    border : '1px solid #DFE2E9',
  },
});

export const Table = (
  {
   numero_serie ,
    marque ,
    modele ,
    couleur ,
    prix ,
    
  }
) => (
  <View style={styles.tableContainer}>
    <Header />
  
      <Row 
        numero_serie = {numero_serie}
        marque = {marque}
        modele = {modele}
        couleur = {couleur}
        prix = {prix}
      />
   
   
  </View>
);

