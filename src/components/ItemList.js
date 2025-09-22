import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/styles';

export default function ItemList({ title, data, navigation }) {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={styles.itemInfo}>
        <Text style={styles.itemTitle}>{item.nome}</Text>
        <Text style={styles.itemDescription}>{item.descricao}</Text>
        {item.serve && <Text style={styles.serveText}>{item.serve}</Text>}
      </View>
      <View style={styles.itemPriceContainer}>
        <Text style={styles.itemPrice}>R$ {item.preco.toFixed(2)}</Text>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        style={styles.list}
        ListHeaderComponent={
          <Text style={styles.categoryTitle}>{title}</Text>
        }
      />
    </View>
  );
}