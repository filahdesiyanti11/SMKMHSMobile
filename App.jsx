import { View, Text, TextInput, Image, TouchableOpacity, Button, Alert } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View>
        <View style={{
          height: 52, 
          backgroundColor: 'red',
           marginHorizontal: 16, 
           borderRadius: 99,
            marginTop: 16,
            flexBasis: 'row',
            justifyContent: 'space-between',
            alignItems: '',
            paddingHorizontal: 16,
            paddingVertical: 10,
            }}>
          <Image
            source={require('../AwesomeProject/src/assets/images/logomhs.png')}
            style={{
              width: 140,
              height: 32,
            }}
          />
           <Image
            source={require('../AwesomeProject/src/assets/icon/Menu.png')}
            style={{
              width: 20,
              height: 20,
              paddingHorizontal: 14,
              paddingVertical: 10,
            }}
          />
        </View>
        <Text style={{
          marginTop: 10,
          marginLeft: 16,
          fontWeight: '',
          color: 'black',
          fontSize: 12,
        }}>Selamat Datang</Text>
        <Text style={{
          marginTop: 10,
          marginLeft: 10,
          fontWeight: 'bold',
          color: 'black',
          fontSize: 22,
        }}> Kantin  Multistudi high school</Text>
        <View style={{marginTop: 20, flexDirection: 'row'}}>
          <View 
          style={{
            height: 150,
            borderWidth: 1,
            backgroundColor: 'red',
            borderRadius: 12,
            }}></View>

        </View>
    </View>
  )
}

export default App