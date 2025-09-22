import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/styles';

export default function BottomNav({ navigation, currentScreen }) {
  const navItems = [
    { key: 'Inicio', label: 'Início' },
    { key: 'Busca', label: 'Busca' },
    { key: 'Pedidos', label: 'Pedidos' },
    { key: 'Mesas', label: 'Mesas' },
  ];

  return (
    <View style={styles.bottomNav}>
      {navItems.map((item) => (
        <TouchableOpacity 
          key={item.key} 
          style={styles.navButton}
          onPress={() => navigation.navigate(item.key)}
        >
          <Text style={currentScreen === item.key ? styles.activeNavText : styles.navText}>
            {item.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}