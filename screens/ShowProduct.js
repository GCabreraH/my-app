import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
//Importar Firebase
import appFirebase from '../credenciales'
import {getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoct} from 'firebase/firestore'
import { useEffect, useState } from 'react';
const db = getFirestore(appFirebase)

export default function ShowProduct(props) {

  const [product, setProduct] = useState({})

  const getOneProduct = async(id)=>{
    try{
      const docRef = doc(db, 'productos', id)
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
    await deleteDoc(doc(db,'productos', id))
    Alert.alert('exito', 'Persona eliminada con exito')
    props.navigation.navigate('List')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo} >Detalle de Personas</Text>
      
      <Text style={styles.sub}>Nombre: {product.nombre}</Text>
      <Text style={styles.sub}>Apellido paterno: {product.apellido_paterno}</Text>
      <Text style={styles.sub}>Apellido materno: {product.apellido_materno}</Text>
      <Text style={styles.sub}>Rut: {product.rut}</Text>
      <Text style={styles.sub}>Direccion: {product.direccion}</Text>
      <Text style={styles.sub}>Numero: {product.numero}</Text>
      <Text style={styles.sub}>Comuna: {product.comuna}</Text>
      <Text style={styles.sub}>Region: {product.region}</Text>
      <Text style={styles.sub}>Telefono: {product.telefono}</Text>

      <TouchableOpacity style={styles.BotonLista} onPress={()=>deleteProduct(props.route.params.productoId)}>
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