import { Text, View } from 'react-native';
import { styles } from '../styles/styles';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Sabores Conectados</Text>
      <Text style={styles.subtitle}>O melhor da culinária regional</Text>
    </View>
  );
}