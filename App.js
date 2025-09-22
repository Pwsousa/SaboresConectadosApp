// App.js (na raiz do projeto)
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';

// Import das telas
import Home from './src/screens/Home';
import Inicio from './src/screens/Inicio';
import MesaDetalhes from './src/screens/MesaDetalhes';
import Mesas from './src/screens/Mesas';
import NovaMesa from './src/screens/NovaMesa';
import Refeicoes from './src/screens/Refeicoes';

import { registerRootComponent } from 'expo';
// Telas placeholder para as que não foram especificadas
function Busca() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Tela de Busca</Text>
    </View>
  );
}

function Pedidos() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Tela de Pedidos</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Inicio" component={Inicio} options={{ headerShown: false }} />
        <Stack.Screen name="Refeicoes" component={Refeicoes} options={{ headerShown: false }} />
        <Stack.Screen name="Mesas" component={Mesas} options={{ headerShown: false }} />
        <Stack.Screen name="MesaDetalhes" component={MesaDetalhes} options={{ headerShown: false }} />
        <Stack.Screen name="NovaMesa" component={NovaMesa} options={{ headerShown: false }} />
        <Stack.Screen name="Busca" component={Busca} options={{ headerShown: false }} />
        <Stack.Screen name="Pedidos" component={Pedidos} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
registerRootComponent(App);