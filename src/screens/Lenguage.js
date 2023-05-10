import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, SectionList} from 'react-native';
import BackButton from '../utils/components/BackButton';

const Lenguage = ({navigation}) => {
    const handleGoBack = () => {
      navigation.goBack();
    };

    const DATA = [{data: ['English (North America)', 'Spanish (Mexico)', 'French (France)'],},];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <BackButton onPress={handleGoBack}/>
        <Text style={styles.mainTitle}>Lenguage</Text>
      </View>
      <View style={styles.background}>
      <View style={styles.profileContainer}>
        <SectionList sections={DATA} keyExtractor={(item, index) => item + index} renderItem={({item}) => (
        <View style={styles.item}>
          <Text style={styles.title}>{item}</Text>
        </View>
      )}
    />
      </View>
      </View>
    </SafeAreaView >
  )
}

//#region Styles
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffff',
    },
    background:{
      flex: 1,
      backgroundColor: '#B8CAE4',
      borderTopLeftRadius: 16,
      borderTopRightRadius: 16,
    },
    header: {
      flexDirection: 'row',
      padding: 10,
    },
    headerButton: {
      color: 'blue',
      fontSize: 16,
      fontWeight: 'bold',
    },
    profileContainer: {
      alignItems: 'left',
      marginVertical: 20,
      marginHorizontal:20,
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
      marginVertical: 5,
      color: '#67A4F7',
    },
    mainTitle: {
      fontSize: 36,
      marginVertical: 5,
      marginHorizontal: 20,
      color: '#000000',
      fontWeight: 'bold',
    },
    item: {
      backgroundColor: '#ffff',
      padding: 15,
      marginVertical: 5,
      borderRadius: 12,
      shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    });
//#endregion
export default Lenguage