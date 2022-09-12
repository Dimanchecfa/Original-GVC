import { Text, View, StyleSheet } from '@react-pdf/renderer';

const thDefaultProps = {
  
  color: '#FFFFFF',
  fontSize: '12px',
  fontWeight: 600,
  paddingBottom: '5px',
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexGrow: 1,
    borderBottom: '1px solid #DFE2E9',
    textAlign: 'right',
    padding : '10px 0',
    borderBottom : '1px solid #DFE2E9',
    backgroundColor: '#00072B',
  
  },
  name: {
    width: '35%',
    paddingLeft: '10px',
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
    textAlign : 'center'
  },
  value: {
    width: '20%',
    ...thDefaultProps,
    textAlign : 'center' 
  },
 
});

export const Header = ( { 
    montant_paye ,
    montant_restant ,
    date__versement ,
    
}) => (
  <View style={styles.container} fixed>
    <Text style={styles.name}>Montant Paye</Text>
    <Text style={styles.function}>Montant restant</Text>
    <Text style={styles.hours}>Date limite de paiement</Text>
    <Text style={styles.value}>Total</Text>
    
  </View>
);

