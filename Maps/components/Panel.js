import React from "react";
import { StyleSheet, Button, View } from "react-native";

export default ({onPressLeft, textLeft}) => {
    return (
        <View style={styles.panel}>
            <Button onPress={onPressLeft} title={textLeft}/>
            <Button title="Mostrar/Ocultar"></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    panel: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#eee',
        justifyContent: 'center',
        alignItems: 'center'
        
    }
})