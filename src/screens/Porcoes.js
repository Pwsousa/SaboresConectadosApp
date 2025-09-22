import { View } from 'react-native';
import BottomNav from '../components/BottomNav';
import Header from '../components/Header';
import ItemList from '../components/ItemList';
import { porcoes } from '../data/mockData';
import { styles } from '../styles/styles';

export default function Porcoes({ navigation }) {
  return (
    <View style={styles.container}>
      <Header />
      <ItemList title="Porções" data={porcoes} navigation={navigation} />
      <BottomNav navigation={navigation} currentScreen="Inicio" />
    </View>
  );
}