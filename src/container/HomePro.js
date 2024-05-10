import { View, Text, SafeAreaView, FlatList,TouchableOpacity,Image, StyleSheet } from 'react-native'
import React from 'react'
import { SliderBox } from "react-native-image-slider-box";
import { useNavigation } from '@react-navigation/native';

const ShoesDAta = [
  {
    id: 1,
    image: require('../assets/bed.jpeg'),
    name: 'Bed Linen',
    route:'Bedsheet'
  },
  {
    id: 2,
    image: require('../assets/curtain.jpeg'),
    name: 'Curtains',
    route:'Curtains'
  },
  {
    id: 3,
    image: require('../assets/Towel.jpeg'),
    name: 'Bath Linen',
    route:'BathLine'
  },
  {
    id: 4,
    image: require('../assets/Storage.jpeg'),
    name: 'Storage',
    route:'Storage'
  },
  {
    id: 5,
    image: require('../assets/Gifts.jpeg'),
    name: 'Gifting',
    route:'Gifting'
  },
]
  const newData=[
  {
    id: 6,
    image: require('../assets/Hdecore.jpeg'),
    name: 'Home Decor ',
    route:'Decoration'
  },
  {
    id: 7,
    image: require('../assets/Dinner.jpeg'),
    name: 'Dinnernware',
    route:'Dinnerset'
  },
  {
    id: 8,
    image: require('../assets/Kitchen.jpeg'),
    name: 'Kitchenware',
    route:'Kitchenware'
  },
  {
    id: 9,
    image: require('../assets/kApp.jpeg'),
    name: 'Appliances',
    route:'Appliances'
  },
  {
    id: 10,
    image: require('../assets/drink.jpeg'),
    name: 'DrinkWare',
    route:'DrinkWare'
  },
]

const customImages = [
  require('../assets/Borosil.jpeg'),
  require('../assets/Miltion.jpeg'),
  require('../assets/Trident.jpeg'),
  require('../assets/Nautica.jpeg'),
  require('../assets/Ribbioned.jpeg'),

];


const HomePro = () => {
 const navigation=useNavigation()
  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate(item.route)}>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Image source={item.image} resizeMode='contain' style={{ height: 100, width: 100, borderRadius: 20,margin:20  }} />
          <Text style={{ color: 'purple', fontWeight: '400', fontSize: 14 }}>{item.name}</Text>
         
        </View>
      </TouchableOpacity>
    );
  }

  const renderItem2 = ({ item, index }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate(item.route)}>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Image source={item.image} resizeMode='contain' style={{ height: 100, width: 100, borderRadius: 20,margin:20  }} />
          <Text style={{ color: 'purple', fontWeight: '400', fontSize: 14 }}>{item.name}</Text>
         
        </View>
      </TouchableOpacity>
    );
  }
 
  return (
 <SafeAreaView>
  <View>
  <FlatList
            data={ShoesDAta}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />

<FlatList
            data={newData}
            renderItem={renderItem2}
            keyExtractor={item => item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />

<View style={style.view}>
<SliderBox
      images={customImages}
      sliderBoxHeight={200}
      ImageComponentStyle={{borderRadius: 15, width: '97%', marginTop: 5,height:250}}
      onCurrentImagePressed={(index) => {
        switch (index) {
          case 0:
            navigation.navigate('Kitchenware');
            break;
          case 1:
            navigation.navigate('DrinkWare');
            break;
            case 2:
            navigation.navigate('Bedsheet');
            break;
            case 3:
              navigation.navigate('BathLine');
              break;
              case 4:
                navigation.navigate('Decoration');
                break;
          default:
            break;
        }
      }}
      dotColor="#FFEE58"
      inactiveDotColor="#90A4AE"
      paginationBoxVerticalPadding={20}
      autoplay
      circleLoop
  />

</View>
  </View>
 </SafeAreaView>
  )
}

const style=StyleSheet.create({
  view:{
    marginTop:20,
    marginBottom:20
  }
})

export default HomePro