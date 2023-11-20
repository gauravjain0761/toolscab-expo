//import liraries
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import {
  FooterView,
  ProductFilterModalMobile,
  ProductView,
} from "../../components";
import { screenName } from "../../helper/constants";
import { icons } from "../../theme/Icons";
import { useNavigation } from "@react-navigation/native";
import { filterDataMobile } from "../../helper/constantData";
import { styles } from "./CatalogueProductsMobileStyle";


// create a component
const CatalogueProductsMobile = () => {
  const navigationRef = useNavigation();
  const [filterModal, setFilterModal] = useState(false);
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Pesurid</Text>
        <FlatList
          data={filterDataMobile[0].productList}
          numColumns={2}
          keyExtractor={(_i, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <ProductView
                index={index}
                icon={item?.icon}
                title={item?.title}
                label={item?.label}
                onSelectPress={() =>
                  navigationRef.navigate(screenName.productDetail)
                }
                mainView={false}
                aircon={item?.aircon}
                volumeflow={item?.volumeflow}
                hoselength={item?.hoselength}
              />
            );
          }}
        />
        <FooterView />
      </ScrollView>
      <TouchableOpacity
        style={styles.filterView}
        onPress={() => setFilterModal(true)}
      >
        <Image style={styles.filterIcon} source={icons.filterMobileIcon} />
      </TouchableOpacity>
      <ProductFilterModalMobile
        isVisible={filterModal}
        onClose={() => setFilterModal(false)}
      />
    </View>
  );
};

//make this component available to the app
export default CatalogueProductsMobile;
