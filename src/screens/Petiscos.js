import { View } from 'react-native';
import BottomNav from '../components/BottomNav';
import Header from '../components/Header';
import ItemList from '../components/ItemList';
import { petiscos } from '../data/mockData';
import { styles } from '../styles/styles';

export default function Petiscos({ navigation }) {
  return (
    <View style={styles.container}>
      <Header />
      <ItemList title="Petiscos" data={petiscos} navigation={navigation} />
      <BottomNav navigation={navigation} currentScreen="Inicio" />
    </View>
  );
}