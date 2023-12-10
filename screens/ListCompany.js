import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, ScrollView, TextInput, Button, Alert } from 'react-native';

export default function CompanyList(props) {
  // Definir una lista de ejemplo (puedes ajustarla según tus necesidades)
  const listaEmpresas = [
    { id: 1, rut: '12345678-9', nombre: 'Empresa A' },
    { id: 2, rut: '98765932-7', nombre: 'Empresa B' },
    { id: 2, rut: '18763532-4', nombre: 'Empresa C' },
    { id: 2, rut: '8765439-3', nombre: 'Empresa D' },
    { id: 2, rut: '98765934-8', nombre: 'Empresa E' },
    { id: 2, rut: '98765337-2', nombre: 'Empresa F' },
    { id: 2, rut: '98765238-5', nombre: 'Empresa G' },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Listado de Empresas</Text>

      {/* Renderizar la lista de empresas con datos en duro de la const listaEmpresas */}
      {listaEmpresas.map((empresa) => (
        <TouchableOpacity key={empresa.id} style={styles.BotonLista} onPress={() => props.navigation.navigate('ShowCompany')}
        >
          <Text style={styles.TextoNombre}>Rut: {empresa.rut}</Text>
          <Text style={styles.TextoNombre}>Nombre: {empresa.nombre}</Text>
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