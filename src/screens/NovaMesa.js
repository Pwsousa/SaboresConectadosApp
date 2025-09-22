import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import BottomNav from '../components/BottomNav';
import Header from '../components/Header';
import { styles } from '../styles/styles';

export default function NovaMesa({ navigation }) {
  const [cliente, setCliente] = useState('');
  const [telefone, setTelefone] = useState('');
  const [numeroMesa, setNumeroMesa] = useState('');

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.formContainer}>
        <Text style={styles.label}>Nome do Cliente</Text>
        <TextInput
          style={styles.input}
          value={cliente}
          onChangeText={setCliente}
          placeholder="Digite o nome do cliente"
        />
        
        <Text style={styles.label}>Telefone</Text>
        <TextInput
          style={styles.input}
          value={telefone}
          onChangeText={setTelefone}
          placeholder="(xx) xxxxx-xxxx"
          keyboardType="phone-pad"
        />
        
        <Text style={styles.label}>Número da Mesa</Text>
        <TextInput
          style={styles.input}
          value={numeroMesa}
          onChangeText={setNumeroMesa}
          placeholder="Número da mesa"
          keyboardType="number-pad"
        />
        
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Cadastrar Mesa</Text>
        </TouchableOpacity>
      </View>
      <BottomNav navigation={navigation} currentScreen="Mesas" />
    </View>
  );
}