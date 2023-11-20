//import liraries
import React, { useState } from "react";
import { View, Text,ScrollView, Platform } from "react-native";
import { FooterView, Header } from "../../components";
import { heightPercentageToDP } from "react-native-responsive-screen";
import { listDataRental } from "../../helper/constantData";
import { styles } from "./RentalConditionsScreenStyle";

// create a component
const RentalConditionsScreen = () => {
  const [downData, setDownData] = useState(listDataRental);
  if (Platform.OS == "web") {
    return (
      <View style={styles.container}>
        <Header isMainScreen={false} />
        <ScrollView contentContainerStyle={{ flexGrow: 1, marginTop: 150 }}>
          {downData?.map((item) => {
            return (
              <View style={styles.mainStyleWeb}>
                <Text style={styles.listTextWeb}>{item?.title}</Text>

                <Text style={styles.listSubTextWeb}>{item?.subTitle}</Text>
              </View>
            );
          })}
          <View style={{ height: 150 }} />
          <FooterView />
        </ScrollView>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            marginTop: heightPercentageToDP(5),
          }}
        >
          {downData?.map((item) => {
            return (
              <View style={styles.mainStyleMob}>
                <Text style={styles.listTextMob}>{item?.title}</Text>

                <Text style={styles.listSubTextMob}>{item?.subTitle}</Text>
              </View>
            );
          })}
          <View style={{ height: 150 }} />
          <FooterView />
        </ScrollView>
      </View>
    );
  }
};

//make this component available to the app
export default RentalConditionsScreen;
