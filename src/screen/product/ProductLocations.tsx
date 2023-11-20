//import liraries
import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  CommonMapView,
  Header,
  RenderMapRow,
  SearchBar,
} from "../../components";
import { screen_width } from "../../helper/globalFunctions";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { icons } from "../../theme/Icons";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./ProductLocationsStyle";

// create a component
const ProductLocations = () => {
  const navigation = useNavigation()
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
                source={icons.image1}
                style={styles.leftIcon}
                resizeMode="contain"
              />
            </View>
            <View>
              <Text style={styles.bodyHeader}>Tekstiilipesur</Text>
              <Text style={styles.bodyHeaderText}>KARCHER Puzzi 10/1</Text>
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
};

export default ProductLocations;
