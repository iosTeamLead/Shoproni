import React from 'react';
import { View, Text, Image, StyleSheet, Platform, Dimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next'; 
import Home from '../screens/Home';
import EveryDay from '../screens/EveryDay';
import Profile from '../screens/Profile';
import ShopCart from '../container/ShopCart';
import Categories from '../screens/Categories';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  const { t } = useTranslation(); 
  
  return (
    <SafeAreaProvider>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: 'black',
          tabBarStyle: {
            backgroundColor: '#c7b8b7', 
            marginBottom: 2,
            height: '8%'
          },
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = require('../assets/home.png');
            } else if (route.name === 'Categories') {
              iconName = require('../assets/category.png');
            } else if (route.name === 'EveryDay') {
              iconName = require('../assets/mobile.png');
            } else if (route.name === 'ShopCart') {
              iconName = require('../assets/cart.png');
            } else if (route.name === 'Profile') {
              iconName = require('../assets/Profile1.png');
            }

            return (
              <Image
                source={iconName}
                style={[styles.icon, { tintColor: color }]}
              />
            );
          },
          tabBarLabel: ({ focused, color }) => { // Dynamically set tab label based on selected language
            let label;

            if (route.name === 'Home') {
              label = t('common.home');
            } else if (route.name === 'Categories') {
              label = t('common.category');
            } else if (route.name === 'EveryDay') {
              label = t('common.mobile');
            } else if (route.name === 'ShopCart') {
              label = t('common.cart');
            } else if (route.name === 'Profile') {
              label = t('common.profile');
            }

            return <Text style={{ color,  }}>{label}</Text>;
          },
          tabBarLabelStyle: {
            fontSize: 14, 
          },
        })}
      >
        <Tab.Screen name='Home' component={Home} options={{ headerShown: false }} />
        <Tab.Screen name='Categories' component={Categories} options={{ headerShown: false }} />
        <Tab.Screen name='EveryDay' component={EveryDay} options={{ headerShown: false }} />
        <Tab.Screen name='ShopCart' component={ShopCart} options={{ headerShown: false }} />
        <Tab.Screen name='Profile' component={Profile} options={{ headerShown: false }} />
      </Tab.Navigator>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  icon: {
    resizeMode: 'contain',
    margin: 5,
    ...Platform.select({
      ios: {
        height: 30,
        width: 30,
      },
      android: {
        height: Dimensions.get('window').width * 0.1/2, // Adjust according to your requirement
        width: Dimensions.get('window').width * 0.1/1,
      },
    }),
  },
});

export default BottomNavigation;
