import { Text, TouchableOpacity, View } from 'react-native';
import { menuCategories } from '../data/mockData';
import { styles } from '../styles/styles';

export default function MenuGrid({ navigation }) {
  return (
    <View style={styles.menuGrid}>
      {menuCategories.map((item) => (
        <TouchableOpacity
          key={item.key}
          style={styles.menuItem}
          onPress={() => navigation.navigate('Refeicoes')} // Por enquanto vai para Refeições
        >
          <Text style={styles.menuText}>{item.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}