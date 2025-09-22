import { View } from 'react-native';
import BottomNav from '../components/BottomNav';
import Header from '../components/Header';
import ItemList from '../components/ItemList';
import { sucos } from '../data/mockData';
import { styles } from '../styles/styles';

export default function Sucos({ navigation }) {
  return (
    <View style={styles.container}>
      <Header />
      <ItemList title="Sucos" data={sucos} navigation={navigation} />
      <BottomNav navigation={navigation} currentScreen="Inicio" />
    </View>
  );
}