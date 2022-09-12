import { Text, View, StyleSheet } from '@react-pdf/renderer';

const thDefaultProps = {
  
  color: '#00072B',
  fontSize: '12px',
  fontWeight: 400,
};

const styles = StyleSheet.create({
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

export const Row = (
    {
        montant_paye ,
        montant_restant ,
        date__versement ,
        total ,
    }
) => (
  <View style={styles.container}>
    <Text style={styles.name}>
        {montant_paye}
    </Text>
    <Text style={styles.function}>
        {montant_restant}
    </Text>
    <Text style={styles.hours}>
        {date__versement}
    </Text>
    <Text style={styles.value}>
        {total}
    </Text>
   
  </View>
);
