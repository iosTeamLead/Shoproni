import { View, Text, SafeAreaView, StyleSheet,TouchableOpacity,Image, ScrollView } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const HelpCenter = () => {

    const cartItems = useSelector(state => state.cart2.cartItems)
    const navigation=useNavigation();
  return (
  <SafeAreaView>
     <View style={style.view}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../../assets/back.png')} style={{ width: 30, height: 30, alignSelf: 'flex-start', }} />
        </TouchableOpacity>
        <Text style={{ color: 'gray,', fontSize: 20, fontWeight: '500' }}>Help Center </Text>
        <View style={style.view1}>
          <TouchableOpacity>
            <Image source={require('../../assets/notification.png')} resizeMode='contain' style={style.imge} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Favourites',)}>
            <Image source={require('../../assets/heart.png')} resizeMode='contain' style={style.imge3} />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('ShopCart')}>
            <Image source={require('../../assets/bag.png')} resizeMode='contain' style={style.imge} />
            {cartItems.length > 0 && (
                                <View style={style.cartCount}>
                                    <Text style={style.cartCountText}>{cartItems.length}</Text>
                                </View>
                            )}
          </TouchableOpacity>
        </View>
      </View>  
<ScrollView>
      <View style={style.view2}>
<Text style={style.txt}> Get quick customer support by {'\n'} selecting your item</Text>
  <Image source={require('../../assets/helpc.jpeg')} style={style.img2}/>
      </View>
      <View style={style.emptyview}>

      </View>

      <View>
        <Text style={style.txt2}>What issue are you facing? </Text>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HelpCenter

const style=StyleSheet.create({
    view1: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
      },
      view: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10
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
    img2:{
        height:50,
        width:50,
        resizeMode:'contain'

    },
    view2: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 10,
        elevation: 5, // Add elevation for Android
        shadowColor: 'black', // Add shadow color for iOS
        shadowOffset: {
            width: 10,
            height: 2,
        },
        shadowOpacity: 1,
        shadowRadius: 2,
        padding:10
    },
    txt:{
        color:"black",
        fontSize:16,
        fontWeight:'600'
    },
    emptyview:{
        height:10,
        backgroundColor:"#D3D3D3",
        opacity:0.50
    },
    txt2:{
        fontSize:20,
        fontWeight:'800',
        color:"black",
        padding:20
    }
})