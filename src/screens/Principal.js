import React, {useState} from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView, FlatList, Alert, Modal, Pressable} from 'react-native';
import ImageButton from '../utils/components/ImageButton'
const Principal = () => {

    const DATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          color: '#D22525',
          name: 'Mihaela Díaz',
          age: '51',
          bed: '19',
          image: '../resources/pictures/Mihaela.png'
        },
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          color: '#8CCF4D',
          name: 'Marco Ornelas',
          age: '83',
          bed: '4',
          image: '../resources/pictures/Marco.png'
        },
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          color: '#D22525',
          name: 'Leyre Ramiro',
          age: '48',
          bed: '16',
          image: '../resources/pictures/Leyre.png'
        },
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          color: '#DFC01D',
          name: 'Mireya Poveda',
          age: '35',
          bed: '8',
          imagePath: '../resources/pictures/Mireya.png'
        },
      ];
      
      const onPressHandler = () => {
        console.log('El View fue presionado');
      };

      const [modalVisible, setModalVisible] = useState(false);
      
      const Item = ({name, color, age, bed, image}) => (
        <TouchableHighlight onPress={onPressHandler}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
            {/* Card info */}
          <View style={styles.item} >
            <View style={{ flexDirection: 'row', alignItems: 'center'}}>
              <Image source={require(image)} style={styles.otherImg} />
              <Text style={styles.cardTitle}>{name}</Text>
            </View>
            <View style={{ flexDirection: 'row', marginVertical: 5}}>
              <Text style={{ color: '#62635C', fontSize: 12}}>Age: {age}</Text>
              <Text style={{ marginLeft: 20, color: '#62635C', fontSize: 12}}>Bed: {bed}</Text>
            </View>
          </View>
          {/* Color */}
          <View>
          <View style={{ width: 60, height: 100, borderRadius: 16,backgroundColor: color, marginVertical: 5, }}/>
          </View>
        </View>
        </TouchableHighlight>
      );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.mainTitle}>Welcome</Text>
        <View style={styles.headerButton}>
          <TouchableOpacity activeOpacity={0.5} onPress={() => setModalVisible(true)}>
            <Image source={require('../resources/pictures/newPatient.svg')}
              style={styles.buttonImageIconStyle} />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5}>
            <Image source={require('../resources/pictures/newMedicine.svg')}
              style={styles.buttonImageIconStyle} />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5}>
            <Image source={require('../resources/pictures/newTest.svg')}
              style={styles.buttonImageIconStyle} />
          </TouchableOpacity>
        </View>
        <View style={styles.headerButton}>
          <Text>New Patient</Text>
          <Text>New Medicine </Text>
          <Text>New Test   </Text>
        </View>

        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>x</Text>
            </Pressable>
            <Text style={styles.modalText}>How would you like to register it?</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
              <ImageButton onPress={''} image={require('../resources/pictures/scan.png')} title='Scan'/>
              <ImageButton onPress={''} image={require('../resources/pictures/manual.png')} title='Manually'/>
            </View>
          </View>
        </View>
      </Modal>

      </View>

    <View>
      <Text style={{fontSize: 30, fontWeight: 'bold', marginHorizontal: 10, marginVertical: 10}}>Patients</Text>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item name={item.name} color={item.color} bed={item.bed} age={item.age} />}
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
    },
    header: {
      flexDirection: 'coloum',
      justifyContent: 'space-between',
      padding: 10,
      marginVertical: 10,
    },
    headerButton: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    mainTitle: {
      fontSize: 36,
      marginVertical: 5,
      marginHorizontal: 20,
      marginBottom: 25,
      fontWeight: 'bold',
    },
    buttonImageIconStyle: {
        width: 80,
        height: 80,
        borderRadius: 40,
      },
    otherImg: {
        width: 50,
        height: 50,
      },
      item: {
      alignSelf: 'stretch',
      backgroundColor: '#ffff',
      borderColor: '#F5F5F5',
      borderWidth: 1,
      padding: 10,
      marginVertical: 5,
      width: '75%',
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
    cardTitle:{
      fontSize: 16,
      marginLeft: 5,
      fontWeight: 600,
      color:'#67A4F7'
    },
  
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 16,
      borderColor: '#2BF0D7',
      borderWidth: 2,
      padding: 30,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 36,
      wordSpacing: -1
    },
    });

    //#endregion

export default Principal