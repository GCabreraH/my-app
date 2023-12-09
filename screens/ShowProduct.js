import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
//Importar Firebase
import appFirebase from '../credenciales'
import {getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoct} from 'firebase/firestore'
import { useEffect, useState } from 'react';
const db = getFirestore(appFirebase)

export default function ShowProduct(props) {

  const [persona, setProduct] = useState({})

  const getOneProduct = async(id)=>{
    try{
      const docRef = doc(db, 'personas', id)
      const docSnap = await getDoc(docRef)
      setProduct(docSnap.data())
    }
    catch(error){
      console.error(error);
    }
  }

  useEffect(()=>{
    getOneProduct(props.route.params.productoId)
  },[])

  const deleteProduct = async(id)=>{ 
    await deleteDoc(doc(db,'personas', id))
    Alert.alert('exito', 'producto eliminado con exito')
    props.navigation.navigate('List')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo} >Detalle del producto</Text>
      <Text style={styles.sub}>Rut: {persona.rut}</Text>
      <Text style={styles.sub}>Nombre: {persona.nombre}</Text>
      <Text style={styles.sub}>Apellido Paterno: {persona.apellido_paterno}</Text>
      <Text style={styles.sub}>Apellido Materno: {persona.apellido_materno}</Text>

      <TouchableOpacity style={styles.BotonLista} onPress={()=>deleteProduct(props.route.params.productoId)}>
         <Text style={styles.TextoNombre}>Eliminar Persona</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
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