import React from 'react'
import { View, StyleSheet, SafeAreaView} from 'react-native';

const MainContainer = ({ children }) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>{children}</View>
    </SafeAreaView >
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      padding: 3,
    },
  })

export default MainContainer