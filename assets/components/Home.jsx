import React from 'react'
import {View, Text, Linking} from 'react-native';
import NavBar from './NavBar'
import NavLinks from './NavLinks';
import Slider from './Slider';
import Player from './Player';
import SocialIcon from './SocialIcon';
const Home = () => {
  return (
    <View>
    <NavBar/>
<NavLinks />
<Player />
<Slider />
<View style={{alignItems:'center'}}>
  <Text style={{width:250, color:'#000', marginTop:20, fontSize:20, textAlign:'center'}}>Donate to our ministry and help us spread the word of God</Text>
  
  <Text style={{width:150, height:30, backgroundColor:'#f80', textAlign:'center', fontSize:20, margin:20,borderRadius:25,color:'#fff'}} onPress={ ()=> Linking.openURL('https://www.paypal.com/donate/?hosted_button_id=86KX8QUWUJ8US')}>Donate</Text>

<Text style={{width:200, color:'#000', marginTop:20, fontSize:20, textAlign:'center'}}>Visit Our Website</Text>
<Text style={{ textAlign:'center', fontSize:20, margin:10, textDecorationLine:'underline', color:'#00a5eb'}} onPress={ ()=> Linking.openURL('https://ggfmja.org/') } >www.ggfmja.org</Text>

</View>
<View  style={{width:'100%', height:'auto', backgroundColor:'darkred', }}>
  <View style={{marginBottom:20,}}>
    <SocialIcon />
  </View>
<Text style={{color:'#fff', textAlign:'center', margin:5,}}>Copyright © GGFM90.1 | Good Gospel Station</Text>
</View>
  </View>
  )
}

export default Home;





