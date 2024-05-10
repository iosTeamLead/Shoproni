import { View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'




const EveryDay = () => {
  const { t,i18n } = useTranslation();
  const dispatch = useDispatch();
  const navigation = useNavigation()
  const cartItems = useSelector(state => state.cart2.cartItems);
const [data,setData]=useState([])
useEffect(()=>{
setData([
  {
    id: 1,
    title: t('common.vivo'),
    image: require('../assets/Phone/Vivo.png'),
    route: 'Vivo'
  },
  {
    id: 2,
    title: 'Realme',
    image: require('../assets/Phone/realme.png'),
    route: 'Realme'
  },
  {
    id: 3,
    title: 'Motorola',
    image: require('../assets/Phone/moto.png'),
    route: 'Moto'
  },
  {
    id: 4,
    title: t('common.poco'),
    image: require('../assets/Phone/poco.png'),
    route: 'Poco'
  },
  {
    id: 5,
    title: 'Samsung',
    image: require('../assets/Phone/samsung.png'),
    route: 'Samsung'
  },
  {
    id: 6,
    title: t('common.iphone'),
    image: require('../assets/Phone/iphone.png'),
    route: 'Iphone'
  },
  {
    id: 7,
    title: t('common.redme'),
    image: require('../assets/Phone/redmi.png'),
    route: 'Redmi'
  },
  {
    id: 8,
    title: 'OPPO',
    image: require('../assets/Phone/oppo.png'),
    route: 'Oppo'
  },
])
},[i18n.language])

  const renderItem = ({ item }) => {
    return (
      <View style={{ alignItems: 'center', marginBottom: 40, marginHorizontal: 5, bottom: 10, }}>
        <TouchableOpacity style={{ alignItems: 'center', }} onPress={() => navigation.navigate(item.route)}>
          <Image source={item.image} resizeMode='contain' style={{ height: 200, width: 200, marginBottom: 10 ,marginTop:10}} />
          <Text style={style.txt}>{item?.title}</Text>
        </TouchableOpacity>
      </View>
    )
  }
  return (
    <SafeAreaView >
      <View style={style.view}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../assets/back.png')} style={{ width: 30, height: 30, alignSelf: 'flex-start', }} />
        </TouchableOpacity>
        <Text style={{ color: 'gray,', fontSize: 20, fontWeight: '500' }}>{t('common.mobile')} </Text>
        <View style={style.view1}>
          <TouchableOpacity>
            <Image source={require('../assets/notification.png')} resizeMode='contain' style={style.imge} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Favourites',)}>
            <Image source={require('../assets/heart.png')} resizeMode='contain' style={style.imge3} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('ShopCart')}>
            <Image source={require('../assets/bag.png')} resizeMode='contain' style={style.imge} />
            {cartItems.length > 0 && (
              <View style={style.cartCount}>
                <Text style={style.cartCountText}>{cartItems.length}</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>


      </View>
      <View style={{ marginTop: 20, }}>
        <Image source={require('../assets/Now.png')} style={style.image3} />
      </View>
      <View style={{ height: 30, backgroundColor: '#70a0db' }}>

      </View>
      <View >
        <Image source={require('../assets/bankban.jpeg')} style={style.image4} />
      </View>
      <View style={{ height: 20, backgroundColor: '#70a0db' }}>

      </View>
      <FlatList style={{ height: '50%',  backgroundColor: '#70a0db', }}
        data={data}
        renderItem={renderItem}
        numColumns={2} />
    </SafeAreaView>
  )
}

export default EveryDay
const style = StyleSheet.create({
  view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  view1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  imge: {
    height: 25,
    width: 25,
    paddingHorizontal: 30
  },
  imge3: {
    height: 35,
    width: 35,
  },
  txt: {
    color: 'black',
    fontSize: 20,
    fontWeight: '400'
  },
  txt2: {
    fontSize: 14,
    color: 'gray'
  },
  cartCount: {
    position: 'absolute',
    top: -8,
    right: 6,
    backgroundColor: 'red',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartCountText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  image3: {
    height: 150,
    width: '100%',
    resizeMode: 'stretch'
  },
  image4: {
    height: 120,
    width: '100%',
    resizeMode: 'stretch'
  },
});