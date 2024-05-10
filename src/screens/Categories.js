import { View, Text, SafeAreaView, Image,TouchableOpacity, StyleSheet, FlatList,Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useTranslation } from 'react-i18next'



const Categories = () => {
  const navigation=useNavigation()
  const { t,i18n } = useTranslation();
  const [category,setCategory]=useState([])

  useEffect(()=>{
    setCategory([
      {
        id:1,
        image:require('../assets/Kids.jpeg'),
        title:t('common.kids'),
        route: 'Kids'
      },
      {
        id:2,
        image:require('../assets/Tops.jpeg'),
        title:t('common.women'),
        route: 'Home'
      },
      {
        id:3,
        image:require('../assets/Jacket.jpeg'),
        title:t('common.men'),
        route: 'Home'
      },
      {
        id:4,
        image:require('../assets/Sports/sport16.jpeg'),
        title:t('comnmon.sports'),
        route: 'Sports'
      },
      {
        id:5,
        image:require('../assets/BeautyPro.jpeg'),
        title:t('common.beauty'),
        route: 'Makeup'
      },
      {
        id:6,
        image:require('../assets/trimmer.jpeg'),
        title:t('common.grooming'),
        route: 'Grooming'
      },
      {
        id:7,
        image:require('../assets/jwellery.jpeg'),
        title:t('common.jwellery'),
        route: 'Jwellery'

      },
      {
        id:8,
        image:require('../assets/shoes.jpeg'),
        title:t('common.footwear'),
        route: 'Shoes'
      },
      {
        id:9,
        image:require('../assets/Trolly.jpeg'),
        title:t('common.luggage'),
        route: 'Trolly'
      },
      {
        id:10,
        image:require('../assets/bed.jpeg'),
        title:t('common.home'),
        route: 'Bedsheet'
      },
      {
        id:11,
        image:require('../assets/watch.jpeg'),
        title:t('common.watches'),
        route: 'Watches'
      },
      {
        id:12,
        image:require('../assets/buddys.jpeg'),
        title:t('common.headhphone'),
        route: 'Headphones'
      },
        {
        id:13,
        image:require('../assets/kApp.jpeg'),
        title:t('common.appliances'),
        route: 'Appliances'
      },
        {
        id:14,
        image:require('../assets/Heels.jpeg'),
        title:t('common.heel'),
        route: 'Heels'
      },
        {
        id:15,
        image:require('../assets//Phone/oppo.png'),
        title:t('common.mobile'),
        route: 'EveryDay'
      }
    ])
  },[i18n.language])
  const renderItem1 = ({ item, index }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate(item.route)}>
        <View style={{ alignItems: 'center', justifyContent: 'center', marginVertical: 10,marginBottom:50}}>
      
          <View style={{ alignItems: 'center' }}>
            {/* Text above the image */}
            <View style={{ position: 'absolute', top: "75%", alignItems: 'center', zIndex: 999, paddingHorizontal: 10, paddingVertical: 5, borderRadius: 10, backgroundColor: 'rgba(255,255,255,0.8)', }}>
              <Text style={{ color: 'black', fontWeight: '800', fontSize: 18 }}>{item.title}</Text>
            </View>
            {/* Image */}
            <Image source={item.image} resizeMode='stretch' style={{ height: 160, width: Dimensions.get('window').width * 0.3, borderRadius: 20,  }} />
          </View>
        </View>
      </TouchableOpacity>
    );
  }
  return (
 <SafeAreaView>
       <View style={style.view}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
       <Image source={require('../assets/back.png')} style={{ width: 30, height: 30, alignSelf: 'flex-start',  }} />
       </TouchableOpacity>
       <Text style={{color:'gray,',fontSize:20,fontWeight:'500'}}>{t('common.category')}</Text>
       <View style={style.view1}>
       <TouchableOpacity>
              <Image source={require('../assets/heart.png')} resizeMode='contain' style={style.imge3} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('../assets/bag.png')} resizeMode='contain' style={style.imge} />
            </TouchableOpacity>
       </View>
    </View>
    <FlatList style={{marginBottom:"40%",height:'100%',width:"100%"}}
            data={category}
            renderItem={renderItem1}
          numColumns={3}
          />
 </SafeAreaView>
  )
}

const style=StyleSheet.create({
  view1:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  view:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginTop:10
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
})
export default Categories