import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  StatusBar,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types';
interface HeaderProps {
  title: string;
  showBackButton?: boolean;
}

// Common Header Component To Keep Code Reuseability and Separation
const Header: React.FC<HeaderProps> = ({title, showBackButton = false}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.header}>
      {showBackButton && (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <Text style={styles.backButtonText}>{'<'}</Text>
        </TouchableOpacity>
      )}
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    width: '100%',
    height: Platform.OS === 'ios' ? 58 : 60, // standard height for iOS and Android
    backgroundColor: '#447AEE', // blue background
    alignContent: 'center',
    alignItems: 'center', // align text to the left
    paddingHorizontal: 16, // padding to align text with some margin from left,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, // add padding for android status bar
  },
  headerText: {
    color: '#FFFFFF', // white text
    fontSize: 20, // standard text size for header
    fontWeight: 'bold', // bold text
  },
  backButton: {
    padding: 10,
  },
  backButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Header;
