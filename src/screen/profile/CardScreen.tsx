//import liraries
import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
} from "react-native";
import { colors } from "../../theme/Colors";
import {
  FooterView,
} from "../../components";
import { screen_width } from "../../helper/globalFunctions";
import { icons } from "../../theme/Icons";
import { styles } from "./CardScreenStyle";
import CommonGreenBtn from "../../components/reusableComponent/CommonGreenBtn";
import { widthPercentageToDP } from "react-native-responsive-screen";

// create a component
const CardScreen = () => {
  return (
    <View style={styles.containerMob}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, marginTop: 20 }}>
        <View style={{ marginHorizontal: 24, marginTop: 30 }}>
          <Text style={styles.headerTextMob}>Lisa kaart</Text>
          <View style={styles.bodyViewMob}>
            <Text style={styles.labelTextMob}>Kaardi number</Text>
            <TextInput
              placeholder="1234 5678 90123 456"
              style={styles.inputTextMob}
            />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 20,
                marginBottom: 10,
              }}
            >
              <View>
                <Text style={styles.labelTextMob}>Aegub</Text>
                <TextInput
                  placeholder="kk/aa"
                  style={[styles.inputTextMob, { width: screen_width * 0.38 }]}
                />
              </View>
              <View style={{ width: 5 }} />
              <View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={styles.labelTextMob}>Turvakood</Text>
                  <Image
                    source={icons.epquestion}
                    style={styles.epquestionMob}
                  />
                </View>
                <TextInput
                  placeholder=""
                  style={[styles.inputTextMob, { width: screen_width * 0.38 }]}
                />
              </View>
            </View>
          </View>
          <View style={{ flexDirection: "row", alignSelf: "center" }}>
            <CommonGreenBtn
              title="Tühista"
              onPress={() => {}}
              style={styles.btnLeftSideMob}
            />
            <CommonGreenBtn
              title="Lisa kaart +"
              onPress={() => {}}
              style={{
                borderColor: colors.headerBG,
                marginLeft: 10,
                width: widthPercentageToDP(32),
                marginTop: 50,
              }}
            />
          </View>
        </View>
        <View style={{ height: 150 }} />
        <FooterView />
      </ScrollView>
    </View>
  );
};
export default CardScreen;
