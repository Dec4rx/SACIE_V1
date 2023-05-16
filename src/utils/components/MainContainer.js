import React from "react";
import { View, StyleSheet, SafeAreaView, ScrollView } from "react-native";

const MainContainer = ({ children, height }) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: "5%",
    // backgroundColor: '#F2F2F2'
    backgroundColor: "#FFFFFF",
  },
});

export default MainContainer;
