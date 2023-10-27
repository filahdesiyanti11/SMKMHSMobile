import {View, Text, Image} from 'react-native';
import React from 'react';

const Detail = () => {
  return (
    <View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 20,
        }}>
        <View
          style={{
            height: 40,
            width: 40,
            backgroundColor: 'red',
            marginHorizontal: 16,
            borderRadius: 99,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Image
            source={require('../assets/images/Button.png')}
            style={{width: 40, height: 30}}
          />
        </View>
        <Text
          style={{
            fontFamily: 'DM Sans',
            fontSize: 14,
            color: 'black',
            fontWeight: 'bold',
          }}>
          Kembali
        </Text>
      </View>
      <Image
        source={require('../assets/images/burger.png')}
        style={{width: 200, height: 200}}></Image>
    </View>
  );
};

export default Detail;
