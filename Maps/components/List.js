import React from "react";
import { FlatList, Text, View, Button, StyleSheet, Dimensions } from "react-native";

export default ({ points,closeModal }) => {
    return (
        <>
            <View style={styles.list}>
                <FlatList
                    data={points.map( x => x.name)}
                    renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
                    keyExtractor={item => item}
                />
            </View>
            <View style={styles.Button}>
                <Button title="Cerrar" onPress={closeModal} />
            </View>
        </>
    )
}

const styles = StyleSheet.create ({
    list: {
        height: Dimensions.get('window').height -250
    },
    item: {
        borderBottomWidth: 1,
        borderColor: '#ccc',
        height: 50,
        justifyContent: 'center',
        padding: 15,
    },
    Button: {
        paddingBottom: 15,
    }
})