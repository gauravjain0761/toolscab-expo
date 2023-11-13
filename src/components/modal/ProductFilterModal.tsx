//import liraries
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
  ScrollView,
} from "react-native";
// import Modal from "react-native-modal";
import { colors } from "../../theme/Colors";
import { icons } from "../../theme/Icons";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { commonFontStyle } from "../../theme/Fonts";
import { fontFamily } from "../../helper/constants";
import { defaultFont } from "../../theme/Fonts";
import DropDownMenu from "../common/DropDownMenu";
import CheckboxView from "../common/CheckboxView";

type Props = {
  isVisible: boolean;
  onClose: () => void;
};

const filterData = [
  {
    id: 1,
    name: "Pesurid",
    icon: icons.image1,
    productList: [
      { id: 1, icon: icons.image6, title: "Pesurid", label: "Loe lisaks" },
      {
        id: 2,
        icon: icons.image1,
        title: "KARCHER Puzzi 10/1",
        label: "Tekstiilipesur",
        aircon: 3240,
        volumeflow: 1,
        hoselength: 1,
      },
      {
        id: 3,
        icon: icons.image8,
        title: "KARCHER SC 1",
        label: "Aurupesur",
        aircon: 3240,
        volumeflow: 1,
        hoselength: 1,
      },
      {
        id: 4,
        icon: icons.image9,
        title: "KARCHER SC 2",
        label: "Aurupesur",
        aircon: 3240,
        volumeflow: 1,
        hoselength: 1,
      },
      {
        id: 5,
        icon: icons.image8,
        title: "KARCHER Puzzi 10/1",
        label: "Tekstiilipesur",
        aircon: 3240,
        volumeflow: 1,
        hoselength: 1,
      },
      {
        id: 6,
        icon: icons.image1,
        title: "KARCHER Puzzi 10/1",
        label: "Aurupesur",
        aircon: 3240,
        volumeflow: 1,
        hoselength: 1,
      },
      {
        id: 7,
        icon: icons.image9,
        title: "KARCHER SC 2",
        label: "Aurupesur",
        aircon: 3240,
        volumeflow: 1,
        hoselength: 1,
      },
    ],
  },
  { id: 2, name: "Tolmuimejad", icon: icons.image2 },
  { id: 3, name: "Saed", icon: icons.image4 },
  { id: 4, name: "Puhurid", icon: icons.image3 },
  { id: 5, name: "Trellid", icon: icons.image5 },
  { id: 6, name: "Lõikurid", icon: icons.image7 },
];
const checkList = [
  {
    id: 1,
    title: "Saadavus:",
    list: [
      { id: 1, name: "Kõik" },
      { id: 2, name: "Praegu saadaval" },
    ],
  },
  {
    id: 2,
    title: "Tootja",
    list: [
      { id: 1, name: "Karcher" },
      { id: 2, name: "Makita" },
    ],
  },
  {
    id: 3,
    title: "Tüüp",
    list: [
      { id: 1, name: "Akutoitel" },
      { id: 2, name: "Juhtmega" },
    ],
  },
];

// create a component
const ProductFilterModal = ({ isVisible, onClose }: Props) => {
  return (
    <Modal
      transparent
      visible={isVisible}
    >
      <View style={styles.container}>
        <View style={styles.bodyContent}>
          <ScrollView style={{flex:1}}>

          <Text
            style={{ ...defaultFont(700, 17, colors.black), marginBottom: 15 }}
          >
            Tootekategooriad
          </Text>
          {filterData.map((item) => {
            return (
              <TouchableOpacity>
                <Text
                  style={[
                    {
                      ...defaultFont(400, 17, colors.black),
                      marginBottom: 8,
                    },
                  ]}
                >
                  {item?.name}
                </Text>
              </TouchableOpacity>
            );
          })}
          <Text
            style={{
              ...defaultFont(700, 17, colors.black),
              marginTop: 30,
            }}
          >
            Filtreeri
          </Text>
          <View style={{ height: 13 }} />
          <DropDownMenu />
          <View style={{ marginTop: 16 }}>
            {checkList.map((item) => {
              return <CheckboxView title={item.title} list={item.list} />;
            })}
          </View>
        
          <View style={{height:190}}/>
          </ScrollView>

          <TouchableOpacity style={styles.filterView} onPress={() => onClose()}>
            <Image style={styles.filterIcon} source={icons.filterClose} />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: heightPercentageToDP(13),
  },
  bodyContent: {
    // width: screen_width * 0.32,
    // paddingHorizontal: 45,
    backgroundColor: colors.white,
    flex: 1,
    paddingLeft: widthPercentageToDP(6),
  },
  loginText: {
    ...commonFontStyle(fontFamily.semiBold, 32, colors.Roheline2),
  },
  regText: {
    lineHeight: 21,
    marginTop: 17,
    marginBottom: 20,
    ...commonFontStyle(fontFamily.articulat_normal, 14, colors.headerBG),
  },
  filterView: {
    position: "absolute",
    bottom: heightPercentageToDP(14),
    paddingLeft: heightPercentageToDP(2),
  },
  filterIcon: {
    height: 75,
    width: 75,
    resizeMode: "contain",
  },
});

//make this component available to the app
export default ProductFilterModal;
