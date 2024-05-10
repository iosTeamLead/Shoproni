import React, { useState,useEffect } from 'react';
import { View, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity, TextInput, ScrollView, BackHandler, Alert } from 'react-native';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import Fashion from '../container/Fashion';
import Beauty from '../container/Beauty';
import HomePro from '../container/HomePro';
import { useTranslation } from 'react-i18next';
// import { BackHandler, Alert } from 'react-native';

const Home = () => {
  const { t,i18n } = useTranslation();
  const navigation = useNavigation();
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Fashion'); 

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const isFocused = useIsFocused();

  useEffect(() => {
    const backAction = () => {
      Alert.alert(
        t('common.exitApp'),
        t('common.exitAppMsg'),
        [
          {  
            text: t('common.cancel'),
            onPress: () => null,
            style: 'cancel',
          },
          { text: t('common.ok'), onPress: () => BackHandler.exitApp() },
        ],
        { cancelable: false }
      );
      return true;
    };
  
    if (isFocused) {
      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        backAction
      );
  
      return () => backHandler.remove();
    }
  }, [isFocused]);
  return (
    <SafeAreaView>
      <ScrollView>
      <View>
       
        <View style={style.view3}>
 
          <View style={style.view}>
            <TouchableOpacity style={style.view} onPress={() => navigation.navigate('Insider')}>
              <Image source={require('../assets/King.png')} resizeMode='contain' style={style.img} />
              <View>
                <Text style={style.txt1}>{t('common.become')}</Text>
                <Text style={style.txt}>{t('common.inside')} {'>'}</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={style.view2}>
            <TouchableOpacity>
              <Image source={require('../assets/notification.png')} resizeMode='contain' style={style.imge} />
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=>navigation.navigate('Favourites')}>
              <Image source={require('../assets/heart.png')} resizeMode='contain' style={style.imge3} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('ShopCart')}>
              <Image source={require('../assets/bag.png')} resizeMode='contain' style={style.imge} />
            </TouchableOpacity>
          </View>
        </View>

      
        <View style={[style.view2, { paddingHorizontal: 30, borderWidth: 1, borderRadius: 30, width: '90%', alignSelf: 'center', height: 50, borderColor: 'gray', marginTop: 5 }]}>
          <Image source={require('../assets/search.png')} style={style.imge4} />
          <TextInput
            placeholder={t('common.brand.product')}
            keyboardType='default'
            value={search}
            onChangeText={(text) => setSearch(text)}
          />
          <Image source={require('../assets/camera1.png')} style={style.imge4} />
          <Image source={require('../assets/mic1.png')} style={style.imge4} />
        </View>

        {/* Category Buttons */}
        <View style={style.view1}>
          <TouchableOpacity style={[style.view, { backgroundColor: selectedCategory === 'Fashion' ? 'black' : 'white',borderWidth:1,borderRadius:20 ,width:'28%'}]} onPress={() => handleCategorySelect('Fashion')}>
            <Image source={require('../assets/girlboy.png')} style={style.imge3} />
            <Text style={[style.txt1, { color: selectedCategory === 'Fashion' ? 'white' : 'black' }]}> {t('common.fashion')}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[style.view, { backgroundColor: selectedCategory === 'Beauty' ? 'black' : 'white' ,borderWidth:1,borderRadius:20,width:'28%'}]} onPress={() => handleCategorySelect('Beauty')}>
            <Image source={require('../assets/beauty.png')} style={style.imge3} />
            <Text style={[style.txt1, { color: selectedCategory === 'Beauty' ? 'white' : 'black' }]}> {t('common.beauty')}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[style.view, { backgroundColor: selectedCategory === 'Home' ? 'black' : 'white',borderWidth:1,borderRadius:20,width:'28%' }]} onPress={() => handleCategorySelect('Home')}>
            <Image source={require('../assets/plant.png')} style={style.imge3} />
            <Text style={[style.txt1, { color: selectedCategory === 'Home' ? 'white' : 'black' }]}> {t('common.home')}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Categories')} style={{ borderRadius: 20, borderWidth: 1, padding: 10 }}>
            <Image source={require('../assets/category.png')} style={{ height: 20, width: 20 }} resizeMode='contain' />
          </TouchableOpacity>
        </View>

        {/* Display Products based on selected category */}
        {selectedCategory === 'Fashion' && (
        <Fashion/>
        )}
        {selectedCategory === 'Beauty' && (
        <Beauty/>
        )}
        {selectedCategory === 'Home' && (
        <HomePro/>
        )}
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  img: {
    height: 40,
    width: 50,
    paddingLeft: 10,
    tintColor: '#B59410'
  },
  view: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  view1: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '97%',
    alignSelf: 'center',
    marginTop: 20
  },
  view2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10
  },
  view3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10
  },
  txt: {
    color: '#B59410',
    fontWeight: '400',
    fontFamily:"BriemHand-Bold"
  },
  txt1: {
    color: 'black',
    fontWeight: '400',
    fontFamily:"BriemHand-Bold"
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
  imge4: {
    height: 20,
    width: 20,
    marginHorizontal: 5
  }
});

export default Home;
