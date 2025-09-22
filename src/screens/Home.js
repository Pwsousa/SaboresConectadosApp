import { Text, TouchableOpacity, View } from 'react-native';
import Header from '../components/Header';
import { styles } from '../styles/styles';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Inicio')}>
          <Text style={styles.buttonText}>Início</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('NovaMesa')}>
          <Text style={styles.buttonText}>Nova Mesa</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}