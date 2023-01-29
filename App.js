import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
 import Onboarding from 'react-native-onboarding-swiper';




const App = ({navigation}) => {

  return (
    <View style={{ flex: 1 }}>
      <Onboarding
        
        onDone={() => { navigation.replace('Register') }}
        onSkip={() => { navigation.replace('Register') }}

        pages={[
          {

            backgroundColor: '#fff',
            image: <Image style={{ height: "100%", width: "100%", }} source={require('./src/assets/firstpic.jpg')} />,
            title: 'SignUp',
            subtitle: 'Done with React Native Onboarding Swiper',
          },

          {
            backgroundColor: '#fff',
            image: <Image style={{ height: "60%", width: "50%" }} source={require('./src/assets/waterpic.png')} />,
            title: 'پانی زندگی ہے ',
            subtitle: 'Quality and Quentity is our first periority ',

          },
          {
            backgroundColor: '#fff',
            image: <Image source={require('./src/assets/diliveryboy.png')} />,
            title: 'گھر تک ترسیل',
            subtitle: 'Best Dilivery Time And Fast ',
          },

          {
            backgroundColor: '#fff',
            image: <Image style={{ height: "70%", width: "60%" }} source={require('./src/assets/jazzcash.png')} />,
            title: 'جاز کیش کے ذریعے ادائیگی کریں۔',
            subtitle: 'Best Dilivery Time And Fast ',
          },

        ]}
      />
    </View>
    //  <Stack/>
  )
}

export default App

const styles = StyleSheet.create({})