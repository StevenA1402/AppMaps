import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import Map from './components/Map';
import List from './components/List';
import ModalComp from './components/Modal';
import Panel from './components/Panel';
import Input from './components/Input';

export default function App() {
  const [points, setPoints] = useState([])
  const [pointTem, setPointTemp] = useState([])
  const [nombre, setNombre] = useState('')
  const [visibilityFilter, setvisibilityFilter] = useState('new_points')
  const [visibility, setVisibility] = useState(false)


  const handleLongPress = ({ nativeEvent }) => {
    setvisibilityFilter('new_points')
    setPointTemp(nativeEvent.coordinate)
    setVisibility(true)
  }

  const handleChangeText = text => {
    setNombre(text)
  }

  const handleSubmit = () => {
    const newPoint = { coordinate: pointTem, name: nombre };
    setPoints(points.concat(newPoint))
    setVisibility(false)
    setName('')
  }
  const handleLista = () => {
    setvisibilityFilter('all_points')
    setVisibility(true)
  }

  console.log(points);

  return (
    <View style={styles.container}>
      <Map onLongPress={handleLongPress} />
      <Panel onPressLeft={handleLista} textLeft='Lista' />
      <ModalComp visibility={visibility}>
        {visibilityFilter === 'new_points'
          ?
          <>
            <View style={styles.form}>
              <Input title='Nombre' placeholder='Nombre del punto' onChangeText={handleChangeText} />
              <Button title='Aceptar' onPress={handleSubmit} />
            </View>
          </>
          : <List points={points} claseModal={() => setVisibility(false)} />
        }
      </ModalComp>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
