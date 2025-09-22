import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import BottomNav from '../components/BottomNav';
import Header from '../components/Header';
import { mesas } from '../data/mockData';
import { styles } from '../styles/styles';

export default function Mesas({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.mesaItem}
      onPress={() => navigation.navigate('MesaDetalhes', { mesa: item })}>
      <Text style={styles.mesaTitle}>Mesa {item.numero}</Text>
      <Text>Total: R$ {item.total.toFixed(2)}</Text>
      <Text>Cliente: {item.cliente}</Text>
      <Text style={styles.finalizarBtn}>Finalizar</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={mesas}
        renderItem={renderItem}
        keyExtractor={item => item.numero}
        style={styles.list}
      />
      <TouchableOpacity 
        style={styles.floatingButton}
        onPress={() => navigation.navigate('NovaMesa')}>
        <Text style={styles.plusSign}>+</Text>
      </TouchableOpacity>
      <BottomNav navigation={navigation} currentScreen="Mesas" />
    </View>
  );
}