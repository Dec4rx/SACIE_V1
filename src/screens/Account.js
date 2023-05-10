import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import BackButton from '../utils/components/BackButton';

const Account = ({navigation}) => {
    const handleEditProfile = () => {
      navigation.navigate('Edit');
    };
    
      const handleGoBack = () => {
        navigation.goBack();
      };

      const handleLogout = () => {
        navigation.navigate('Edit');
      };
      
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <BackButton onPress={handleGoBack}/>
      </View>
      <View style={styles.header}>
        <Text style={styles.mainTitle}>Profile</Text>
        <TouchableOpacity>
          <Text style={styles.headerButton} onPress={handleEditProfile}>Editar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.profileContainer}>
        <Image
          source={require('../resources/pictures/nurseProfile.png')}
          style={styles.profileImage}
        />
        <Text style={styles.title}>Jose Gordillo</Text>
      </View>
      <View style={styles.info}>
      <Image
          source={require('../resources/pictures/phone.svg')}
          style={styles.otherImg}
        />
      <Text style={styles.text}>Jose Gordillo</Text>
      <View style={styles.line} />
      </View>
      <View style={styles.info}>
      <Image
          source={require('../resources/pictures/mail.svg')}
          style={styles.otherImg}
        />
      <Text style={styles.text}>Jose Gordillo</Text>
      <View style={styles.line} />
      </View>
      <TouchableOpacity onPress={handleLogout}>
      <View style={styles.footer}>
      <Text style={styles.logout}>Log Out</Text>
      </View>
      </TouchableOpacity>
    </SafeAreaView >
  )
}

//#region Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  profileContainer: {
    alignItems: 'left',
    marginVertical: 20,
    marginHorizontal:30,
  },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  otherImg: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  mainTitle: {
    fontSize: 36,
    marginVertical: 5,
    marginHorizontal: 20,
    color: '#67A4F7',
    fontWeight: 'bold',
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 10,
    marginTop:10,
  },
  text: {
    fontSize: 20,
    marginLeft: 10,
  },
  line: {
    borderBottomColor: '#FF103E',
    borderBottomWidth: 5,
  },
  footer:{
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical:70,
  },
  logout: {
    fontSize: 20,
    color: '#FF103E',
    textDecoration: 'underline',
  },
  });
//#endregion

export default Account
