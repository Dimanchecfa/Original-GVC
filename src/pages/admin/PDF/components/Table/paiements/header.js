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
    width: '30%',
    paddingLeft: '10px',
    textAlign: 'center',
    ...thDefaultProps,
  },
  function: {
    width: '20%',
    ...thDefaultProps,
    textAlign: 'center',
   
  },
  hours: {
    width: '15%',
    ...thDefaultProps,
    textAlign : 'center'
  },
  value: {
    width: '15%',
    ...thDefaultProps,
    textAlign : 'center' 
  },
  total: {
    width: '20%',
    paddingRight: '10px',
    ...thDefaultProps,
    textAlign : 'center',
  },
});

export const Header = () => (
  <View style={styles.container} fixed>
    <Text style={styles.name}>Montant Paye</Text>
    <Text style={styles.function}>Montant restant</Text>
    <Text style={styles.hours}>Date limite de paiement</Text>
    <Text style={styles.value}>Total</Text>
    
  </View>
);

