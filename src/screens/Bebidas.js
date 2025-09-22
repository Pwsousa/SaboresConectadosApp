import { View } from 'react-native';
import BottomNav from '../components/BottomNav';
import Header from '../components/Header';
import ItemList from '../components/ItemList';
import { bebidas } from '../data/mockData';
import { styles } from '../styles/styles';

export default function Bebidas({ navigation }) {
  return (
    <View style={styles.container}>
      <Header />
      <ItemList title="Bebidas" data={bebidas} navigation={navigation} />
      <BottomNav navigation={navigation} currentScreen="Inicio" />
    </View>
  );
}