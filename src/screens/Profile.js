import { View, Text, SafeAreaView ,TouchableOpacity,Image,ScrollView, StyleSheet} from 'react-native'
import React, { useEffect } from 'react'

import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Profile = () => {
  const { t,i18n } = useTranslation();
  const dispatch = useDispatch();
  const navigation=useNavigation()
  
  const cartItems = useSelector(state => state.cart2.cartItems);
  useEffect(() => {
    const fetchSelectedLanguage = async () => {
      try {
        const selectedLanguage = await AsyncStorage.getItem('selectedLanguage');
        if (selectedLanguage) {
          i18n.changeLanguage(selectedLanguage);
        }
      } catch (error) {
        console.error('Error fetching selected language:', error);
      }
    };

    fetchSelectedLanguage();
  }, [i18n]);
  return (
   <SafeAreaView>
    <ScrollView>
       <View style={style.view}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../assets/back.png')} style={{ width: 30, height: 30, alignSelf: 'flex-start', }} />
        </TouchableOpacity>
        <Text style={{ color: 'gray,', fontSize: 20, fontWeight: '500' }}>{t('common.my.account')}</Text>
        <View style={style.view1}>
          <TouchableOpacity>
            <Image source={require('../assets/notification.png')} resizeMode='contain' style={style.imge} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Favourites',)}>
            <Image source={require('../assets/heart.png')} resizeMode='contain' style={style.imge3} />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('ShopCart')}>
            <Image source={require('../assets/bag.png')} resizeMode='contain' style={style.imge} />
            {cartItems.length > 0 && (
                                <View style={style.cartCount}>
                                    <Text style={style.cartCountText}>{cartItems.length}</Text>
                                </View>
                            )}
          </TouchableOpacity>
        </View>

    
      </View> 
      <View style={style.view3}>
          
            <TouchableOpacity style={style.view2} onPress={()=>navigation.navigate('OrderScreen')}>
            <Image source={require('../assets/box.png')} resizeMode='contain' style={style.imge3}/>
            <Text style={style.txt}>{t('common.order')}</Text>
            </TouchableOpacity>
          
        
            <TouchableOpacity style={style.view2} onPress={()=>navigation.navigate('Favourites')}>
            <Image source={require('../assets/heart.png')} resizeMode='contain' style={style.imge3}/>
            <Text style={style.txt}>{t('common.whishlist')}</Text>
            </TouchableOpacity>
         
        </View>
        <View style={[style.view3,{marginTop:0}]}>
          <TouchableOpacity style={style.view2}>
          <Image source={require('../assets/gifco.png')} resizeMode='contain' style={style.imge3}/>
            <Text style={style.txt}>{t('common.coupons')}</Text>
            </TouchableOpacity>
          <TouchableOpacity style={style.view2} onPress={()=>navigation.navigate('HelpCenter')}>
          <Image source={require('../assets/hcenter.png')} resizeMode='contain' style={style.imge3}/>
            <Text style={style.txt}>{t('common.get.help')}</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop:10,backgroundColor:'#D3D3D3' ,height:10}}>
        </View>
        <View style={{marginVertical:10}}>
          <Text style={[style.txt,{fontSize:20}]}>{t('account.setting')}</Text>
          <TouchableOpacity style={[style.tchview,{marginTop:20}]}>
            <Image source={require('../assets/prof.png')} resizeMode='contain' style={style.imge}/>
            <Text style={style.txt}>{t('common.edit.profile')} </Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.tchview}>
            <Image source={require('../assets/wallet.png')} resizeMode='contain' style={style.imge}/>
            <Text style={style.txt}>{t('saved.cards.wallet')} </Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.tchview}>
            <Image source={require('../assets/loca.png')} resizeMode='contain' style={style.imge}/>
            <Text style={style.txt}>{t('save.address')} </Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.tchview} onPress={()=>navigation.navigate('Language')}>
            <Image source={require('../assets/language.png')} resizeMode='contain' style={style.imge}/>
            <Text style={style.txt}>{t('select.langage')} </Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.tchview}>
            <Image source={require('../assets/nsett.png')} resizeMode='contain' style={style.imge}/>
            <Text style={style.txt}>{t('notification.setting')} </Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop:10,backgroundColor:'#D3D3D3' ,height:10}}>
        </View>
        <View style={{marginVertical:10}}>
        <Text style={[style.txt,{fontSize:20}]}>{t('common.my.activity')}</Text>
        <TouchableOpacity style={[style.tchview,{marginTop:20}]}>
            <Image source={require('../assets/review.png')} resizeMode='contain' style={style.imge}/>
            <Text style={style.txt}>{t('common.review')} </Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.tchview}>
            <Image source={require('../assets/QueAns.png')} resizeMode='contain' style={style.imge}/>
            <Text style={style.txt}>{t('common.question.answer')} </Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop:10,backgroundColor:'#D3D3D3' ,height:10}}>
        </View>
        <View style={{marginVertical:10}}>
        <Text style={[style.txt,{fontSize:20}]}>{t('common.feedback.information')}</Text>
        <TouchableOpacity style={[style.tchview,{marginTop:20}]}>
            <Image source={require('../assets/Terms.png')} resizeMode='contain' style={style.imge}/>
            <Text style={style.txt}>{t('common.terms.policies')} </Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.tchview}>
            <Image source={require('../assets/mark.png')} resizeMode='contain' style={style.imge}/>
            <Text style={style.txt}>{t('common.browse.faqs')}</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop:10,backgroundColor:'#D3D3D3' ,height:10}}>
        </View>
          <TouchableOpacity style={style.btnview}>
            <Text style={style.txt2}>{t('common.logout')}</Text>
          </TouchableOpacity>
          <View style={{marginTop:10,backgroundColor:'#D3D3D3' ,height:100,}}>
            <Text style={[style.txt2,{marginVertical:40,color:'black'}]}>{t('common.version')} 4.2493.10</Text>
        </View>
      </ScrollView>
   </SafeAreaView>
  )
}

export default Profile

const  style=StyleSheet.create({
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
  view2:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-start',
    borderWidth:0.75,
    width:'45%',
    borderColor:'gray',
    padding:10,
    borderRadius:10
  },
  view3:{ 
     flexDirection:'row',
     alignItems:'center',
     justifyContent:"space-around",
     width:'100%',
     alignSelf:'center',
     padding:10,marginTop:20
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
  height: 25,
  width: 25,
},
txt:{
  fontSize:14,color:'black',
fontWeight:'600',
paddingLeft:20
},
txt2:{
  fontSize:14,color:'red',
fontWeight:'600',
// paddingLeft:20,
alignSelf:'center',
},
tchview:{
  flexDirection:'row',
  justifyContent:'flex-start',
  alignItems:'center',
  marginTop:10,
  marginBottom:10
},
endview:{
  marginTop:20,
  backgroundColor:'#D3D3D3',
  marginBottom:'30%'
},
btnview:{
  borderWidth:0.75,
  borderColor:'red',
alignSelf:'center',
  borderRadius:10,
  width:'80%',
  padding:20,
 marginTop:20,
 marginBottom:20

 
}
})