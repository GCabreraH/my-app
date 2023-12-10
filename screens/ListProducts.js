import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
//Importar Firebase
import appFirebase from '../credenciales'
import {getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoct} from 'firebase/firestore'
import { useEffect, useState } from 'react';
const db = getFirestore(appFirebase)


export default function ListProducts(props) {
  
  const [lista, setLista] = useState([])

  // logica para llamara la lista de documentos de la coleccion proteinas
  useEffect(() => {
    const getLista = async()=>{
        try {
            const querySnapshot = await getDocs(collection(db, 'productos'))
            const docs = []
            querySnapshot.forEach((doc)=>{
                const {nombre, rut, direccion,numero} = doc.data()
                docs.push({
                    id:doc.id,
                    nombre,
                    rut,
                    direccion,
                    numero,
                })
            })
            setLista(docs);
        } catch (error) {
            console.log(error);
        }
    }
    getLista()
}, [lista])

  return (
    <ScrollView>
      <TouchableOpacity style={styles.Boton} onPress={()=>props.navigation.navigate('Create')}>
        <Text style={styles.TextoBoton}>Agregar Persona</Text>
      </TouchableOpacity>

      <View>
        <Text style={styles.TextoTitulo}>Lista de Personas</Text>
      </View>

      <View>
      {
          lista.map((list)=>(
            <TouchableOpacity key={list.id} style={styles.BotonLista} onPress={()=>props.navigation.navigate('Show',{productoId:list.id})}>
                <Text style={styles.TextoNombre}>Rut: {list.rut}</Text>
                <Text style={styles.TextoNombre}>Nombre: {list.nombre}</Text>
                <Text style={styles.TextoNombre}>Direccion: {list.direccion}</Text>
                <Text style={styles.TextoNombre}>Número: {list.numero}</Text>
            </TouchableOpacity>
          ))
        }
      </View>
      <View>
      <TouchableOpacity style={styles.BotonEmpresa}>
        <Text style={styles.TextoBoton}>Crear nueva Empresa(mock up)</Text>
      </TouchableOpacity>
        <Text style={styles.TextoTitulo}>Lista de Empresas (mock up)</Text>
        <TouchableOpacity style={styles.BotonLista}>
                <Text style={styles.TextoNombre}>Rut: 76.528.451-5</Text>
                <Text style={styles.TextoNombre}>Nombre: Arreglatodo S.A </Text>
                <Text style={styles.TextoNombre}>Dirección: Victoria 975, Santiago Centro </Text>
                <Text style={styles.TextoNombre}>Especialidad: Remodelaciones menores</Text>
        </TouchableOpacity>        
        <TouchableOpacity style={styles.BotonLista}>
                <Text style={styles.TextoNombre}>Rut: 77.124.900-0</Text>
                <Text style={styles.TextoNombre}>Nombre: Constructora Nahmias Ltda. </Text>
                <Text style={styles.TextoNombre}>Dirección: Alfredo Barros Errázuriz 1953 Of. 1004, Providencia Santiago </Text>
                <Text style={styles.TextoNombre}>Especialidad: Constructora Habitacional</Text>
        </TouchableOpacity>
            
      </View>
    </ScrollView>
  );
}

  const styles = StyleSheet.create({
    Boton:{
      backgroundColor:'#ADD8E6',
       height:35,
       borderColor:'#ADD8E6',
      borderWidth:1     
    },
    BotonEmpresa:{
      backgroundColor:'cyan',
       height:35,
       borderColor:'#ADD8E6',
      borderWidth:1     
    },
    TextoBoton:{
      fontSize:18,
      textAlign:'center'
    },
    TextoTitulo:{
      textAlign:'center',
      marginTop:20,
      marginBottom:10,
      fontSize:18
    },  
    TextoNombre:{
      fontSize:16
    },
    BotonLista:{
      backgroundColor:'#DDDDDD',
      borderBottomWidth:1,
      borderBottomColor:'#cccccc',
      marginBottom:3,
      padding:5
    }
});