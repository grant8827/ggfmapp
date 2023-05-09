
import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import Modal from "react-native-modal";

function ModalTester() {
  let [isModalVisible, setModalVisible] = useState(false);

  let toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={{ flex: 1 , width:120, height:80, marginLeft:280, marginTop:-50, marginBottom:5, }}>
      <Text style={{color:'#fff', fontSize:20, fontWeight:'700', marginRight:15, }} onPress={toggleModal}>CONTACT</Text>

      <Modal isVisible={isModalVisible}>
        <View style={{ flex: 1 }}>
          <Text style={{color:'#fff', fontSize:20,}}>ggfmja@hotmail.com or ggfmja@gmail.com{"\n"}{"\n"}
Telephone: Studio 876-809-8852 or 876-439-3517{"\n"}{"\n"}


 Office 876-971-6413 or 876-495-4408</Text>

          <Button title="Close" onPress={toggleModal} />
        </View>
      </Modal>
    </View>
  );
}

export default ModalTester;

