import { Text, TouchableOpacity, View } from 'react-native';
import { menuCategories } from '../data/mockData';
import { styles } from '../styles/styles';

export default function MenuGrid({ navigation }) {
  return (
    <View style={styles.menuGrid}>
      {menuCategories.map((item, index) => (
        <TouchableOpacity
          key={item.key}
          style={[
            styles.menuItem, 
            { backgroundColor: item.color }
          ]}
          onPress={() => navigation.navigate(item.key)}
        >
          <Text style={styles.menuText}>{item.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}