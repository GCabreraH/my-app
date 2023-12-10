import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';


export default function ShowQuote(props) {

    return (
    <View style={styles.container}>
      <Text style={styles.titulo} >Detalle de Cotizacion</Text>
      
      <Text style={styles.sub}>Cliente: Maria Cespedes</Text>
      <Text style={styles.sub}>Ciudad: Santiago</Text>
      <Text style={styles.sub}>Trabajo 1: Pintar habitación de 25m2 con reparación de muros : <TextInput placeholder='Ingrese valor' style={styles.TextoCosto} /></Text>
      <Text style={styles.sub}>Trabajo 2: Instalar lavaplatos : <TextInput placeholder='Ingrese valor' style={styles.TextoCosto} /></Text>
      <Text style={styles.sub}>Trabajo 3: Cambiar apliqué de cocina: <TextInput placeholder='Ingrese valor' style={styles.TextoCosto} /></Text>
   
      <TouchableOpacity style={styles.BotonLista} onPress={()=>alert('La cotización ha sido ingresada')}>
         <Text style={styles.TextoBoton}>Cotizar trabajo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  titulo:{
    textAlign:'center',
    marginTop:10,
    marginBottom:10,
    fontSize:20
  },
  sub:{
    fontSize:16
  },
  
  BotonLista: {
    backgroundColor: 'green',
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    marginBottom: 3,
    padding: 5,
    marginTop: 5,
  },
  TextoNombre:{
    fontSize:16,
    textAlign:'left',
    color:'black',
    fontWeight: 'bold',    
  },
  TextoBoton:{
    fontSize:16,
    textAlign:'center',
    color:'white',
    fontWeight: 'bold',        
  },
  TextoCosto:{
    fontSize:16,
    textAlign:'left',
    color:'black',
    fontWeight: 'bold',
  },
  inputgroup:{
    flex:1,
    padding:0,
    marginBottom:20,
    borderBottomWidth:1,
    borderBottomColor:'#cccccc'
  },
});