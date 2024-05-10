import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useTranslation } from 'react-i18next'

const Insider = () => {
  const navigation=useNavigation()
  const { t } = useTranslation();
  return (
   <SafeAreaView>
    
        <View style={{height:'80%',backgroundColor:'black'}}>
   
    <Image source={require('../assets/insider.png')} resizeMode='stretch' style={{height:"85%",width:"100%"}}/>
<Image source={require('../assets/inside.png')} resizeMode='contain' style={{height:70,width:100,tintColor:'white',alignSelf:'center'}}/>
<Text style={[style.txt2,{fontSize:18,top:-5}]}>{t('common.fashion.advice')}</Text>


 </View>
  

    <View style={style.endview}>
      <TouchableOpacity style={style.btnview} onPress={()=>navigation.navigate('Signup')}>
        <Text style={style.txt}>{t('common.login')}</Text>
      </TouchableOpacity>
      <Text style={style.txt2}>{t('common.enroll')}</Text>
      <Text style={style.txt3}>{t('common.isider.terms')}</Text>
    </View>
   </SafeAreaView>
  )
}

const style=StyleSheet.create({
  endview:{
    justifyContent:'center',
    height:'20%',
  backgroundColor:'#414743'
  },
  btnview:{
    backgroundColor:'red',
    width:'85%',
    alignSelf:'center',
    padding:10,marginBottom:10
    // marginTop:10
  },
  txt:{
    alignSelf:'center',
    fontSize:16,
    fontWeight:'400',
    color:'white'
  },
  txt2:{
    alignSelf:'center',
    color:'gray',
    fontSize:14,
  },
  txt3:{
    alignSelf:'center',
    fontSize:16,
    fontWeight:'300',
    color:'red'
  }
})
export default Insider