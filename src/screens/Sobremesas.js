import { View } from 'react-native';
import BottomNav from '../components/BottomNav';
import Header from '../components/Header';
import ItemList from '../components/ItemList';
import { sobremesas } from '../data/mockData';
import { styles } from '../styles/styles';

export default function Sobremesas({ navigation }) {
  return (
    <View style={styles.container}>
      <Header />
      <ItemList title="Sobremesas" data={sobremesas} navigation={navigation} />
      <BottomNav navigation={navigation} currentScreen="Inicio" />
    </View>
  );
}