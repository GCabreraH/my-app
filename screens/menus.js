import React from 'react';
import { StyleSheet, Text, ScrollView, TouchableOpacity, View } from 'react-native';

export default function Menu(props) {
  return (
    <ScrollView>
      <View>
        <Text style={styles.TextoTitulo}>Menú de Navegación</Text>
      </View>

      <TouchableOpacity style={styles.Boton} onPress={() => props.navigation.navigate('Create')}>
        <Text style={styles.TextoBoton}>Crear Nueva Persona</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.Boton} onPress={() => props.navigation.navigate('List')}>
        <Text style={styles.TextoBoton}>Ver Listado de Personas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.BotonEmpresa} onPress={() => props.navigation.navigate('CreateCompany')}>
        <Text style={styles.TextoBoton}>Crear Nueva Empresa (mock up)</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.BotonEmpresa} onPress={() => props.navigation.navigate('CompanyList')}>
        <Text style={styles.TextoBoton}>Ver Empresas (mock up)</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.BotonCotizacion} onPress={() => props.navigation.navigate('CreateQuote')}>
        <Text style={styles.TextoBoton}>Crear Nueva cotización (mock up)</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.BotonCotizacion} onPress={() => props.navigation.navigate('ListQuote')}>
        <Text style={styles.TextoBoton}>Ver Cotizaciones (mock up)</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Boton: {
    backgroundColor: '#ADD8E6',
    height: 35,
    borderColor: 'white',
    borderWidth: 1,
  },
  BotonEmpresa: {
    backgroundColor: 'cyan',
    height: 35,
    borderColor: '#ADD8E6',
    borderWidth: 1,
  },
  BotonCotizacion: {
    backgroundColor: '#eeb600',
    height: 35,
    borderColor: '#ADD8E6',
    borderWidth: 1,
  },
  TextoBoton: {
    fontSize: 18,
    textAlign: 'center',
  },
  TextoTitulo: {
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 10,
    fontSize: 18,
    fontWeight: 'bold',
    
  },
  TextoNombre: {
    fontSize: 16,
    textAlign: 'center',
  },
  BotonLista: {
    backgroundColor: '#DDDDDD',
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    marginBottom: 3,
    padding: 5,
  },
});