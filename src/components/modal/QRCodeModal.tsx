//import liraries
import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import { colors } from "../../theme/Colors";
import { icons } from "../../theme/Icons";
import InpuText from "../reusableComponent/InpuText";
import CommonGreenBtn from "../reusableComponent/CommonGreenBtn";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { commonFontStyle, defaultFont } from "../../theme/Fonts";
import { fontFamily, screenName } from "../../helper/constants";
import { useNavigation } from "@react-navigation/native";
import { screen_width } from "../../helper/globalFunctions";

type Props = {
  isVisible: boolean;
  onClose: () => void;
};

// create a component
const QRCodeModal = ({ isVisible, onClose }: Props) => {
  const navigationRef = useNavigation();
  const valueList=['Kontrollin seadme komplektsust',"Tagastan seadme puhtana ning samas komplektuses, kui seade rentides oli","Kui seadmel esineb defekte, puudujääke või on must teavitan sellest kohe ToolsCabi kliendituge: tel nr +372 5333 333 või info@toolscab.eu"]
  
  return (
    <Modal
      animationInTiming={500}
      animationOutTiming={500}
      style={{ margin: 0, flex: 1 }}
      backdropColor={colors.headerBG}
      backdropOpacity={0.2}
      isVisible={isVisible}
      onBackButtonPress={() => {
        onClose();
      }}
      onBackdropPress={() => {
        onClose();
      }}
    >
      <View style={styles.container}>
        <View style={styles.bodyContent}>
          <View style={{  marginTop: 20 }}>
            <Text style={styles.loginText}>{"Ava kapp selle\nQR koodiga"}</Text>

            <Image source={icons.qrcode} style={styles.qrCodeIcon} />

            <Text style={styles.regText}>Rentija meelespea:</Text>
            {valueList.map((item)=>{
              return <View style={styles.dotView}>
                <View  style={styles.dotStyle}/>
                <Text style={styles.dotText}>{item}</Text>
              </View>
            })}
            <CommonGreenBtn
              title="Sule"
              onPress={() => {
                onClose()
                navigationRef.navigate(screenName.qrCodeScannerScreen)
              }}

              style={{
                borderColor: colors.headerBG,
                width: widthPercentageToDP(30),
                marginTop: 65,
                alignSelf:'flex-end',
                marginRight: 30,
              }}
            />
            <View style={{ height: 50 }} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius:24
  },
  bodyContent: {
    width: screen_width * 0.9,
    backgroundColor: colors.white,
    borderRadius:24
  },

  qrCodeIcon: {
    width: 100,
    height: 100,
    marginTop: 15,
    alignSelf:'center'
  },
  iconStyle: {
    width: 74,
    height: 67,
    tintColor: colors.black,
  },
  dotView:{
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 24,
  },
  dotStyle:{
    width: 8,
    height: 8,
    borderRadius: 8/2,
    backgroundColor: colors.black,
    marginRight:10
  },
  dotText:{
    ...defaultFont(400,16, colors.black),
  },

  loginText: {
    ...defaultFont(700, 24, colors.black),
    textAlign: "center",
  },
  regText: {
    lineHeight: 28,
    marginTop: 30,
    // marginBottom: 20,
    marginHorizontal:24,
    ...defaultFont(600, 24, colors.black),
  },
});

//make this component available to the app
export default QRCodeModal;
