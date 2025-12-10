import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Alert
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

import { COLORS, SIZES, FONTS } from '../constants/theme';
import { USER } from '../data/mock';
import ProfileMenuItem from '../components/ProfileMenuItem';
import ClubGiftCard from '../components/ClubGiftCard';

const ProfileScreen = ({ navigation }) => {

  const handleLogout = () => {
    Alert.alert(
        "Sair da conta",
        "Tem certeza que deseja sair?",
        [
            { text: "Cancelar", style: "cancel" },
            {
                text: "Sair",
                style: "destructive",
                onPress: () => navigation.reset({
                    index: 0,
                    routes: [{ name: 'Login' }],
                })
            }
        ]
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
        <ScrollView
            contentContainerStyle={styles.scrollContainer}
            showsVerticalScrollIndicator={false}
        >
            {/* Header */}
            <View style={styles.header}>
                <Image source={{ uri: USER.avatar }} style={styles.avatar} />
                <View style={styles.userInfo}>
                    <Text style={styles.userName}>{USER.name}</Text>
                    <Text style={styles.userEmail}>{USER.email}</Text>
                    <Text style={styles.editProfile}>Ver e editar dados pessoais</Text>
                </View>
                <Ionicons name="chevron-forward" size={20} color={COLORS.textLight} />
            </View>

            {/* Club Card */}
            <ClubGiftCard onPress={() => console.log('Club GiftNow')} />

            {/* Menu List */}
            <View style={styles.menuContainer}>
                <Text style={styles.sectionTitle}>Minha conta</Text>

                <ProfileMenuItem
                    icon="receipt-outline"
                    title="Meus pedidos"
                    subtitle="Ver histórico de compras"
                    onPress={() => console.log('Meus pedidos')}
                />

                <ProfileMenuItem
                    icon="card-outline"
                    title="Formas de pagamento"
                    onPress={() => navigation.navigate('Payment')}
                />

                <ProfileMenuItem
                    icon="location-outline"
                    title="Endereços de entrega"
                    subtitle={`${USER.addresses.length} endereços cadastrados`}
                    onPress={() => console.log('Endereços')}
                />
            </View>

            <View style={styles.menuContainer}>
                <Text style={styles.sectionTitle}>Outros</Text>

                <ProfileMenuItem
                    icon="help-circle-outline"
                    title="Ajuda e suporte"
                    onPress={() => console.log('Ajuda')}
                />

                <ProfileMenuItem
                    icon="log-out-outline"
                    title="Sair da conta"
                    isLogout
                    onPress={handleLogout}
                />
            </View>

            <Text style={styles.version}>Versão 1.0.0</Text>

        </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  scrollContainer: {
    padding: SIZES.padding,
    paddingBottom: 100, // Espaço para tab bar
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: COLORS.white,
    padding: 15,
    borderRadius: SIZES.radius,
    // Sombra leve
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: SIZES.large,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  userEmail: {
    fontSize: SIZES.font,
    color: COLORS.textLight,
  },
  editProfile: {
      fontSize: SIZES.small,
      color: COLORS.primary,
      marginTop: 4,
      fontWeight: '500',
  },
  menuContainer: {
    marginTop: 10,
    marginBottom: 20,
  },
  sectionTitle: {
      fontSize: SIZES.font,
      color: COLORS.textLight,
      fontWeight: '600',
      marginBottom: 5,
      marginLeft: 5,
      textTransform: 'uppercase',
  },
  version: {
      textAlign: 'center',
      color: COLORS.textLight,
      fontSize: SIZES.small,
      marginTop: 10,
      opacity: 0.5,
  }
});

export default ProfileScreen;
