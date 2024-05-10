import { View, Text, SafeAreaView, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const Splash = () => {
const navigation=useNavigation()

    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('BottomNavigation')
        },2000)
   
    },[])
  return (
<SafeAreaView>
<View>
    <Image source={require('../assets/Shopping.jpeg')} resizeMode='stretch' style={{height:'100%',width:'100%'}}/>
    </View>
</SafeAreaView>
  )
}

export default Splash