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
    width: '30%',
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
    textAlign: 'center',
  },
  value: {
    width: '15%',
    ...thDefaultProps,
    textAlign: 'center',
  },
  total: {
    width: '20%',
    ...thDefaultProps,
  },
});

export const Row = (
    {
        numero_serie ,
        marque ,
        modele ,
        couleur ,
        prix ,
    }

) => (
  <View style={styles.container}>
    <Text style={styles.name}>{numero_serie},</Text>
    <Text style={styles.function}>{marque},</Text>
    <Text style={styles.hours}> {modele} ,</Text>
    <Text style={styles.value}>{couleur} ,</Text>
    <Text style={styles.total}>{prix} ,</Text>
  </View>
);
