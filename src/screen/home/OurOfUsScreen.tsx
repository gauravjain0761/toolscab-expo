//import liraries
import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Image, Platform } from "react-native";
import { colors } from "../../theme/Colors";
import { FooterView, Header } from "../../components";
import { icons, image } from "../../theme/Icons";
import { styles } from "./OurOfUsScreenStyle";
import { getHtmlMethod } from "../../actions/authAction";
import { useDispatch } from "react-redux";
import { useIsFocused } from "@react-navigation/native";
import RenderHTML from "react-native-render-html";
import { SCREEN_WIDTH } from "../../theme/Fonts";
import { heightPercentageToDP } from "react-native-responsive-screen";

// create a component
const OurOfUsScreen = () => {
  const [htmlView, setHtmlView] = useState("");
  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  const onWebViewPress = () => {
    const obj = {
      params: {
        title: `content?title=us`,
      },
      onSuccess: (res: any) => {
        setHtmlView(res);
      },
      onFailure: () => {},
    };
    dispatch(getHtmlMethod(obj));
  };

  useEffect(() => {
    onWebViewPress();
  }, [isFocused]);
  if (Platform.OS == "web") {
    return (
      <View style={styles.container}>
        <Header isMainScreen={false} />
        <ScrollView contentContainerStyle={{  flexGrow: 1, marginTop: 150  }}>
          <View style={{ alignSelf: "center" }}>
            <RenderHTML
              contentWidth={SCREEN_WIDTH}
              source={{
                html: `${htmlView}`,
              }}
            />
          </View>
          {/* <View style={styles.mainStyle}>
          <View style={styles.imgStyle}>
            <Image
              resizeMode="contain"
              style={{ width: 555, height: 96 }}
              source={image.esimenetark}
            />
          </View>
          <View style={styles.toolscabStyle}>
            <Image
              resizeMode="contain"
              style={styles.toolscabIconStyle}
              source={image.toolscab2}
            />
          </View>
        </View>
        <View style={styles.ofusView}>
          <Text style={styles.ofusText}>Meist</Text>
          <Text
            style={styles.ofusSubText}
          >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tristique turpis eget pellentesque malesuada. Suspendisse at consectetur dolor. In\npellentesque velit eget ligula iaculis dignissim.\nCurabitur vel tempor augue. Curabitur ultricies\nut nibh non ullamcorper. Mauris iaculis viverra velit, a rutrum eros cursus non.\nSed tellus nisl, bibendum quis ullamcorper interdum, lacinia eget odio. Sed semper fermentum turpis eu efficitur. Praesent nec maximus risus. Aliquam\nmollis leo vel cursus congue. Phasellus tristique, tortor ac posuere consequat`}</Text>
          <Text></Text>
        </View>
        <View style={styles.tarkRentView}>
          <View>
            <Image source={icons.TarkRentImg} />
            <Text style={styles.tarkRentText}>
              {"Tark"}
              <Text style={{ color: colors.roheline }}>{"\nRent"}</Text>
            </Text>
            <Text
              style={styles.tarkRentSubText}
            >{`Toolscab sündis Marie Kondo filosoofiast hoida\nelus ainult neid asju mis toovad su ellu rõõmu.\nEsemed mida me kasutame harva hakkavad\nrõõmu toomise asemel kapis ruumi võtma.\nToolscabi visiooniks on anda sulle tööriistad,\net saaksid keskenduda projektile mis parajasti käsil.`}</Text>
          </View>
          <Image
            source={icons.phoneImg}
            style={styles.phoneIcon}
            resizeMode="contain"
          />
        </View> */}
          <View style={{ height: 160 }} />
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
            marginTop: heightPercentageToDP(4),
          }}
        >
          <View style={{ alignSelf: "center" ,flex:1}}>
            <RenderHTML
              contentWidth={SCREEN_WIDTH}
              source={{
                html: `${htmlView}`,
              }}
            />
          </View>
          <View style={{ height: heightPercentageToDP(10) }} />

          <FooterView />
        </ScrollView>
      </View>
    );
  }
};

//make this component available to the app
export default OurOfUsScreen;
