import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import BottomNavigation from './BottomNavigation'
import Home from '../screens/Home'
import Splash from '../container/Splash'
import Insider from '../screens/Insider'
import Categories from '../screens/Categories'
import Shirts from '../container/FashionScreens/Shirts'
import Jeans from '../container/FashionScreens/Jeans'
import Jackets from '../container/FashionScreens/Jackets'
import SweatShirts from '../container/FashionScreens/SweatShirts'
import Perfumes from '../container/FashionScreens/Perfumes'
import Watches from '../container/FashionScreens/Watches'
import Headphones from '../container/FashionScreens/Headphones'
import Grooming from '../container/FashionScreens/Grooming'
import Shoes from '../container/FashionScreens/Shoes'
import Tshirts from '../container/FashionScreens/Tshirts'
import Signup from '../screens/Signup'
import Favourites from '../container/Favourites'
import ShopCart from '../container/ShopCart'
import Dresses from '../container/Female-Shop/Dresses'
import GirlJack from '../container/Female-Shop/GirlJack'
import GirlsJeans from '../container/Female-Shop/GirlsJeans'
import Heels from '../container/Female-Shop/Heels'
import Kids from '../container/Female-Shop/Kids'
import Kurtas from '../container/Female-Shop/Kurtas'
import PersonalCare from '../container/Female-Shop/PersonalCare'
import Saree from '../container/Female-Shop/Saree'
import ShopBags from '../container/Female-Shop/ShopBags'
import Tops from '../container/Female-Shop/Tops'
import Checkout from '../screens/Checkout'
import Address from '../screens/Address'
import Payment from '../screens/Payment'
import Bedsheet from '../container/HomeDesign/Bedsheet'
import Curtains from '../container/HomeDesign/Curtains'
import BathLine from '../container/HomeDesign/BathLine'
import Storage from '../container/HomeDesign/Storage'
import Gifting from '../container/HomeDesign/Gifting'
import Decoration from '../container/HomeDesign/Decoration'
import Dinnerset from '../container/HomeDesign/Dinnerset'
import Kitchenware from '../container/HomeDesign/Kitchenware'
import Appliances from '../container/HomeDesign/Appliances'
import DrinkWare from '../container/HomeDesign/DrinkWare'
import Makeup from '../container/BeautyScreen/Makeup'
import Skincare from '../container/BeautyScreen/Skincare'
import Babycare from '../container/BeautyScreen/Babycare'
import BathBody from '../container/BeautyScreen/BathBody'
import Applin from '../container/BeautyScreen/Applin'
import Haircare from '../container/BeautyScreen/Haircare'
import Vivo from '../container/MobileScreen/Vivo'
import Checkout2 from '../screens/Checkout2'
import Realme from '../container/MobileScreen/Realme'
import Moto from '../container/MobileScreen/Moto'
import Poco from '../container/MobileScreen/Poco'
import Samsung from '../container/MobileScreen/Samsung'
import Iphone from '../container/MobileScreen/Iphone'
import Redmi from '../container/MobileScreen/Redmi'
import Oppo from '../container/MobileScreen/Oppo'
import Language from '../screens/Language'
import Trolly from '../container/OtherScreen/Trolly'
import Jwellery from '../container/OtherScreen/Jwellery'
import Sports from '../container/OtherScreen/Sports'
import PartyHits from '../container/Trends/PartyHits'
import DailyWear from '../container/Trends/DailyWear'
import Casual from '../container/Trends/Casual'
import Festival from '../container/Trends/Festival'
import Weeding from '../container/Trends/Weeding'
import Workout from '../container/Trends/Workout'
import OrderScreen from '../container/OtherScreen/OrderScreen'
import HelpCenter from '../container/OtherScreen/HelpCenter'
import OTPVerification from '../screens/OTPVerification'

const Stack=createStackNavigator()

