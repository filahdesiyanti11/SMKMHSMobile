import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';

const Home = ({navigation}) => {
  return (
    <ScrollView>
      <View
        style={{
          height: 52,
          backgroundColor: 'red',
          marginHorizontal: 16,
          borderRadius: 99,
          marginTop: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 16,
          paddingVertical: 10,
        }}>
        <Image
          source={require('../assets/images/logomhs.png')}
          style={{width: 140, height: 32}}
        />
        <Image
          source={require('../assets/icon/Menu.png')}
          style={{width: 20, height: 20}}
        />
      </View>
      <Text
        style={{
          fontFamily: 'DM Sans',
          fontSize: 12,
          color: '#A4A4A4',
          marginTop: 32,
          marginLeft: 16,
        }}>
        Selamat Datang di
      </Text>
      <Text
        style={{
          fontFamily: 'DM Sans',
          fontSize: 32,
          fontWeight: 'bold',
          color: '#000000',
          marginTop: 4,
          marginLeft: 16,
        }}>
        Kantin Multistudi
      </Text>
      <Text
        style={{
          fontFamily: 'DM Sans',
          fontSize: 16,
          fontWeight: 'bold',
          color: '#000000',
          marginTop: 30,
          marginLeft: 16,
        }}>
        Menu Makanan
      </Text>
      <View
        style={{
          flexDirection: 'row',
          flex: 1,
          padding: 16,
          marginTop: 2,
          justifyContent: 'space-between',
        }}>
        <View style={{borderRadius: 12}}>
          <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
            <Image
              source={require('../assets/images/burger.png')}
              style={{width: 190, borderRadius: 12, height: 159}}
            />
          </TouchableOpacity>
        </View>
        <View style={{borderRadius: 12}}>
          <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
            <Image
              source={require('../assets/images/pizza.png')}
              style={{width: 190, borderRadius: 12, height: 159}}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          flex: 0,
          paddingRight: 16,
          paddingLeft: 16,
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
          <Text
            style={{
              fontFamily: 'DM Sans',
              fontSize: 14,
              fontWeight: 'bold',
              color: '#000000',
            }}>
            Beef Burger
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
          <Text
            style={{
              fontFamily: 'DM Sans',
              fontSize: 14,
              fontWeight: 'bold',
              color: '#000000',
              marginLeft: 116,
            }}>
            Cheese Pizza
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'bold',
            color: '#E73232',
            marginLeft: 16,
          }}>
          Rp 20.000
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'bold',
            color: '#E73232',
            marginLeft: 129,
          }}>
          Rp 25.000
        </Text>
      </View>

      <Text
        style={{
          marginTop: 48,
          fontSize: 16,
          fontWeight: 'bold',
          color: '#000000',
          marginHorizontal: 16,
        }}>
        Menu Minuman
      </Text>
      <View
        style={{
          flexDirection: 'row',
          flex: 1,
          padding: 16,
          marginTop: 0,
          justifyContent: 'space-between',
        }}>
        <View style={{borderRadius: 12}}>
          <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
            <Image
              source={require('../assets/images/lychee.png')}
              style={{width: 190, borderRadius: 12, height: 159}}
            />
          </TouchableOpacity>
        </View>
        <View style={{borderRadius: 12}}>
          <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
            <Image
              source={require('../assets/images/avocado.png')}
              style={{width: 190, borderRadius: 12, height: 159}}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          flex: 0,
          paddingRight: 16,
          paddingLeft: 16,
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
          <Text
            style={{
              fontFamily: 'DM Sans',
              fontSize: 14,
              fontWeight: 'bold',
              color: '#000000',
            }}>
            Lychee tea
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
          <Text
            style={{
              fontFamily: 'DM Sans',
              fontSize: 14,
              fontWeight: 'bold',
              color: '#000000',
              marginLeft: 125,
            }}>
            Avocado Juice
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'bold',
            color: '#E73232',
            marginLeft: 16,
          }}>
          Rp 15.000
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'bold',
            color: '#E73232',
            marginLeft: 128,
          }}>
          Rp 10.000
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Detail')}
        style={{
          paddingHorizontal: 12,
          paddingVertical: 6,
          alignItems: 'center',
          borderRadius: 6,
          backgroundColor: 'red',
          marginTop: 35,
          marginBottom: 18,
          borderWidth: 1,
          zIndex: 999,
        }}>
        <Text>Menuju Detail</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Home;
