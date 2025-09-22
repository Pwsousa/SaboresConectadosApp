import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import Header from '../components/Header';
import { styles } from '../styles/styles';

import ico from '../../assets/icone-cafe.svg';


export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Header />
      
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Imagem decorativa no topo */}
        <View style={styles.imageContainer}>
          <SvgXml xml={ico} width="100%" height={150} />
        </View>
        
        {/* Texto de boas-vindas */}
        <View style={styles.welcomeSection}>
          <Text style={styles.welcomeTitle}>Bem-vindo ao Sabores Conectados</Text>
          <Text style={styles.welcomeSubtitle}>Experiência única em culinária regional</Text>
        </View>
        
        {/* Ícones decorativos */}
        <View style={styles.iconsContainer}>
          <View style={styles.iconItem}>
            <SvgXml xml={ico} width={80} height={80} />
            <Text style={styles.iconText}>Pratos Regionais</Text>
          </View>
          
          <View style={styles.iconItem}>
            <SvgXml xml={ico} width={80} height={80} />
            <Text style={styles.iconText}>Mesas Disponíveis</Text>
          </View>
        </View>
        
        {/* Espaço para conteúdo adicional */}
        <View style={styles.infoSection}>
          <Text style={styles.infoText}>
            Descubra os sabores autênticos da nossa região com ingredientes frescos e preparo especial.
          </Text>
        </View>
      </ScrollView>
      
      {/* Botões no rodapé */}
      <View style={styles.footerButtons}>
        <TouchableOpacity 
          style={[styles.button, styles.inicioButton]}
          onPress={() => navigation.navigate('Inicio')}>
          <Text style={styles.inicioButtonText}>Início</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.button, styles.novaMesaButton]}
          onPress={() => navigation.navigate('NovaMesa')}>
          <Text style={styles.buttonText}>Nova Mesa</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}