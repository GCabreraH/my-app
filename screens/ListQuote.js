import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, ScrollView, TextInput, Button, Alert } from 'react-native';

export default function ListQuote(props) {
  // Definir una lista de ejemplo (puedes ajustarla según tus necesidades)
  const listaCotizaciones = [
    { id: 1, cliente: 'Alfredo Vargas', ciudad: 'Santiago' },
    { id: 2, cliente: 'Maria Cespedes', ciudad: 'Santiago' },
    { id: 3, cliente: 'Josefa Marquéz', ciudad: 'Rancagua' },
    { id: 4, cliente: 'Luis Hernandez', ciudad: 'Valparaiso' },
    { id: 5, cliente: 'Carla Ramirez', ciudad: 'Viña del Mar' },
    { id: 6, cliente: 'Manuel Ortuzar', ciudad: 'Navidad' },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Listado de Cotizaciones Disponibles para Cotización</Text>

      {/* Renderizar la lista de cotizaciones con datos en duro de la const listaCotizaciones */}
      {listaCotizaciones.map((cotizacion) => (
        <TouchableOpacity key={cotizacion.id} style={styles.BotonLista} onPress={() => props.navigation.navigate('ShowQuote')}
        >
          <Text style={styles.TextoNombre}>Cliente: {cotizacion.cliente}</Text>
          <Text style={styles.TextoNombre}>Ciudad: {cotizacion.ciudad}</Text>
          <Text style={styles.TextoNombre}>Trabajo 1: Pintar habitación de 25m2 con reparación de muros </Text>   
          <Text style={styles.TextoNombre}>Trabajo 2: Instalar lavaplatos </Text>
          <Text style={styles.TextoNombre}>Trabajo 3: Cambiar apliqué de cocina </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  BotonEmpresa: {
    backgroundColor: 'cyan',
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
  },
  TextoNombre: {
    fontSize: 16,
  },
  BotonLista: {
    backgroundColor: '#DDDDDD',
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    marginBottom: 3,
    padding: 5,
  },
  titulo: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 12,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    padding: 35,
  },
  inputgroup: {
    flex: 1,
    padding: 0,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
});