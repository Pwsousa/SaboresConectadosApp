import { View } from 'react-native';
import BottomNav from '../components/BottomNav';
import Header from '../components/Header';
import MenuGrid from '../components/MenuGrid';
import { styles } from '../styles/styles';

export default function Inicio({ navigation }) {
  return (
    <View style={styles.container}>
      <Header />
      <MenuGrid navigation={navigation} />
      <BottomNav navigation={navigation} currentScreen="Inicio" />
    </View>
  );
}