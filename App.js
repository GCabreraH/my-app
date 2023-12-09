import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

//Importar los componentes
import ListProducts from './screens/ListProducts';
import CreateProduct from './screens/CreateProduct';
import ShowProduct from './screens/ShowProduct';

export default function App() {
  const Stack = createStackNavigator();
  function MyStack(){
    return(
      <Stack.Navigator>
        <Stack.Screen name='List' component={ListProducts}/>
        <Stack.Screen name='Create' component={CreateProduct}/>
        <Stack.Screen name='Show' component={ShowProduct}/>
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
