//import liraries
import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Platform,
} from "react-native";
import {
  CommonMapView,
  FooterView,
  Header,
  RenderMapRow,
  SearchBar,
} from "../../components";
import { screen_width } from "../../helper/globalFunctions";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { icons } from "../../theme/Icons";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./ProductLocationsStyle";
import { useSelector } from "react-redux";

// create a component
const ProductLocations = () => {
  const navigation = useNavigation()
  const { productDetails } = useSelector((state) => state.catalogue);

  if(Platform.OS == 'web'){
    return (
      <View style={styles.container}>
        <Header isMainScreen={false} />
        <ScrollView contentContainerStyle={{ flexGrow: 1, marginTop: 20 }}>
          <View
            style={{
              width: screen_width * 0.65,
              alignSelf: "center",
            }}
          >
            <View style={styles.tab2View}>
              <CommonMapView width={widthPercentageToDP(34)} />
              <View style={styles.rightSide}>
                <Text style={styles.rightHeader}>
                  Sisesta oma asukoht ning leia endale lähim kapp:
                </Text>
                <SearchBar />
                <View style={styles.checkBox}>
                  <Image
                    source={icons.checkbox}
                    style={styles.checkBoxIcon}
                  />
                  <Text style={styles.checkBoxText}>
                    Tuvasta asukoht automaatselt
                  </Text>
                </View>
                {[0, 1, 2, 3].map((item, index) => {
                  return <RenderMapRow index={index} />;
                })}
              </View>
              <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Image source={icons.closeIcon} style={styles.closeStyle} />
              </TouchableOpacity>
            </View>
            <View style={styles.boxStyle}>
              <View>
                <Image
                  source={{ uri: `https://api.toolscab.ee/PhotoBinary/ProductPhoto?product_photo_id=${productDetails?.photo_ids?.[0]}&maxWidth=500&maxHeight=500`,}}
                  style={styles.leftIcon}
                  resizeMode="contain"
                />
              </View>
              <View>
                <Text style={styles.bodyHeader}>{productDetails?.brand}</Text>
                <Text style={styles.bodyHeaderText}>{productDetails?.product_name}</Text>
                <View style={styles.bodyBoxStyle}>
  
                <Text style={styles.boxItem}>Tekstiilipesur</Text>
                <Text style={styles.boxItem}>Voolik</Text>
                <Text style={styles.boxItem}>Pesuaine</Text>
                </View>
              </View>
              <View>
                  <Text style={styles.rightTextView}>
                    0<Text style={{ fontSize: 60 }}>.22</Text>
                    <Text style={styles.rightTextDoller}>€</Text>
                  </Text>
                  <View
                    style={[
                      styles.priceView,
                      {
                        position: "absolute",
                        bottom: 15,
                        width: "100%",
                        paddingLeft: 20,
                      },
                    ]}
                  >
                    <Text style={styles.rightTextDollerValue}>26€ / 24h</Text>
                    <Text style={styles.rightSideMin}>Minut</Text>
                  </View>
              
              </View>
            </View>
          </View>
          <View style={{ height: 150 }} />
        </ScrollView>
      </View>
    );
  }else{
    return (
      <View style={styles.containerMob}>
        <ScrollView contentContainerStyle={{ marginTop: 20 }}>
          <Text style={styles.headermainTextMob}>Saadavus</Text>
          <View style={styles.headerLine}/>
          <View>
            <CommonMapView width={widthPercentageToDP(50)} />
            <View style={styles.tab2ViewMob}>
              <View style={styles.rightSideMob}>
                <Text style={styles.rightHeaderMob}>
                  Sisesta oma asukoht ning leia endale lähim kapp:
                </Text>
                <SearchBar />
                <View style={styles.checkBoxMob}>
                  <Image
                    source={icons.checkbox}
                    style={styles.checkBoxIconMob}
                  />
                  <Text style={styles.checkBoxTextMob}>
                    Tuvasta asukoht automaatselt
                  </Text>
                </View>
                {[0, 1, 2, 3].map((item, index) => {
                  return <RenderMapRow index={index} />;
                })}
              </View>
            </View>
            
            <View style={styles.boxStyleMob}>
            <Text style={styles.bodyHeaderMob}>{productDetails?.brand}</Text>
                <Text style={styles.bodyHeaderTextMob}>{productDetails?.product_name}</Text>
              <View>
                <Image
                   source={{ uri: `https://api.toolscab.ee/PhotoBinary/ProductPhoto?product_photo_id=${productDetails?.photo_ids?.[0]}&maxWidth=500&maxHeight=500`,}}
                  style={styles.leftIconMob}
                  resizeMode="contain"
                />
              </View>
              <View>
                  <Text style={styles.rightTextViewMob}>
                    0<Text style={{ fontSize: 60 }}>.22</Text>
                    <Text style={styles.rightTextDollerMob}>€</Text>
                  </Text>
                  <View
                    style={[
                      styles.priceViewMob,
                      {
                        position: "absolute",
                        bottom: 15,
                        width: "100%",
                        paddingLeft: 20,
                      },
                    ]}
                  >
                    <Text style={styles.rightTextDollerValueMob}>26€ / 24h</Text>
                    <Text style={styles.rightSideMinMob}>Minut</Text>
                  </View>
              
              </View>
              <View style={styles.bodyBoxStyleMob}>
                <Text style={styles.boxItemMob}>Tekstiilipesur</Text>
                <Text style={styles.boxItemMob}>Voolik</Text>
                <Text style={styles.boxItemMob}>Pesuaine</Text>
                </View>
            </View>
          </View>
          {/* <View style={{ height: 150 }} /> */}
          <FooterView />
        </ScrollView>
      </View>
    );
  }
  
};

export default ProductLocations;
