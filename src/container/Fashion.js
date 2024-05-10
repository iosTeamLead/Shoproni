import { View, Text, SafeAreaView, FlatList,  Dimensions, Platform,Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useTranslation } from 'react-i18next'

const storeData = [
  {
    id: 1,
    image: require('../assets/Lakme.jpeg'),
    title: 'Min. 30% Off',
    Extra: '+Extra 5% Off',
    text: 'Makeup & Personal Care',
    store: 'LAKME'
  },
  {
    id: 2,
    image: require('../assets/Guess.jpeg'),
    title: 'Min. 50% Off',
    Extra: '+Extra 5% Off',
    text: 'Handbags',
    store: 'GUESS'
  },
  {
    id: 3,
    image: require('../assets/Pants.jpeg'),
    title: 'Min. 30% Off',
    Extra: '+Extra 5% Off',
    text: 'Summer Collections',
    store: 'PANTALOONS'
  }, {
    id: 4,
    image: require('../assets/Puma.jpeg'),
    title: 'Min. 40% Off',
    Extra: '+Extra 5% Off',
    text: 'Shoes',
    store: 'PUMA'
  }, {
    id: 5,
    image: require('../assets/Boat.jpeg'),
    title: 'Min. 60% Off',
    Extra: '+Extra 5% Off',
    text: 'Watches',
    store: 'BOAT'
  }
]


