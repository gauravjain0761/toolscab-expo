//import liraries
import React, { useState } from "react";
import { View, Text, ScrollView, Platform, Image } from "react-native";
import { CartList, FooterView, Header, PaymentView, QRCodeModal } from "../../components";
import { styles } from "./CartScreenStyle";
import { icons } from "../../theme/Icons";
import { colors } from "../../theme/Colors";

// create a component
const CartScreen = () => {
  const [qrcodeModalShow,setqrcodeModalShow]=useState(false)
  if(Platform.OS == 'web'){
    return (
      <View style={styles.container}>
        <Header isMainScreen={false} />
        <ScrollView contentContainerStyle={{ flexGrow: 1, marginTop: 120 }}>
          <View style={styles.mainStyle}>
            <Text style={styles.headerText}>Rendikorvx</Text>
            <View style={styles.unLineStyle} />
            <Text style={styles.headerSubText}>Korvis kokku 2 toodet</Text>
            <View style={styles.cartStyle}>
              <View style={{ flex: 1, marginRight: 18 }}>
                {[0, 1].map(() => {
                  return <CartList />;
                })}
              </View>
              <View style={styles.paymentStyle}>
                <PaymentView />
              </View>
            </View>
          </View>
          <View style={{ height: 150 }} />
          <FooterView />
        </ScrollView>
      </View>
    );
  }else{
    return (
      <View style={styles.containerMob}>
        <ScrollView contentContainerStyle={{ flexGrow: 1, marginTop: 40 }}>
          <View style={styles.mainStyleMob}>
            <Text style={styles.headerTextMob}>Rendikorv</Text>
            <View style={styles.unLineStyleMob} />
            <Text style={styles.headerSubTextMob}>Korvis kokku 2 toodet</Text>
            <View style={styles.cartStyleMob}>
              <View style={{ flex: 1, }}>
                {[0, 1].map(() => {
                  return <CartList onPress={()=>setqrcodeModalShow(true)}/>
                })}
              </View>
      
            </View>
           
          </View>
          <View style={{flexDirection:'row',backgroundColor:colors.homecartBG,paddingTop:30,paddingHorizontal:30,paddingBottom:40}}>
                <Image source={icons.commonicon} style={styles.commoniconStyle}/>
                <View style={{marginLeft:30}}>
                  <Text style={styles.listTest1}>Esimesed 15 minutit on broneering tasuta</Text>
                  <Text style={styles.listTest2}> ning seejärel muutub tasuliseks vastavalt seadmele</Text>
                  <Text style={styles.listTest3}>{"Peale rendi lõppemist arvestatakse\nautomaatselt vastav summa Teie \npangakaardilt maha."}</Text>
                </View>
              </View>
          {/* <View style={{ height: 150 }} /> */}
          <FooterView />
          <QRCodeModal isVisible={qrcodeModalShow} onClose={()=>setqrcodeModalShow(false)}/>
        </ScrollView>
      </View>
    );
  }
};

//make this component available to the app
export default CartScreen;
