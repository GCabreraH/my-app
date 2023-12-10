import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Button, Alert, TouchableOpacity } from 'react-native';


export default function CreateQuote(props) {
  
  return (
   <ScrollView style={styles.container}>
    <Text style={styles.titulo}>Crear Cotización</Text>

  
    <Text style={styles.TextoNombre}>Cliente: Alfredo Vargas</Text>
    <Text style={styles.TextoNombre}>Ciudad: Santiago</Text>
    <Text style={[styles.TextoNombre, styles.Espaciador]}>Dirección: Compañia 1520</Text>
   
    <View style={styles.inputgroup}>
      <TextInput placeholder='Trabajo 1'/>
    </View>

    <View style={styles.inputgroup}>
      <TextInput placeholder='Trabajo 2'/>
    </View>

    <View style={styles.inputgroup}>
      <TextInput placeholder='Trabajo 3'/>
    </View>

    <View style={styles.inputgroup}> 
      <TextInput placeholder='Región'/>
    </View>

    <TouchableOpacity style={styles.BotonLista} onPress={()=>alert('Cotización creada correctamente')}>
         <Text style={styles.TextoBoton}>Crear Cotización</Text>
      </TouchableOpacity>

   </ScrollView>
  );
}

const styles = StyleSheet.create({
  titulo:{
    textAlign:'center',
    fontSize:18,
    marginTop:12,
    marginBottom:20
  },  
  container:{
    flex:1,
    padding:35
  },  
  inputgroup:{
    flex:1,
    padding:0,
    marginBottom:20,
    borderBottomWidth:1,
    borderBottomColor:'#cccccc',
    fontWeight: 'bold',
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
  Espaciador: {
    marginBottom: 20,
  },
});