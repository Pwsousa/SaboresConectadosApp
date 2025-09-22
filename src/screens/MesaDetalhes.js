import { FlatList, Text, View } from 'react-native';
import BottomNav from '../components/BottomNav';
import Header from '../components/Header';
import { styles } from '../styles/styles';

export default function MesaDetalhes({ route, navigation }) {
  const { mesa } = route.params;

  const renderItem = ({ item }) => (
    <View style={styles.mesaItem}>
      <Text style={styles.refeicaoTitle}>{item.nome}</Text>
      <Text>{item.descricao}</Text>
      <Text>Quantidade: {item.quantidade}</Text>
      <Text>R$ {item.preco.toFixed(2)}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.mesaItem}>
        <Text style={styles.mesaTitle}>Mesa {mesa.numero}</Text>
        <Text>Cliente: {mesa.cliente}</Text>
        <Text style={styles.mesaTitle}>Total R$ {mesa.total.toFixed(2)}</Text>
      </View>
      <FlatList
        data={mesa.pedidos}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
      <Text style={[styles.finalizarBtn, { textAlign: 'center', padding: 20 }]}>Finalizar Pedido</Text>
      <BottomNav navigation={navigation} currentScreen="Mesas" />
    </View>
  );
}