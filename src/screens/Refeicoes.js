import { FlatList, Text, View } from 'react-native';
import BottomNav from '../components/BottomNav';
import Header from '../components/Header';
import { refeicoes } from '../data/mockData';
import { styles } from '../styles/styles';

export default function Refeicoes({ navigation }) {
  const renderItem = ({ item }) => (
    <View style={styles.refeicaoItem}>
      <Text style={styles.refeicaoTitle}>{item.nome}</Text>
      <Text style={styles.refeicaoDesc}>{item.descricao}</Text>
      <Text style={styles.refeicaoPrice}>R$ {item.preco.toFixed(2)}</Text>
      {item.serve && <Text style={styles.serveText}>{item.serve}</Text>}
      <Text style={styles.finalizarBtn}>+ Adicionar</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={refeicoes}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        style={styles.list}
      />
      <BottomNav navigation={navigation} currentScreen="Refeicoes" />
    </View>
  );
}