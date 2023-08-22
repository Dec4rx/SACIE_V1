import React from "react";
import { View, StyleSheet, SafeAreaView, ScrollView } from "react-native";

import color from "../Strings/Colors";

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
    backgroundColor: color.BackgroundApp,
    height: 'full'
  },
});

export default MainContainer;
