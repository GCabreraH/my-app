import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

//Importar los componentes
import menus from './screens/menus';
import CreateProduct from './screens/CreateProduct';
import ShowProduct from './screens/ShowProduct';
import ListProducts from './screens/ListProducts';
import CreateCompany from './screens/CreateCompany';
import CompanyList from './screens/ListCompany';
import ShowCompany from './screens/ShowCompany';
import CreateQuote from './screens/CreateQuote';
import ListQuote from './screens/ListQuote';
import ShowQuote from './screens/ShowQuote';

export default function App() {
  const Stack = createStackNavigator();
  function MyStack(){
    return(
      <Stack.Navigator>
        <Stack.Screen name='Opciones del Sistema' component={menus}/>
        <Stack.Screen name='List' component={ListProducts}/>
        <Stack.Screen name='Create' component={CreateProduct}/>
        <Stack.Screen name='Show' component={ShowProduct}/>
        <Stack.Screen name='CreateCompany' component={CreateCompany}/>
        <Stack.Screen name='CompanyList' component={CompanyList}/>
        <Stack.Screen name='ShowCompany' component={ShowCompany}/>
        <Stack.Screen name='CreateQuote' component={CreateQuote}/>
        <Stack.Screen name='ListQuote' component={ListQuote}/>
        <Stack.Screen name='ShowQuote' component={ShowQuote}/>
        
      </Stack.Navigator>
    )
  }
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
