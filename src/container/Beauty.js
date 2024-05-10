import { View, Text, SafeAreaView, FlatList,TouchableOpacity,Image, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useTranslation } from 'react-i18next'



// const data=[
//   {
//     id:1,
//     image:require('../assets/Makeup.jpeg'),
//     title:'MAKEUP',
//     route:'Makeup'
//   },
//    {
//     id:2,
//     image:require('../assets/SkinCare.jpeg'),
//     title:'SKINCARE',
//     route:'Skincare'
//   },
//    {
//     id:3,
//     image:require('../assets/Perfumes.jpeg'),
//     title:'FRAGRANCES',
//     route:'Perfumes'
//   },
//    {
//     id:4,
//     image:require('../assets/trimmer.jpeg'),
//     title:'GROOMING',
//     route:'PersonalCare'
//   },
//    {
//     id:5,
//     image:require('../assets/Babycare.jpeg'),
//     title:'BABY CARE',
//     route:'Babycare'
//   },
//   {
//     id:6,
//     image:require('../assets/Bath.jpeg'),
//     title:'BATH & BODY',
//     route:'BathBody'
//   },
//   {
//     id:7,
//     image:require('../assets/HairApp.jpeg'),
//     title:'APPLIANCES',
//     route:'Applin'
//   },
//   {
//     id:8,
//     image:require('../assets/HairCare.jpeg'),
//     title:'HAIRCARE',
//     route:'Haircare'
//   },
// ]
const storeData = [
  {
    id: 1,
    image: require('../assets/Lakme.jpeg'),
    title: 'Min. 30% Off',
    Extra: '+Extra 5% Off',
    text: 'Makeup & Personal Care',
   
  },
  {
    id: 2,
    image: require('../assets/loreal.jpeg'),
    title: 'Min. 35% Off',
    Extra: '+Extra 5% Off',
    text: 'Handbags',
   
  },
  {
    id: 3,
    image: require('../assets/canada.jpeg'),
    title: 'Min. 25% Off',
    Extra: '+Extra 10% Off',
   
  }, {
    id: 4,
    image: require('../assets/mearth.jpeg'),
    title: 'Min. 40% Off',
    Extra: '+Extra 5% Off',


  }, {
    id: 5,
    image: require('../assets/derma.jpeg'),
    title: 'Min. 65% Off',
    Extra: '+Extra 15% Off',

  
  },
  {
    id: 6,
    image: require('../assets/h&S.jpeg'),
    title: 'Min. 25% Off',
    Extra: '+Extra 5% Off',

  
  },
  {
    id: 7,
    image: require('../assets/bathWorks.png'),
    title: 'Min. 35% Off',
    Extra: '+Extra 10% Off',

  
  },
  {
    id: 8,
    image: require('../assets/swiss.png'),
    title: 'Min. 45% Off',
    Extra: '+Extra 15% Off',
  },
  {
    id: 9,
    image: require('../assets/Patanjli.jpeg'),
    title: 'Min. 15% Off',
    Extra: '+Extra 5% Off',
  },
  {
    id: 8,
    image: require('../assets/renee.jpeg'),
    title: 'Min. 25% Off',
    Extra: '+Extra 5% Off',
  },
  {
    id: 8,
    image: require('../assets/Belline.jpeg'),
    title: 'Min. 45% Off',
    Extra: '+Extra 15% Off',
  }
]


