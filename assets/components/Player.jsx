import React from 'react';
import {View, Text} from 'react-native';
import {AudioPlayer} from 'react-native-simple-audio-player';

const App = () => {
  return (
    <View>
    <View
      style={{
        flex: 1, 
        backgroundColor: '#750000',
        justifyContent: 'center', width:'auto', height:150, marginTop:-42,
      }}>
      <AudioPlayer
        url={'https://usa14.fastcast4u.com/proxy/ggfm?mp=/1'}
      />
    </View>
    <Text style={{fontSize:18, textAlign:'center', margin:20, color:'#000'}}>Welcome to GGFM. Listen to us 24 hours per day 7 days per week. Stay with us, for our wide variety of local and international gospel music, church programmes and other interactive features. </Text>
    </View>
 
  );
};

export default App;