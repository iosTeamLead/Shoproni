import { View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { addCartItem } from '../../reduxToolkit/slice/Addtocart'

import { toggleFavorite } from '../../reduxToolkit/slice/favoritesSlice';

const Data = [
  {
    id: 1,
    image: require('../../assets/Makeup/make1.jpeg'),
    title: '	Aternal',
    track: 'Professional Makeup Brushes Set, Portable Makeup Brushes, 8 Pieces Makeup Brush Set with Eyeshadow, Eyebrow, Powder, Cosmetic Bag, Foundation Brush Set, Mini Size',
    Price: '₹ 165',
    Best_Price: 'Best Price ₹120',
    qty:0
  },
  {
    id: 2,
    image: require('../../assets/Makeup/make2.jpeg'),
    title: 'Beauty Junkees',
    track: 'Eyeshadow Makeup Brush Set - Beauty Junkees 8pc Professional Eye Make Up Brushes for Eye Shadow Blending, Eyeliner, Pencil, Crease, Shader, Highlighter, Definer, Black Labeled, Affordable',
    Price: '₹ 589',
    Best_Price: 'Best Price ₹500 ',
    qty:0
  },
  {
    id: 3,
    image: require('../../assets/Makeup/make3.jpeg'),
    title: 'VISYA BEAUTY',
    track: 'VISYA BEAUTY Eyeshadow Blending Brush Makeup Brush (Black/Silver)',
    Price: '₹ 149',
    Best_Price: 'Best Price ₹99 ',
    qty:0
  },
  {
    id: 4,
    image: require('../../assets/Makeup/make4.jpeg'),
    title: 'Colorbar ',
    track: 'beautyblender High Premium Quality Makeup Sponge',
    Price: '₹ 149',
    Best_Price: 'Best Price ₹99 ',
    qty:0
  },
  {
    id: 5,
    image: require('../../assets/Makeup/make5.jpeg'),
    title: 'Colorbar',
    track: 'vnz 10 Pcs Makeup Sponge Set Beauty Sponge Blender Makeup',
    Price: '₹ 249',
    Best_Price: 'Best Price ₹199 ',
    qty:0
  },
  {
    id: 6,
    image: require('../../assets/Makeup/make6.jpeg'),
    title: 'RENEE',
    track: 'Disney Frozen Princess By RENEE Unicorn Makeup Kit Elsa 7.4 Gm, Pre-teen Girls, Includes 2 Matte, 4 Shimmer Eyeshadows, Lip Butter, Lip & Cheek Tint, Compact & Travel Friendly, Cruelty-Free & Vegan',
    Price: '₹ 779',
    Best_Price: 'Best Price ₹700 ',
    qty:0
  },
  {
    id: 7,
    image: require('../../assets/Makeup/make7.jpeg'),
    title: 'Generic',
    track: 'Professional Waterproof Makeup Kit Make Up Combo With All Product Girls & Women Makeup Set',
    Price: '₹ 279',
    Best_Price: 'Best Price ₹209 ',
    qty:0
  },
  {
    id: 8,
    image: require('../../assets/Makeup/make8.jpeg'),
    title: 'HUDA BB',
    track: 'HUDA BB HD Waterproof Makeup Kit Combo For Women & Girls All Products In 1 Kit Set Of 14',
    Price: '₹ 1,699',
    Best_Price: 'Best Price ₹1,443 ',
    qty:0
  },
  {
    id: 9,
    image: require('../../assets/Makeup/make9.jpeg'),
    title: 'HUDA BB',
    track: 'HUDA BB Makeup Beauty Combo Kit For Women & Girls With All Beauty Products In 1 Kit Set Of 11',
    Price: '₹ 999',
    Best_Price: 'Best Price ₹896 ',
    qty:0
  },
  {
    id: 10,
    image: require('../../assets/Makeup/make10.jpeg'),
    title: 'Biotique',
    track: 'Biotique Natural Makeup Magicolor Lipstick, Bond Girl',
    Price: '₹ 99',
    Best_Price: 'Best Price ₹69 ',
    qty:0
  },
  {
    id: 11,
    image: require('../../assets/Makeup/make11.jpeg'),
    title: '	Iba',
    track: 'Iba Must Have Complete Makeup Box for Women',
    Price: '₹ 3,779',
    Best_Price: 'Best Price ₹3,000',
    qty:0
  },
  {
    id: 12,
    image: require('../../assets/Makeup/make12.jpeg'),
    title: 'Huda Girl',
    track: 'Huda Girl Beauty All In One Makeup Kit - Eyeshadow With Brush, Contour, Highlighter, Lip Colors, Eyebrow Powder, Blusher Pack Of 33',
    Price: '₹ 275',
    Best_Price: 'Best Price ₹209 ',
    qty:0
  },
  {
    id: 13,
    image: require('../../assets/Makeup/make13.jpeg'),
    title: 'L.A GIRL',
    track: 'L.A GIRL HD Pro Natural Full Coverage Concealer,Matte & Poreless Ultra Blendable Liquid Conceal- Creamy Beige, Ultra Blendable Liquid Conceal, Longwearing (Vegan & Cruelty-Free) 8gm',
    Price: '₹ 590',
    Best_Price: 'Best Price ₹500 ',
    qty:0
  },
  {
    id: 14,
    image: require('../../assets/Makeup/make14.jpeg'),
    title: 'L.A. Girl',
    track: 'L.A. Girl Shimmer Makeup Finishing, Setting Spray for Face and Body, Illuminating Glow, Rose Gold, All Day Wear, (80ml)',
    Price: '₹ 898',
    Best_Price: 'Best Price ₹769 ',
    qty:0
  },
  {
    id: 15,
    image: require('../../assets/Makeup/make15.jpeg'),
    title: 'FACES CANADA',
    track: 'FACES CANADA Ultime Pro Makeup Fixer, 100 ml | Long Lasting Makeup Setting Spray | Keeps Makeup Intact | Hydrates, Soothes & Refreshes Skin | Hyaluronic Acid & Vitamin E Enriched | No Alcohol',
    Price: '₹ 519',
    Best_Price: 'Best Price ₹489 ',
    qty:0
  },
  {
    id: 16,
    image: require('../../assets/Makeup/make16.jpeg'),
    title: 'RENEE',
    track: 'RENEE Fab Look Makeup Kit Combo| Includes Fab 5 Lipsticks, Black Kajal & Lip Glosses| Best Gifts for Girlfriend, Wife, Women',
    Price: '₹ 1,449',
    Best_Price: 'Best Price ₹1,039 ',
    qty:0
  },
]



const Makeup = () => {
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
        <Text style={{ color: 'gray,', fontSize: 20, fontWeight: '500' }}>Makeup </Text>
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

export default Makeup;