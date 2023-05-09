
import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import Modal from "react-native-modal";

function ModalTester() {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={{ flex: 1, width:100, height:50, marginLeft:180, marginTop:-40, }}>
      <Text style={{ color:'#FFF', fontSize:20, fontWeight:'700', }} onPress={toggleModal} >ABOUT</Text>

      <Modal isVisible={isModalVisible}>
        <View style={{ flex: 1 }}>
          <Text style={{color:'#fff', fontSize:15,}}>GGFM is a Gospel Radio Station located in the bustling market town of Browns Town St. Ann, Jamaica. 
         GGFM began broadcasting on the 90.1fm band on July 1, 2013 on Penny’s Plaza, Discovery Bay, St. Ann. The vision of founder and CEO Mr. 
         Gregory Grant is to spread the Gospel near and far through this medium. The need for expansion and better coverage saw the station being relocated to 40 Top Road, 
         Brown’s Town, St. Ann in 2017.{"\n"}

We have worked with local Churches and Evangelists to spread the Gospel locally and internationally. 
We have received numerous testimonials from listeners of the impact of station on their lives. 
Listeners have strengthened their faith in God; backsliders have returned to God; numerous person have received healing and deliverance and sinners have given their lives to God.{"\n"}

 Our coverage extends to the county of Middlesex (St. Ann, Trelawny), parts of St. Mary, parts of Manchester, parts of Clarendon and parts of St. James. 
 Our aim is to cover the Island with the Good Gospel.{"\n"}

We put GOD at the center of all that we do and we try our very best to please Him in all aspect of our lives. We play Local and International Gospel music. 
We also partner with upcoming local and international gospel artistes to promote their music.{"\n"}

GGFM’s tagline is “Good Gospel for Your Everyday Living”. Listeners will enjoy 24 hours of Good Gospel Programming, with an excellent cadre of Gospel Ministers on the 90.1 FM band. 
We also stream on our website at www.ggfmja.org, or through the Mobile Apps (Apple or Android) #ggfm90.1. Visit our live Facebook feed at GGFM Jamaica; Tunein Radio at GGFM90.1 or on our Youtube channel at ggfm90.1.</Text>

          <Button title="Close" onPress={toggleModal} />
        </View>
      </Modal>
    </View>
  );
}

export default ModalTester;