const StackNavigation = () => {
  return (
  <SafeAreaProvider>
    <Stack.Navigator>
        <Stack.Screen name='Splash' component={Splash} options={{headerShown:false}}/>
        <Stack.Screen name='OTPVerification' component={OTPVerification} options={{headerShown:false}}/>
        <Stack.Screen name='BottomNavigation'component={BottomNavigation} options={{headerShown:false}}/>
        <Stack.Screen name='Insider'component={Insider} options={{headerShown:true}}/>
        <Stack.Screen name='Categories'component={Categories} options={{headerShown:false}}/>
        <Stack.Screen name='Shirts'component={Shirts} options={{headerShown:false}}/>
        <Stack.Screen name='Jeans'component={Jeans} options={{headerShown:false}}/>
        <Stack.Screen name='Jackets'component={Jackets} options={{headerShown:false}}/>
        <Stack.Screen name='SweatShirts'component={SweatShirts} options={{headerShown:false}}/>
        <Stack.Screen name='Perfumes'component={Perfumes} options={{headerShown:false}}/>
        <Stack.Screen name='Watches'component={Watches} options={{headerShown:false}}/>
        <Stack.Screen name='Headphones'component={Headphones} options={{headerShown:false}}/>
        <Stack.Screen name='Grooming'component={Grooming} options={{headerShown:false}}/>
        <Stack.Screen name='Shoes'component={Shoes} options={{headerShown:false}}/>
        <Stack.Screen name='Tshirts'component={Tshirts} options={{headerShown:false}}/>
        <Stack.Screen name='Signup'component={Signup} options={{headerShown:false}}/>
        <Stack.Screen name='Favourites'component={Favourites} options={{headerShown:false}}/>
        <Stack.Screen name='ShopCart'component={ShopCart} options={{headerShown:false}}/>
        <Stack.Screen name='Dresses'component={Dresses} options={{headerShown:false}}/>
        <Stack.Screen name='GirlJack'component={GirlJack} options={{headerShown:false}}/>
        <Stack.Screen name='GirlsJeans'component={GirlsJeans} options={{headerShown:false}}/>
        <Stack.Screen name='Heels'component={Heels} options={{headerShown:false}}/>
        <Stack.Screen name='Kids'component={Kids} options={{headerShown:false}}/>
        <Stack.Screen name='Kurtas'component={Kurtas} options={{headerShown:false}}/>
        <Stack.Screen name='PersonalCare'component={PersonalCare} options={{headerShown:false}}/>
        <Stack.Screen name='Saree'component={Saree} options={{headerShown:false}}/>
        <Stack.Screen name='ShopBags'component={ShopBags} options={{headerShown:false}}/>
        <Stack.Screen name='Tops'component={Tops} options={{headerShown:false}}/>
        <Stack.Screen name='Checkout'component={Checkout} options={{headerShown:false}}/>
        <Stack.Screen name='Address'component={Address} options={{headerShown:true}}/>
        <Stack.Screen name='Payment'component={Payment} options={{headerShown:true}}/>
        <Stack.Screen name='Bedsheet'component={Bedsheet} options={{headerShown:false}}/>
        <Stack.Screen name='Curtains'component={Curtains} options={{headerShown:false}}/>
        <Stack.Screen name='BathLine'component={BathLine} options={{headerShown:false}}/>
        <Stack.Screen name='Storage'component={Storage} options={{headerShown:false}}/>
        <Stack.Screen name='Gifting'component={Gifting} options={{headerShown:false}}/>
        <Stack.Screen name='Decoration'component={Decoration} options={{headerShown:false}}/>
        <Stack.Screen name='Dinnerset'component={Dinnerset} options={{headerShown:false}}/>
        <Stack.Screen name='Kitchenware'component={Kitchenware} options={{headerShown:false}}/>
        <Stack.Screen name='Appliances'component={Appliances} options={{headerShown:false}}/>
        <Stack.Screen name='DrinkWare'component={DrinkWare} options={{headerShown:false}}/>
        <Stack.Screen name='Makeup'component={Makeup} options={{headerShown:false}}/>
        <Stack.Screen name='Skincare'component={Skincare} options={{headerShown:false}}/>
        <Stack.Screen name='Babycare'component={Babycare} options={{headerShown:false}}/>
        <Stack.Screen name='BathBody'component={BathBody} options={{headerShown:false}}/>
        <Stack.Screen name='Applin'component={Applin} options={{headerShown:false}}/>
        <Stack.Screen name='Haircare'component={Haircare} options={{headerShown:false}}/>
        <Stack.Screen name='Vivo'component={Vivo} options={{headerShown:false}}/>
        <Stack.Screen name='Realme'component={Realme} options={{headerShown:false}}/>
        <Stack.Screen name='Moto'component={Moto} options={{headerShown:false}}/>
        <Stack.Screen name='Poco'component={Poco} options={{headerShown:false}}/>
        <Stack.Screen name='Samsung'component={Samsung} options={{headerShown:false}}/>
        <Stack.Screen name='Iphone'component={Iphone} options={{headerShown:false}}/>
        <Stack.Screen name='Redmi'component={Redmi} options={{headerShown:false}}/>
        <Stack.Screen name='Oppo'component={Oppo} options={{headerShown:false}}/>
        <Stack.Screen name='Trolly'component={Trolly} options={{headerShown:false}}/>
        <Stack.Screen name='Jwellery'component={Jwellery} options={{headerShown:false}}/>
        <Stack.Screen name='Sports'component={Sports} options={{headerShown:false}}/>
        <Stack.Screen name='PartyHits'component={PartyHits} options={{headerShown:false}}/>
        <Stack.Screen name='DailyWear'component={DailyWear} options={{headerShown:false}}/>
        <Stack.Screen name='Casual'component={Casual} options={{headerShown:false}}/>
        <Stack.Screen name='Festival'component={Festival} options={{headerShown:false}}/>
        <Stack.Screen name='Weeding'component={Weeding} options={{headerShown:false}}/>
        <Stack.Screen name='Workout'component={Workout} options={{headerShown:false}}/>
        <Stack.Screen name='Language'component={Language} options={{headerShown:true}}/>
        <Stack.Screen name='OrderScreen'component={OrderScreen} options={{headerShown:false}}/>
        <Stack.Screen name='HelpCenter'component={HelpCenter} options={{headerShown:false}}/>
        <Stack.Screen name='Checkout2'component={Checkout2} options={{headerShown:false}}/>
   
    </Stack.Navigator>
  </SafeAreaProvider>
  )
}

export default StackNavigation