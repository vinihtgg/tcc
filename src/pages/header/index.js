import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  TextInput,
  Dimensions,
  Platform,
  SafeAreaView,
} from 'react-native';
import Game_loot from '../../assets/gameloot.jpg';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
const userAvatarUrl =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Oo5Ri1CFU36xlve_EW7JB5aHH8PlhpMppw&s';

export function Header() {
  const navigation = useNavigation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  function toggleDropdown() {
    setDropdownOpen(!dropdownOpen);
  }

  function handleNavigation(route) {
    setDropdownOpen(false);
    navigation.navigate(route);
  }

  function onSearchChange(text) {
    setSearchQuery(text);
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <View style={styles.logoWrapper}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image source={Game_loot} style={styles.logo} />
          </TouchableOpacity>
        </View>
        {/* NAVBAR INFERIOR */}
        <View style={styles.headerRow}>
          <View style={styles.leftSection}>
            {/* MENU */}
            <TouchableOpacity
              style={styles.menuButton}
              onPress={toggleDropdown}
              activeOpacity={0.7}
              accessibilityLabel="Menu"
            >
              <View style={styles.menuBar} />
              <View style={styles.menuBar} />
              <View style={styles.menuBar} />
            </TouchableOpacity>
            {/* PERFIL */}
            <TouchableOpacity
              onPress={() => navigation.navigate('Perfil')}
              style={styles.avatarButton}
              accessibilityLabel="User  profile"
              activeOpacity={0.7}
            >
              <Image source={{ uri: userAvatarUrl }} style={styles.avatar} />
            </TouchableOpacity>
            {/* DROPDOWN */}
            {dropdownOpen && (
              <View style={styles.dropdownMenu}>
                <TouchableOpacity
                  style={styles.dropdownItem}
                  onPress={() => handleNavigation('Perifericos')}
                  activeOpacity={0.6}
                >
                  <Text style={styles.dropdownText}>Periféricos</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.dropdownItem}
                  onPress={() => handleNavigation('Login')}
                  activeOpacity={0.6}
                >
                  <Text style={styles.dropdownText}>Conecte-se</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.dropdownItem}
                  onPress={() => handleNavigation('Support')}
                  activeOpacity={0.6}
                >
                  <Text style={styles.dropdownText}>Fale conosco</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
          <View style={styles.searchContainer}>
            <Ionicons
              name="search"
              size={20}
              color="#9ca3af"
              style={styles.searchIcon}
            />
            <TextInput
              style={styles.searchInput}
              placeholder="Search..."
              placeholderTextColor="#9ca3af"
              value={searchQuery}
              onChangeText={onSearchChange}
              returnKeyType="search"
              clearButtonMode="while-editing"
              accessibilityLabel="Search input"
            />
          </View>
          {/* ÍCONES DE FAVORITOS E CARRINHO */}
          <View style={styles.rightSection}>
            <TouchableOpacity
              style={styles.iconButton}
              activeOpacity={0.7}
              accessibilityLabel="Favorites"
              onPress={() => navigation.navigate('Like')}
            >
              <Ionicons name="heart-outline" size={26} color="purple" />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.iconButton, styles.cart]}
              onPress={() => navigation.navigate('Cart')}
              activeOpacity={0.7}
              accessibilityLabel="Cart"
            >
              <Ionicons name="cart-outline" size={26} color="purple" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: 'black',
    justifyContent: 'space-between',
  },
  header: {
    width: '100%',
    backgroundColor: 'black',
    borderBottomColor: '#e5e7eb',
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  logoWrapper: {
    alignItems: 'center',
    paddingVertical: 8,
  },
  logo: {
    width: 300,
    height: 60,
    marginTop: 20,
    resizeMode: 'contain',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333333',
    borderColor: 'purple',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 10,
    marginHorizontal: 2,
    height: 40,
    minWidth: width * 0.3,
    maxWidth: width * 0.5,
    flexGrow: 1,
    flex: 1,
  },
  searchIcon: {
    marginRight: 6,
  },
  searchInput: {
    flex: 1,
    color: '#ffffff',
    paddingVertical: 0,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: width * 0.05,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  menuButton: {
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  menuBar: {
    width: 24,
    height: 2,
    backgroundColor: 'purple',
    marginVertical: 2,
    borderRadius: 1,
  },
  avatarButton: {
    marginLeft: 8,
    marginRight: 10,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: 'purple',
  },
  dropdownMenu: {
    position: 'absolute',
    top: 50,
    backgroundColor: 'rgba(0, 0, 0, 0.95)',
    paddingVertical: 8,
    shadowColor:'white',
    shadowRadius:10,
    shadowOpacity: 0.92,
    borderColor:  'white',
    borderWidth: 2,
    shadowOffset: { width: 0, height: 4 },
    minWidth: 160,
    elevation: 15,
    zIndex: 999,
  },
  dropdownItem: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginVertical: 4,
    borderRadius: 8,
  },
  dropdownText: {
    color: 'purple',
    fontWeight: '600',
    fontSize: 18,
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    padding: 6,
  },
  cart: {
    marginLeft: 5,
  },
});