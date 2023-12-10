import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Button, Alert, TouchableOpacity } from 'react-native';


export default function CreateCompany(props) {
  
  return (
   <ScrollView style={styles.container}>
    <Text style={styles.titulo}>Crear Empresa</Text>

    <View style={styles.inputgroup}>
      <TextInput placeholder='Rut'/>
    </View>

    <View style={styles.inputgroup}>
      <TextInput placeholder='Razón Social'/>
    </View>

    <View style={styles.inputgroup}>
      <TextInput placeholder='Dirección'/>
    </View>

    <View style={styles.inputgroup}>
      <TextInput placeholder='Comuna'/>
    </View>

    <View style={styles.inputgroup}> 
      <TextInput placeholder='Región'/>
    </View>

    <View style={styles.inputgroup}>
      <TextInput placeholder='Telefono'/>
    </View>

    <TouchableOpacity style={styles.BotonLista} onPress={()=>alert('Empresa eliminada correctamente')}>
         <Text style={styles.TextoNombre}>Eliminar</Text>
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
    borderBottomColor:'#cccccc'
  },
  BotonLista:{
    backgroundColor:'red',
    borderBottomWidth:1,
    borderBottomColor:'#cccccc',
    marginBottom:3,
    padding:5,
    marginTop:5
  },
});