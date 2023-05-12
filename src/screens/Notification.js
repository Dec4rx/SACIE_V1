import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, FlatList} from 'react-native';
import BackButton from '../utils/components/BackButton';

const Notification = ({navigation}) => {
    //#region Info
    const DATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba7',
          color: '#7043CF',
          title: 'Taking temperature',
          info: "Takes the patient's temperature in bed 10."
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          color: '#FEC62F',
          title: 'Medication time',
          info: "It's time for the patient in bed 19 to take his medicine."
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          color: '#29C9FB',
          title: 'Shift change',
          info: "Your turn has ended."
        },
      ];
    //#endregion
      
    const Item = ({title, color, info}) => (
      <View style={styles.item}>
        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
          <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: color, marginRight: 8}} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <Text style={styles.info}>{info}</Text>
      </View>
      );
      
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <BackButton/>
        <Text style={styles.mainTitle}>Notifications</Text>
      </View>
      <View style={styles.profileContainer}>
        <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} color={item.color} info={item.info} />}
        keyExtractor={item => item.id}
      />
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
      marginVertical: 5,
      marginHorizontal:20,
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
      marginVertical: 5,
    },
    info: {
      fontSize: 14,
      marginVertical: 5,
      justifyContent:'space-evenly'
    },
    mainTitle: {
      fontSize: 30,
      marginVertical: 5,
      marginHorizontal: 20,
      color: '#5C7EAE',
      fontWeight: 'bold',
    },
    item: {
      backgroundColor: '#ffff',
      borderColor: '#2BF0D7',
      borderWidth: 1.4,
      padding: 10,
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

export default Notification