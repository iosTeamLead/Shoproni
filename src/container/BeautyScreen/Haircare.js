import { View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { addCartItem } from '../../reduxToolkit/slice/Addtocart'

import { toggleFavorite } from '../../reduxToolkit/slice/favoritesSlice';

const Data = [
  {
    id: 1,
    image: require('../../assets/Haircare/care1.jpeg'),
    title: 'Hair & Care',
    track: 'Hair & Care Pro Blend Damage Repair Hair Shampoo+Oil Combo (300ml+300ml) with Avocado, Aloe Vera and Olive Oil',
    Price: '₹ 389',
    Best_Price: 'Best Price ₹275 ',
    qty:0
  },
  {
    id: 2,
    image: require('../../assets/Haircare/care2.jpeg'),
    title: 'Hair & Care',
    track: 'Hair & Care Triple Blend Damage Repair Non-Sticky Hair Oil with Aloe Vera, Olive Oil & Green Tea, 300 ml + 100 ml',
    Price: '₹ 155',
    Best_Price: 'Best Price ₹105 ',
    qty:0
  },
  {
    id: 3,
    image: require('../../assets/Haircare/care3.jpeg'),
    title: 'WOW Skin ',
    track: 'WOW Skin Science Non Sticky Onion Hair Serum For Hair Growth | Frizz Free Smooth Hair| Dry And Dull Hair - 100ml',
    Price: '₹ 247',
    Best_Price: 'Best Price ₹209 ',
    qty:0
  },
  {
    id: 4,
    image: require('../../assets/Haircare/care4.jpeg'),
    title: `L'OREA`,
    track: `L'Oréal Professionnel Xtenso Care Shampoo For Straightened Hair, 250 ML |Shampoo for Starightened Hair|Shampoo with Pro Keratin & Incell Technology`,
    Price: '₹ 585',
    Best_Price: 'Best Price ₹499',
    qty:0
  },
  {
    id: 5,
    image: require('../../assets/Haircare/care5.jpeg'),
    title: 'Hair & Care',
    track: 'Hair & Care Dry Fruit Oil with Walnuts, Almonds & Vitamin E| Reduce Hairfall |Stronger & Silkier Hair | 500 ml (Pack of 2)',
    Price: '₹ 305',
    Best_Price: 'Best Price ₹250 ',
    qty:0
  },
  {
    id: 6,
    image: require('../../assets/Haircare/care6.jpeg'),
    title: `L'Oreal`,
    track: `L'Oreal Paris Serum, Protection and Shine, For Dry, Flyaway & Frizzy Hair, With 6 Rare Flower Oils, Extraordinary Oil, 100ml`,
    Price: '₹ 364',
    Best_Price: 'Best Price ₹222 ',
    qty:0
  },
  {
    id: 7,
    image: require('../../assets/Haircare/care7.jpeg'),
    title: `L'Oreal`,
    track: `L'Oreal Paris Filling Night Cream, Leave In Hair Cream with Hyaluronic Acid, For Dry & Dehydrated Hair, Adds Shine & bounce, Hyaluron Moisture 72H Hydra, 180ml`,
    Price: '₹ 340',
    Best_Price: 'Best Price ₹280 ',
    qty:0
  },
  {
    id: 8,
    image: require('../../assets/Haircare/care8.jpeg'),
    title: 'Pilgrim',
    track: `Pilgrim Redensyl 3% + Anagain 4% Advanced Hair Growth Serum (50ml) with Natural Ingredients, Controls Hair Fall, Stimulates Hair Growth, Increase Hair Density | Hair Growth Serum for Men & Women`,
    Price: '₹ 670',
    Best_Price: 'Best Price ₹550',
    qty:0
  },
  {
    id: 9,
    image: require('../../assets/Haircare/care9.jpeg'),
    title: 'Biolage',
    track: 'Biolage Smoothproof 6-in-1 Professional Hair Serum for Frizzy Hair |Deep Smoothening With Avocado & Grape Seed Oil | Natural & Vegan',
    Price: '₹ 325',
    Best_Price: 'Best Price ₹279 ',
    qty:0
  },
  {
    id: 10,
    image: require('../../assets/Haircare/care10.jpeg'),
    title: 'Himalaya',
    track: 'Himalaya Herbals Protein Hair Cream, 100ml',
    Price: '₹ 100 ',
    Best_Price: 'Best Price ₹88',
    qty:0
  },
  {
    id: 11,
    image: require('../../assets/Haircare/care11.jpeg'),
    title: 'Haritkranti',
    track: 'HARITKRANTI HAIR OIL',
    Price: '₹ 170 ',
    Best_Price: 'Best Price ₹122',
    qty:0
  },
  {
    id: 12,
    image: require('../../assets/Haircare/care12.jpeg'),
    title: 'sesa',
    track: 'Sesa Ayurvedic Hair Care Juice (1L) | Controls Hair Fall | Boosts Hair Growth | 100% Ayurvedic Hair Care Juice made with Amla, Aloe Vera, Bhringraj and Daru Haridra',
    Price: '₹ 445',
    Best_Price: 'Best Price ₹325 ',
    qty:0
  },
  {
    id: 13,
    image: require('../../assets/Haircare/care13.jpeg'),
    title: 'Mamaearth',
    track: 'Mamaearth Rosemary Hair Fall Control Kit - 650 ml',
    Price: '₹ 899',
    Best_Price: 'Best Price ₹781 ',
    qty:0
  },
  {
    id: 14,
    image: require('../../assets/Haircare/care14.jpeg'),
    title: 'Justhuman',
    track: 'Justhuman Hair Serum For Hair Growth & Hair Loss Protection,',
    Price: '₹ 1,329',
    Best_Price: 'Best Price ₹1,197 ',
    qty:0
  },
  {
    id: 15,
    image: require('../../assets/Haircare/care15.jpeg'),
    title: 'DABUR',
    track: 'Dabur Castor Oil - 200ml | 100% Natural Cold Pressed Oil | Promotes Hair Growth, Hydrates Skin & Reduces Wrinkles | No Mineral Oil & Silicones',
    Price: '299',
    Best_Price: 'Best Price ₹209 ',
    qty:0
  },
  {
    id: 16,
    image: require('../../assets/Haircare/care16.jpeg'),
    title: 'Vedix',
    track: 'Vedix Customized Hair Fall Control Regimen For Normal/Oily Hair Scalp&Wavy Hair -Ayurvedic Hair Care - 3 Product Kit - Anti-Hairfall Shampoo- Hair Growth Serum,570 Grams',
    Price: '₹ 2,697',
    Best_Price: 'Best Price ₹1,899',
    qty:0
  },
]



const Haircare = () => {
  const dispatch = useDispatch();
const navigation=useNavigation()

const cartItems = useSelector(state => state.cart2.cartItems);

console.log('item',cartItems)

  const favorites = useSelector((state) => state.favorites.favorites);

  const isFavorite = (itemId) => favorites.some((item) => item.id === itemId);

  const handleToggleFavorite = (item) => {
    dispatch(toggleFavorite(item));
  };

  const renderItem = ({ item }) => {
    return (
      <View style={{ alignItems: 'center', marginBottom: 40, marginHorizontal: 10,bottom:10 ,marginVertical:20}}>
        <TouchableOpacity onPress={()=>navigation.navigate('Checkout',{ selectedItem: item })}>
        <Image source={item?.image} resizeMode='contain' style={{ height: 180, width: 180, }} />
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'flex-start' }}>
          <Text style={[style.txt, { alignSelf: 'flex-start' }]}>{item?.title}</Text>
          <TouchableOpacity onPress={() => handleToggleFavorite(item)}>
            <Image
              source={isFavorite(item.id) ? require('../../assets/fillHeart.png') : require('../../assets/heart.png')}
              resizeMode='contain'
              style={[style.imge3, { marginHorizontal: 0 }]}
            />
          </TouchableOpacity>
        </View>
        <Text style={[style.txt2, { alignSelf: 'flex-start' }]}>{item?.track.substring(0, 24) + ('...')}</Text>
        <Text style={[style.txt, { alignSelf: 'flex-start' }]}>{item?.Price}</Text>
        <Text style={[style.txt, { color: 'green', fontSize: 12, alignSelf: 'flex-start' }]}>{item?.Best_Price}<Text style={style.txt2}>with coupon </Text></Text>

        
      </View>
    );
  };

  return (
    <SafeAreaView>
      <View style={style.view}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../../assets/back.png')} style={{ width: 30, height: 30, alignSelf: 'flex-start', }} />
        </TouchableOpacity>
        <Text style={{ color: 'gray,', fontSize: 20, fontWeight: '500' }}>Haircare</Text>
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
      <FlatList
        data={Data}
        renderItem={renderItem}
        numColumns={2} />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10
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
    fontSize: 12,
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
});

export default Haircare;