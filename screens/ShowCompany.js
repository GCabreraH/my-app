import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';


export default function ShowCompany(props) {

    return (
    <View style={styles.container}>
      <Text style={styles.titulo} >Detalle de Empresa</Text>
      
      <Text style={styles.sub}>Razón Social: Empresa A Ltda.</Text>
      <Text style={styles.sub}>Rut: 76.476.235-K </Text>
      <Text style={styles.sub}>Dirección: Avenida Siempre Viva 528 </Text>
      <Text style={styles.sub}>comuna: La Florida</Text>
      <Text style={styles.sub}>Region: Metropolitana </Text>
      <Text style={styles.sub}>Telefono: </Text>

      <TouchableOpacity style={styles.BotonLista} onPress={()=>alert('Empresa eliminada correctamente')}>
         <Text style={styles.TextoNombre}>Eliminar</Text>
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
  
  TextoNombre:{
    fontSize:16,
    textAlign:'center',
    color:'white',
    
  },
  BotonLista:{
    backgroundColor:'red',
    borderBottomWidth:1,
    borderBottomColor:'#cccccc',
    marginBottom:3,
    padding:5,
    marginTop:5
  }
});