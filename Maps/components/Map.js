import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import MapView from "react-native-maps";

export default ({ onlongPress }) => {
    return (
        <MapView style={styles.map} 
        onlongPress={onlongPress}
        />
    );
  }
  
  const styles = StyleSheet.create({
    map: {
      width: Dimensions.get('window').width ,
      height: Dimensions.get('window').height ,
    },
  });
  