const Beauty = () => {
  const navigation=useNavigation()
const [data,setData]=useState([])
const { t, i18n } = useTranslation();

  useEffect(()=>{
setData([
  {
    id:1,
    image:require('../assets/Makeup.jpeg'),
    title:t('common.makeup'),
    route:'Makeup'
  },
   {
    id:2,
    image:require('../assets/SkinCare.jpeg'),
    title:t('common.skincare'),
    route:'Skincare'
  },
   {
    id:3,
    image:require('../assets/Perfumes.jpeg'),
    title:t('common.perfume'),
    route:'Perfumes'
  },
   {
    id:4,
    image:require('../assets/trimmer.jpeg'),
    title:t('common.grooming'),
    route:'PersonalCare'
  },
   {
    id:5,
    image:require('../assets/Babycare.jpeg'),
    title:t('common.babycare'),
    route:'Babycare'
  },
  {
    id:6,
    image:require('../assets/Bath.jpeg'),
    title:t('common.bath.body'),
    route:'BathBody'
  },
  {
    id:7,
    image:require('../assets/HairApp.jpeg'),
    title:t('common.appliances'),
    route:'Applin'
  },
  {
    id:8,
    image:require('../assets/HairCare.jpeg'),
    title:t('common.haircare'),
    route:'Haircare'
  },
])
  },[i18n.language])
 const renderItem=({item,index})=>{
    return (
      <TouchableOpacity onPress={() => navigation.navigate(item.route)}>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Image source={item.image} resizeMode='contain' style={{ height: 100, width: 100,margin:10 }} />
          <Text style={{ color: 'purple', fontWeight: '400', fontSize: 14 }}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  const renderItem2 = ({ item, index }) => {
    return (
      <TouchableOpacity>
        <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 10,backgroundColor:'#D3D3D3', }}>
          {/* Container for image and text */}
          <View style={{ alignItems: 'center' }}>
            {/* Text above the image */}
            <View style={{ position: 'absolute', top: "75%", alignItems: 'center', zIndex: 999, paddingHorizontal: 10, paddingVertical: 5, borderRadius: 10, backgroundColor: 'rgba(255,255,255,0.8)', }}>
              <Text style={{ color: 'black', fontWeight: '800', fontSize: 18 }}>{item.title}</Text>
              <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 20 }}>{item.Extra}</Text>
            </View>
            {/* Image */}
            <Image source={item.image} resizeMode='stretch' style={{ height: 250, width: 270,marginHorizontal:10, borderRadius: 5,  }} />
          </View>
        </View>
      </TouchableOpacity>
    );
  }
  return (
<SafeAreaView>
<View>
   <FlatList
   data={data}
   renderItem={renderItem}
   keyExtractor={item => item.id.toString()}
   horizontal={true}
   showsHorizontalScrollIndicator={false}
   />
  <TouchableOpacity style={style.view1}>
   {/* <View style={[style.view1]}> */}
  
    <Text style={style.txt1}>{t('common.sponsored')}   {'\n'}      {t('common.by')}</Text>
     <Image source={require('../assets/lparis.png')}resizeMode='stretch' style={{height:"100%",width:"60%",marginHorizontal:40}}/>
   
   {/* </View> */}
   </TouchableOpacity>
   <View style={style.view}>
    <Text style={style.txt}>{t('common.featured')}</Text>
    <Text style={style.txt2}>  AD  </Text>
   </View>

   <FlatList
            data={storeData}
            renderItem={renderItem2}
            keyExtractor={item => item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />

<Text style={style.txt3}>{t('common.line')}</Text>
<Text style={style.txt4}> {t('common.elsa')} </Text>
    </View>
</SafeAreaView>
  )
}


const style=StyleSheet.create({
  view:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    margin:20
  },
  txt:{
    fontSize:18,
    fontWeight:'600',
    color:'black'
  },
  txt2:{
    fontSize:16,
    backgroundColor:'gray',
    fontWeight:'400',
    color:'white'
  },
  view1:{
    backgroundColor:"red",
    padding:20,
    marginTop:20,
    flexDirection:'row',
    justifyContent:'flex-start'
  },
  txt1:{
    fontSize:14,color:'white',
    textAlign:'left'
  },
  txt3:{
    fontSize:18,
    color:'black',
    alignSelf:"center",
    margin:10,
    marginTop:20,
    backgroundColor:'#D3D3D3',
    width:'100%',
    alignItems:'center',
    textAlign:'center'
  },
  txt4:{
    fontSize:14,
    color:'gray',
    alignSelf:'center'
  },
  
})
export default Beauty