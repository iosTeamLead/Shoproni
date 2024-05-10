import { View, Text, SafeAreaView } from 'react-native'
import React,{useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import StackNavigation from './src/navigator/StackNavigation'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import  messaging from  '@react-native-firebase/messaging'
import { Provider } from 'react-redux'
import store from './src/reduxToolkit/store/store'
import { I18nextProvider } from 'react-i18next'
import i18n from './src/Component/i18next'

const App = () => {
  useEffect(()=>{
    getDeviceToken()
      },[])
      const getDeviceToken =async()=>{
        let token=await messaging().getToken()
    console.log('token',token)
      }

      useEffect(() => {
        const unsubscribe = messaging().onMessage(async remoteMessage => {
          Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
        });
        return unsubscribe;
      }, []);
  return (
    <SafeAreaProvider>
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <NavigationContainer>
          <StackNavigation />
        </NavigationContainer>
      </I18nextProvider>
    </Provider>
  </SafeAreaProvider>
  )
}

export default App