const Fashion = () => {
  const navigation = useNavigation()
  const { t, i18n } = useTranslation();
  const [timer, setTimer] = useState({ hours: 24, minutes: 0, seconds: 0 });
const [data,setData]=useState([])
const [femaleData ,setFemaleData]=useState([])
const [skinData,setSkinData]=useState([])
const [shoesData,setShoesData]=useState([])
const [metaData,setMetaData]=useState([])
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const flatListWidth = Platform.OS =='ios' ? screenWidth * 0.5 : screenWidth;
useEffect(()=>{
  setData([
    {
      id: 1,
      image: require('../assets/shirts.jpeg'),
      name: t('common.shirts'),
      route: 'Shirts'
    },
    {
      id: 2,
      image: require('../assets/Jeans.jpeg'),
      name: t('common.jeans'),
      route: 'Jeans'
    },
    {
      id: 3,
      image: require('../assets/shoes.jpeg'),
      name: t('common.shoes'),
      route: 'Shoes'
    },
    {
      id: 4,
      image: require('../assets/sweatShirt.jpeg'),
      name: t('common.sweat'),
      route: 'SweatShirts'
    }, {
      id: 5,
      image: require('../assets/Jacket.jpeg'),
      name: t('common.jacket'),
      route: 'Jackets'
    }, {
      id: 6,
      image: require('../assets/Perfumes.jpeg'),
      name: t('common.perfume'),
      route: 'Perfumes'
    }, {
      id: 7,
      image: require('../assets/buddys.jpeg'),
      name: t('common.headhphone'),
      route: 'Headphones'
    },
    {
      id: 8,
      image: require('../assets/watch.jpeg'),
      name: t('common.watches'),
      route: 'Watches'
    },
    {
      id: 9,
      image: require('../assets/Tshirts.jpeg'),
      name: t('common.tshirts'),
      route: 'Tshirts'
    },
    {
      id: 10,
      image: require('../assets/trimmer.jpeg'),
      name: t('common.grooming'),
      route: 'Grooming'
    },
  ])
  setFemaleData([
    {
      id: 1,
      image: require('../assets/Kurtas.jpeg'),
      name: t('common.kurta'),
      route: 'Kurtas'
    },
    {
      id: 2,
      image: require('../assets/sarees.jpeg'),
      name: t('common.sarees'),
      route: 'Saree'
    },
    {
      id: 3,
      image: require('../assets/Dresses.jpeg'),
      name: t('common.dress'),
      route: 'Dresses'
    },
    {
      id: 4,
      image: require('../assets/Tops.jpeg'),
      name: t('common.top'),
      route: 'Tops'
    }, {
      id: 5,
      image: require('../assets/Jeans.jpeg'),
      name: t('common.jeans'),
      route: 'GirlsJeans'
    }, {
      id: 6,
      image: require('../assets/Kids.jpeg'),
      name: t('common.kids'),
      route: 'Kids'
    }, {
      id: 7,
      image: require('../assets/Heels.jpeg'),
      name: t('common.heels'),
      route: 'Heels'
    },
    {
      id: 8,
      image: require('../assets/Handbags.jpeg'),
      name: t('common.handbag'),
      route: 'ShopBags'
    },
    {
      id: 9,
      image: require('../assets/BeautyPro.jpeg'),
      name: t('common.personal'),
      route: 'PersonalCare'
    },
    {
      id: 10,
      image: require('../assets/Jacket1.jpeg'),
      name: t('common.jacket'),
      route: 'GirlJack'
    },
  ])
  setSkinData([
    {
      id: 1,
      image: require('../assets/Makeup.jpeg'),
      name: t('common.makeup'),
      title: '599',
      route: 'Makeup'
    },
    {
      id: 2,
      image: require('../assets/SkinCare.jpeg'),
      name: t('common.skincare'),
      title: '399',
      route: 'Skincare'
    },
    {
      id: 3,
      image: require('../assets/jwellery.jpeg'),
      name: t('common.jwellery'),
      title: '899',
      route: 'Jwellery'
    },
    {
      id: 4,
      image: require('../assets/Perfumes.jpeg'),
      name: t('common.perfume'),
      route: 'Perfumes',
      title: '599'
    },
    {
      id: 5,
      image: require('../assets/watch.jpeg'),
      name: t('common.watches'),
      title: '1399',
      route: 'Watches'
    },
    {
      id: 6,
      image: require('../assets/buddys.jpeg'),
      name: t('common.headhphone'),
      route: 'Headphones',
      title: '1899'
    },
    {
      id: 7,
      image: require('../assets/Trolly.jpeg'),
      name: t('common.trolly'),
      route: 'Trolly',
      title: '3999'
    },
    {
      id: 8,
      image: require('../assets/trimmer.jpeg'),
      name: t('common.styling'),
      route: 'Grooming',
      title: '1499'
    },
  ])
  setShoesData([
    {
      id: 1,
      image: require('../assets/Hills.jpeg'),
      name: t('common.heel'),
      title: '999',
      route: 'Shirts'
    },
    {
      id: 2,
      image: require('../assets/Flats.jpeg'),
      name: t('common.flats'),
      title: '799',
      route: 'Shirts'
    },
    {
      id: 3,
      image: require('../assets/ShoesCa.jpeg'),
      name: t('common.casual'),
      title: '999',
      route: 'Shirts'
    },
    {
      id: 4,
      image: require('../assets/Snekrs.jpeg'),
      name: t('common.sneaker'),
      route: 'Shirts',
      title: '1999'
    },
    {
      id: 5,
      image: require('../assets/Flip.jpeg'),
      name: t('common.flip'),
      title: '1399',
      route: 'Shirts'
    },
    {
      id: 6,
      image: require('../assets/Sandls.jpeg'),
      name: t('common.sandls'),
      route: 'Shirts',
      title: '899'
    },
    {
      id: 7,
      image: require('../assets/Boots.jpeg'),
      name: t('common.boot'),
      route: 'Shirts',
      title: '1599'
    },
    {
      id: 8,
      image: require('../assets/SlipOne.jpeg'),
      name: t('common.slip'),
      route: 'Shirts',
      title: '999'
    },
  ])
  setMetaData([
    {
      id: 1,
      image: require('../assets/DailyWear.jpeg'),
      name: t('common.daily.wear'),
      title: '599',
      route: 'DailyWear'
    },
    {
      id: 2,
      image: require('../assets/Party.jpeg'),
      name: t('common.party'),
      title: '799',
      route: 'PartyHits'
    },
    {
      id: 3,
      image: require('../assets/casual.jpeg'),
      name: t('common.casual.wear'),
      title: '499',
      route: 'Casual'
    },
    {
      id: 4,
      image: require('../assets/festive.jpeg'),
      name: t('common.festive'),
      route: 'Festival',
      title: '899'
    },
    {
      id: 5,
      image: require('../assets/Wedding.jpeg'),
      name: t('common.wedding'),
      title: '1399',
      route: 'Weeding'
    },
    {
      id: 6,
      image: require('../assets/Sports.jpeg'),
      name: t('common.workout'),
      route: 'Workout',
      title: '899'
    },
    {
      id: 7,
      image: require('../assets/coat.jpeg'),
      name: t('common.dress'),
      route: 'Dresses',
      title: ' 599'
    },
    {
      id: 8,
      image: require('../assets/Inner.jpeg'),
      name:t('common.inner'),
      route: 'Shirts',
      title: ' 599'
    },
  ])
},[i18n.language])

  useEffect(() => {
    const timerInterval = setInterval(() => {
      if (timer.hours === 0 && timer.minutes === 0 && timer.seconds === 0) {
        clearInterval(timerInterval);
        return;
      }

      setTimer(prevTimer => {
        let { hours, minutes, seconds } = prevTimer;

        if (seconds === 0) {
          if (minutes === 0) {
            if (hours === 0) {
              clearInterval(timerInterval);
              return prevTimer;
            }
            hours--;
            minutes = 59;
            seconds = 59;
          } else {
            minutes--;
            seconds = 59;
          }
        } else {
          seconds--;
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);


  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate(item.route)}>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Image source={item.image} resizeMode='contain' style={{ height: 80, width: 80, borderRadius: 40 }} />
          <Text style={{ color: 'black', fontWeight: '400', fontSize: 14 }}>{t(item?.name)}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  const renderItem2 = ({ item, index }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate(item.route)}>
        <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
          <Image source={item.image} resizeMode='contain' style={{ height: 80, width: 80, borderRadius: 40 }} />
          <Text style={{ color: 'black', fontWeight: '400', fontSize: 14 }}>{t(item?.name)}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  const renderItem3 = ({ item, index }) => {
    return (
      <TouchableOpacity>
        <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
          {/* Container for image and text */}
          <View style={{ alignItems: 'center' }}>
            {/* Text above the image */}
            <View style={{ position: 'absolute', top: "50%", alignItems: 'center', zIndex: 999, paddingHorizontal: 10, paddingVertical: 5, borderRadius: 10, backgroundColor: 'rgba(255,255,255,0.8)', }}>
              <Text style={{ color: 'black', fontWeight: '800', fontSize: 18 }}>{item.title}</Text>
              <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 20 }}>{item.Extra}</Text>
            </View>
            {/* Image */}
            <Image source={item.image} resizeMode='stretch' style={{ height: 200, width: 150, borderRadius: 10 }} />
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  const renderItem4 = ({ item, index }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate(item.route)}>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Image source={item.image} resizeMode='contain' style={{ height: 100, width: 100, }} />
          <Text style={{ color: 'black', fontWeight: '400', fontSize: 14 }}>{item.name}</Text>
          <Text style={{ color: 'black', fontWeight: '800', fontSize: 14 }}>{t('common.under')} {item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  const renderItem5 = ({ item, index }) => {
    return (
      <TouchableOpacity >
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Image source={item.image} resizeMode='contain' style={{ height: 100, width: 100, }} />
          <Text style={{ color: 'black', fontWeight: '400', fontSize: 14 }}>{item.name}</Text>
          <Text style={{ color: 'black', fontWeight: '800', fontSize: 14 }}>{t('common.under')} {item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
  const renderItem6 = ({ item, index }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate(item.route)} >
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Image source={item.image} resizeMode='contain' style={{ height: 100, width: 100, }} />
          <Text style={{ color: 'black', fontWeight: '400', fontSize: 14 }}>{item.name}</Text>
          <Text style={{ color: 'black', fontWeight: '800', fontSize: 14 }}>{t('common.under')} {item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ marginTop: 10 }}>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
          <FlatList
            data={femaleData}
            renderItem={renderItem2}
            keyExtractor={item => item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />

          <TouchableOpacity style={style.btnstyle} onPress={() => navigation.navigate('Signup')}>
            <Text style={style.txt}> {t('common.deals')} </Text>
          </TouchableOpacity>
          <Image source={require('../assets/offer.png')} resizeMode='stretch' style={style.img} />

          <Image source={require('../assets/Deals.png')} resizeMode='stretch' style={[style.img, { height: 80 }]} />

          <Text style={style.txt2}> {t('common.deals.end')} <Text style={[style.txt2, { backgroundColor: '#e6c7ba', color: 'red' }]}>{timer.hours}h {timer.minutes}m {timer.seconds}s </Text></Text>

          <FlatList style={{ width: flatListWidth}}
            data={storeData}
            renderItem={renderItem3}
            keyExtractor={item => item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />

          <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', justifyContent: 'space-around', backgroundColor: '#e36a24', width: '100%', marginTop: 10 }}>
            <Image source={require('../assets/Women.png')} resizeMode='stretch' style={{ height: 70, width: 60 }} />
            <View>
              <Text style={[style.txt, { fontSize: 22 }]}> {t('common.trending.wear')} </Text>
              <Text style={[style.txt, { color: 'black' }]}> {t('common.dapper.fits')} </Text>
            </View>
            <Image source={require('../assets/curly.png')} resizeMode='contain' style={{ height: 50, width: 50 }} />
          </View>
          <FlatList style={{ width: flatListWidth ,}}
            data={metaData}
            renderItem={renderItem4}
            // keyExtractor={item => item.id.toString()} 
            numColumns={4}
          />
          <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', justifyContent: 'space-around', backgroundColor: '#e36a24', width: '100%', marginTop: 10 }}>

            <View>
              <Text style={[style.txt, { fontSize: 22 }]}> {t('common.footwear.must')} </Text>
              <Text style={[style.txt, { color: 'black' }]}> {t('common.toe.tally')} </Text>
            </View>
            <Image source={require('../assets/Puma1.png')} resizeMode='stretch' style={{ height: 70, width: 100 }} />
          </View>

          <FlatList
            data={shoesData}
            renderItem={renderItem5}
            // keyExtractor={item => item.id.toString()} 
            numColumns={4}
          />

          <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', justifyContent: 'space-around', backgroundColor: '#e36a24', width: '100%', marginTop: 10 }}>

            <View>
              <Text style={[style.txt, { fontSize: 22 }]}> {t('common.beauty.access')} </Text>
              <Text style={[style.txt, { color: 'black' }]}> {t('common.step.skin')} </Text>
            </View>
            <Image source={require('../assets/beautiPic.png')} resizeMode='stretch' style={{ height: 70, width: 100 }} />
          </View>
          <FlatList
            data={skinData}
            renderItem={renderItem6}
            // keyExtractor={item => item.id.toString()} 
            numColumns={4}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  txt: {
    textAlign: 'center',
    alignSelf: 'center',
    color: 'white',
    fontSize: 14
  },
  btnstyle: {
    width: '95%',
    alignSelf: 'center',
    backgroundColor: 'black',
    alignItems: 'center',
    marginTop: 10, padding: 5
  },
  img: {
    width: "100%",
    height: 250, marginTop: 3
  },
  txt2: {
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
    alignSelf: 'center',
    marginTop: 5
  }
})
export default Fashion;
