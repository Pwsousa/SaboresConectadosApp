// App.js (na RAIZ do projeto)
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';

// Import de todas as telas
import { registerRootComponent } from 'expo';
import Bebidas from './src/screens/Bebidas';
import Home from './src/screens/Home';
import Inicio from './src/screens/Inicio';
import MesaDetalhes from './src/screens/MesaDetalhes';
import Mesas from './src/screens/Mesas';
import NovaMesa from './src/screens/NovaMesa';
import Petiscos from './src/screens/Petiscos';
import Porcoes from './src/screens/Porcoes';
import Refeicoes from './src/screens/Refeicoes';
import Sobremesas from './src/screens/Sobremesas';
import Sucos from './src/screens/Sucos';

// Telas placeholder
function Busca() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 18 }}>Tela de Busca - Em Desenvolvimento</Text>
    </View>
  );
}

function Pedidos() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 18 }}>Tela de Pedidos - Em Desenvolvimento</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

// Componente principal
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Inicio" component={Inicio} options={{ headerShown: false }} />
        <Stack.Screen name="Refeicoes" component={Refeicoes} options={{ headerShown: false }} />
        <Stack.Screen name="Petiscos" component={Petiscos} options={{ headerShown: false }} />
        <Stack.Screen name="Bebidas" component={Bebidas} options={{ headerShown: false }} />
        <Stack.Screen name="Porcoes" component={Porcoes} options={{ headerShown: false }} />
        <Stack.Screen name="Sucos" component={Sucos} options={{ headerShown: false }} />
        <Stack.Screen name="Sobremesas" component={Sobremesas} options={{ headerShown: false }} />
        <Stack.Screen name="Mesas" component={Mesas} options={{ headerShown: false }} />
        <Stack.Screen name="MesaDetalhes" component={MesaDetalhes} options={{ headerShown: false }} />
        <Stack.Screen name="NovaMesa" component={NovaMesa} options={{ headerShown: false }} />
        <Stack.Screen name="Busca" component={Busca} options={{ headerShown: false }} />
        <Stack.Screen name="Pedidos" component={Pedidos} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Exportação padrão
registerRootComponent(App);