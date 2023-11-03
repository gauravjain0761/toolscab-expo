import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  Platform,
} from "react-native";
import React, { useState } from "react";
import {
  CommonMapView,
  FooterView,
  Header,
  Productcart,
} from "../../components";
import { colors } from "../../theme/Colors";
import { hp, screen_width, wp } from "../../helper/globalFunctions";
import HeaderBottomPathView from "../../components/common/HeaderBottomPathView";
import { icons } from "../../theme/Icons";
import { FlatList } from "react-native";
import { SCREEN_WIDTH, commonFontStyle } from "../../theme/Fonts";
import { fontFamily, screenName } from "../../helper/constants";
import CommonGreenBtn from "../../components/common/CommonGreenBtn";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { navigationRef } from "../../navigations/MainNavigator";
import { defaultFont } from "../../theme/Fonts";

type Props = {};


const dataList=[
    {id:1,name:'Miinimumhind ',subTitle:"3.29€"},
    {id:1,name:'Broneering esimesed 15 min',subTitle:"Tasuta"},
    {id:1,name:'Broneering pärast 15 min',subTitle:"0.16€/min"},
    {id:1,name:'Minut',subTitle:"0.22€"},
    {id:1,name:'Tund',subTitle:"5€"},
    {id:1,name:'Päev',subTitle:"25€"},
]

const ProductDetail = (props: Props) => {
  const [selectedTab, setselectedTab] = useState(1);
  const [tabIndex1, setTabIndex1] = useState(false);
  const [tabIndex2, setTabIndex2] = useState(false);
  const [tabIndex3, setTabIndex3] = useState(false);
  const [pricefoShow, setPricefoShow] = useState(false);

  const RenderRow = ({ title, value }: any) => {
    if (Platform.OS == "web") {
      return (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ width: "80%", paddingLeft: 40 }}>
            <Text
              style={commonFontStyle(
                fontFamily.arial_regular,
                13,
                colors.blackType
              )}
            >
              {title}
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text>{value}</Text>
          </View>
        </View>
      );
    } else {
      return (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            // justifyContent:'space-between',
            flex: 1,
          }}
        >
          <View
            style={{
              paddingLeft: 20,
              flex: 1,
              marginRight: widthPercentageToDP(10),
            }}
          >
            <Text style={{ ...defaultFont("600_o", 13, colors.blackType) }}>
              {title}
            </Text>
          </View>
          <View />
          <View style={{ flex: 0.7 }}>
            <Text>{value}</Text>
          </View>
        </View>
      );
    }
  };

  const RenderMapRow = ({}: any) => {
    return (
      <View>
        <Text
          style={commonFontStyle(
            fontFamily.articulat_regular,
            12,
            colors.headerBG
          )}
        >
          Vahemaa 1.20km
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottomWidth: 1,
            borderBottomColor: colors.Roheline2,
            paddingBottom: 10,
            marginBottom: 10,
          }}
        >
          <View style={{ flex: 1, marginTop: 5 }}>
            <Text
              style={commonFontStyle(
                fontFamily.articulat_bold,
                14,
                colors.headerBG
              )}
            >
              {"Automaat Tallinna Nautica keskus"}
            </Text>
            <Text
              style={[
                commonFontStyle(
                  fontFamily.articulat_regular,
                  9,
                  colors.filterText
                ),
                { marginTop: -3 },
              ]}
            >
              Ahtri 9
            </Text>
            <Text
              style={commonFontStyle(
                fontFamily.articulat_regular,
                9,
                colors.filterText
              )}
            >
              10151 TALLINN
            </Text>
          </View>
          <CommonGreenBtn
            title="Broneeri"
            onPress={() => {}}
            style={{
              borderColor: colors.headerBG,
              marginLeft: 10,
            }}
          />
        </View>
      </View>
    );
  };



  return Platform.OS == "web" ? (
    <View style={styles.container}>
      <Header isMainScreen={false} />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.mainContainer}>
          <HeaderBottomPathView heading="Kodu / seadmed / pesurid / KARCHER Puzzi 10/1" />
          <View style={styles.mainContentView}>
            <View>
              <Image source={icons.image1} style={styles.imageProduct} />
              <FlatList
                data={[0, 1, 2, 3]}
                horizontal
                renderItem={({ item, index }) => {
                  return <View style={styles.bottomImages} />;
                }}
              />
              <Text style={styles.des}>
                Polstri- ja põrandaotsikuga Puzzi 10/1 sobib eriti hästi
                suuremate ja keskmiste pindade hügieeniliseks puhastamiseks. 1
                baari suuruse piserdusrõhuga kannab süvapesuseade hoolt
                tekstiilpindade säästva sügavpuhastuse eest ja annab eriti
                polstrite ja vaipkatete puhastamisel veenvaid tulemusi. Tänu
                kitsale põrandaotsikule sobib seade suurepäraselt ka kitsamates
                ruumitingimustes töötamiseks. Ning tänu painduvale kummiraaklile
                saab muretult puhastada ka möbleeritud pindasid. Süvapesuseade
                on varustatud integreeritud juhtmekonksu ja käsitööriistade ning
                imemisvooliku kinnitusega.
              </Text>
            </View>
            <View style={styles.rightView}>
              <Text style={styles.title1}>Tekstiilipesur</Text>
              <Text style={styles.mainTitle}>KARCHER Puzzi 101</Text>
              <View style={styles.botomLine} />
              <View style={styles.priceView}>
                <View>
                  <Text
                    style={{
                      ...commonFontStyle(
                        fontFamily.semiBold,
                        100,
                        colors.Roheline2
                      ),
                      letterSpacing: -5,
                    }}
                  >
                    0<Text style={{ fontSize: 60 }}>.22</Text>
                    <Text
                      style={commonFontStyle(
                        fontFamily.semiBold,
                        26,
                        colors.Roheline2
                      )}
                    >
                      €
                    </Text>
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
                    <Text
                      style={commonFontStyle(
                        fontFamily.articulat_regular,
                        12,
                        colors.filterText
                      )}
                    >
                      26€ / 24h
                    </Text>
                    <Text
                      style={commonFontStyle(
                        fontFamily.articulat_regular,
                        14,
                        colors.headerBG
                      )}
                    >
                      Minut
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flex: 1,
                    marginLeft: 30,
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Image
                    style={styles.arrowImage}
                    source={require("../../assets/icon/bottomArrow.png")}
                  />
                  <Text
                    style={commonFontStyle(
                      fontFamily.articulat_regular,
                      14,
                      colors.black
                    )}
                  >
                    Kuidas hind kujuneb ?
                  </Text>
                </View>
              </View>
              <View style={styles.botomLine} />
              <View style={styles.btnRow}>
                <CommonGreenBtn title="Rendi" onPress={() => {}} />
                <CommonGreenBtn
                  title="Leia kapp"
                  onPress={() => {}}
                  style={{
                    backgroundColor: colors.white,
                    borderColor: colors.black,
                    marginLeft: 10,
                  }}
                />
              </View>
              <Text style={styles.btnBottomText}>Renditingimused</Text>
              <View style={styles.botomLine} />
              <Text style={styles.title2}>Komplekt sisaldab</Text>
              <Text style={styles.des2}>Tekstiilipesur</Text>
              <Text style={styles.des2}>Voolik</Text>
              <Text style={styles.des2}>Pesuaine</Text>
            </View>
          </View>
        </View>
        <View style={styles.mainContainer}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => setselectedTab(1)}
              style={[
                styles.tabView,
                {
                  borderBottomColor:
                    selectedTab == 1 ? colors.roheline : "transparent",
                },
              ]}
            >
              <Text style={styles.tabText}>Tehnilised andmed</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setselectedTab(2)}
              style={[
                styles.tabView,
                {
                  borderBottomColor:
                    selectedTab == 2 ? colors.roheline : "transparent",
                },
              ]}
            >
              <Text style={styles.tabText}>Saadavus</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setselectedTab(3)}
              style={[
                styles.tabView,
                {
                  borderBottomColor:
                    selectedTab == 3 ? colors.roheline : "transparent",
                },
              ]}
            >
              <Text style={styles.tabText}>Kasutamine</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.middleMainView}>
          <View style={[styles.mainContainer, { marginTop: 0 }]}>
            {(selectedTab == 1 || selectedTab == 3) && (
              <View style={styles.tab1View}>
                <Text
                  style={commonFontStyle(
                    fontFamily.arial_regular,
                    16,
                    colors.blackType
                  )}
                >
                  Tehnilised andmed
                </Text>
                <View style={styles.whiteLine} />
                <RenderRow
                  title={"Maksimaalne puhastatav pind (m²/h)"}
                  value={"20 - 25"}
                />
                <View style={styles.whiteLineHalf} />
                <RenderRow title={"Õhuvoolu hulk (l/s)"} value={"74"} />

                <View style={styles.whiteLine} />
                <RenderRow title={"Vaakum (mbar/kPa)"} value={"254 / 25,4"} />
                <View style={styles.whiteLineHalf} />
                <RenderRow title={"Pihustusmäär (l/min)"} value={"1"} />

                <View style={styles.whiteLine} />
                <RenderRow title={"Pihustusrõhk (bar)"} value={"1"} />
                <View style={styles.whiteLineHalf} />
                <RenderRow
                  title={"Puhta/musta vee paak (l)"}
                  value={"10 / 9"}
                />

                <View style={styles.whiteLine} />
                <RenderRow title={"Turbiini võimsus (W)"} value={"1250"} />
                <View style={styles.whiteLineHalf} />
                <RenderRow title={"Pumba võimsus (W)"} value={"40"} />

                <View style={styles.whiteLine} />
                <RenderRow
                  title={"Toitepinge (V/Hz)"}
                  value={"220 - 240 / 50 - 60"}
                />
                <View style={styles.whiteLineHalf} />
                <RenderRow
                  title={"Kaal ilma lisatarvikuteta (kg)"}
                  value={"10,5"}
                />

                <View style={styles.whiteLine} />
                <RenderRow title={"Kaal, sh pakend (kg)"} value={"16,1"} />
                <View style={styles.whiteLineHalf} />
                <RenderRow
                  title={"Mõõdud (pikkus x laius x kõrgus) (mm)"}
                  value={"690 x 325 x 440"}
                />
              </View>
            )}
            {selectedTab == 2 && (
              <View style={styles.tab2View}>
                <CommonMapView width={widthPercentageToDP(45)} />
                <View
                  style={{
                    flex: 1,
                    paddingVertical: 60,
                    paddingLeft: 50,
                  }}
                >
                  <Text
                    style={commonFontStyle(
                      fontFamily.articulat_normal,
                      14,
                      colors.headerBG
                    )}
                  >
                    Sisesta oma asukoht ning leia endale lähim kapp:
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      borderWidth: 1,
                      borderColor: colors.black,
                      borderRadius: 100,
                      marginVertical: 10,
                    }}
                  >
                    <TextInput placeholder="" style={{ flex: 1, height: 45 }} />
                    <Image
                      source={require("../../assets/icon/search.png")}
                      style={{
                        height: 18,
                        width: 18,
                        resizeMode: "contain",
                        marginRight: 20,
                      }}
                    />
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginBottom: 50,
                    }}
                  >
                    <Image
                      source={require("../../assets/icon/checkbox.png")}
                      style={{
                        height: 18,
                        width: 18,
                        resizeMode: "contain",
                        marginRight: 10,
                      }}
                    />
                    <Text
                      style={commonFontStyle(
                        fontFamily.articulat_regular,
                        12,
                        colors.checkBoxText
                      )}
                    >
                      Tuvasta asukoht automaatselt
                    </Text>
                  </View>
                  <RenderMapRow />
                  <RenderMapRow />
                  <RenderMapRow />
                  <RenderMapRow />
                </View>
              </View>
            )}
          </View>
        </View>
        <View style={styles.mainContainer}>
          <Text
            style={commonFontStyle(
              fontFamily.articulat_regular,
              24,
              colors.black
            )}
          >
            Viimati vaadatud seadmed
          </Text>
          <FlatList
            style={{ marginTop: 20, marginBottom: 50 }}
            data={[
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
                id: 4,
                icon: icons.image9,
                title: "KARCHER SC 2",
                label: "Aurupesur",
                aircon: 3240,
                volumeflow: 1,
                hoselength: 1,
              },
            ]}
            numColumns={3}
            keyExtractor={(_i, index) => index.toString()}
            renderItem={({ item, index }) => {
              return (
                <Productcart
                  index={item?.id}
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
        </View>
        <FooterView />
      </ScrollView>
    </View>
  ) : (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        <View style={styles.contentView}>
          <Text style={styles.titleDes}>Tekstiilipesur</Text>
          <Text style={styles.title}>KARCHER Puzzi 10/1</Text>
          <Image source={icons.image1} style={styles.mainImage} />
          <View style={styles.bottomView}>
            <View>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    ...commonFontStyle(
                      fontFamily.semiBold,
                      90,
                      colors.Roheline2
                    ),
                    letterSpacing: -2.5,
                  }}
                >
                  0<Text style={{ fontSize: 52 }}>.22</Text>
                  <Text
                    style={commonFontStyle(
                      fontFamily.semiBold,
                      21,
                      colors.Roheline2
                    )}
                  >
                    €
                  </Text>
                </Text>
              </View>
              <View
                style={[
                  styles.priceViewMob,
                  {
                    position: "absolute",
                    bottom: 0,
                    width: "100%",
                    paddingLeft: 20,
                  },
                ]}
              >
                <Text
                  style={commonFontStyle(
                    fontFamily.articulat_regular,
                    10,
                    colors.filterText
                  )}
                >
                  26€ / 24h
                </Text>
                <Text
                  style={commonFontStyle(
                    fontFamily.articulat_regular,
                    11,
                    colors.headerBG
                  )}
                >
                  Minut
                </Text>
              </View>
            </View>
            <View
              style={{
                marginLeft: 30,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <TouchableOpacity onPress={() => setPricefoShow(!pricefoShow)}>
                <Image
                  style={styles.arrowImageMob}
                  source={require("../../assets/icon/bottomArrow.png")}
                />
              </TouchableOpacity>
              <Text
                style={commonFontStyle(
                  fontFamily.articulat_regular,
                  11.4,
                  colors.black
                )}
              >
                Kuidas hind kujuneb ?
              </Text>
            </View>
          </View>
   

     {pricefoShow &&  <>
          <View style={[styles.botomLineMob,{marginTop:8,marginBottom:19}]} />
        <View style={{marginHorizontal:widthPercentageToDP(1.5)}}>
          {dataList.map((item:any)=>{
            return <View style={{flexDirection:'row',alignItems:'flex-start',justifyContent:'space-between',marginBottom:5}}>
              <Text style={{...defaultFont(400, 12, colors.black),}}>{item?.name}</Text>
              <Text style={{...defaultFont(400, 12, colors.black)}}>{item?.subTitle}</Text>
            </View>

          })}
        <Text style={{...defaultFont(400, 12, colors.filterText),marginTop:15}}>Rendi lõpphind arvutatakse rendi kestuse põhjal. Lühikeste rentide eest mis maksavad alla 3,29€, võetakse miinimumtasu. Soodustusi rakendatakse peale seda.</Text>
        </View>
        </>}
          <View style={[styles.botomLineMob,{marginTop:pricefoShow ? heightPercentageToDP(3):8}]} />

          <Text
            style={[styles.prodDes2, { marginTop: heightPercentageToDP(2) }]}
          >
            Tekstiilipesur
          </Text>
          <Text style={styles.prodDes2}>Voolik</Text>
          <Text
            style={[styles.prodDes2, { marginBottom: heightPercentageToDP(2) }]}
          >
            Pesuaine
          </Text>
          <View style={styles.botomLineMob} />
          <View style={styles.btnRowMob}>
            <CommonGreenBtn
              title="Rendi"
              onPress={() => {}}
              style={{ width: "40%" }}
            />
            <CommonGreenBtn
              title="Leia kapp"
              onPress={() => {}}
              style={{
                backgroundColor: colors.white,
                borderColor: colors.black,
                marginLeft: 10,
                width: "40%",
              }}
            />
          </View>
          <Text style={styles.btnBottomTextMob}>Renditingimused</Text>
          <Text style={styles.desProduct}>
            Polstri- ja põrandaotsikuga Puzzi 10/1 sobib eriti hästi suuremate
            ja keskmiste pindade hügieeniliseks puhastamiseks. 1 baari suuruse
            piserdusrõhuga kannab süvapesuseade hoolt tekstiilpindade säästva
            sügavpuhastuse eest ja annab eriti polstrite ja vaipkatete
            puhastamisel veenvaid tulemusi. Tänu kitsale põrandaotsikule sobib
            seade suurepäraselt ka kitsamates ruumitingimustes töötamiseks. Ning
            tänu painduvale kummiraaklile saab muretult puhastada ka möbleeritud
            pindasid. Süvapesuseade on varustatud integreeritud juhtmekonksu ja
            käsitööriistade ning imemisvooliku kinnitusega.
          </Text>
          <View style={styles.boxStyleMob}>
            <View style={styles.boxBodyMob}>
              <Text style={styles.boxBodyText}>Tehnilised andmed</Text>
              <TouchableOpacity
                onPress={() => {
                  setTabIndex1(!tabIndex1);
                }}
              >
                <Image source={icons.downarrow} style={styles.downarrowMob} />
              </TouchableOpacity>
            </View>
          </View>
          {tabIndex1 && (
            <>
              <View style={styles.tab1ViewMob}>
                <Text
                  style={{
                    ...defaultFont(400, 16, colors.blackType),
                    fontFamily: "arial-regular",
                  }}
                >
                  Tehnilised andmed
                </Text>
                <View style={styles.whiteLine} />
                <RenderRow
                  title={"Maksimaalne puhastatav pind (m²/h)"}
                  value={"20 - 25"}
                />
                <View style={styles.whiteLineHalf} />
                <RenderRow title={"Õhuvoolu hulk (l/s)"} value={"74"} />

                <View style={styles.whiteLine} />
                <RenderRow title={"Vaakum (mbar/kPa)"} value={"254 / 25,4"} />
                <View style={styles.whiteLineHalf} />
                <RenderRow title={"Pihustusmäär (l/min)"} value={"1"} />

                <View style={styles.whiteLine} />
                <RenderRow title={"Pihustusrõhk (bar)"} value={"1"} />
                <View style={styles.whiteLineHalf} />
                <RenderRow
                  title={"Puhta/musta vee paak (l)"}
                  value={"10 / 9"}
                />

                <View style={styles.whiteLine} />
                <RenderRow title={"Turbiini võimsus (W)"} value={"1250"} />
                <View style={styles.whiteLineHalf} />
                <RenderRow title={"Pumba võimsus (W)"} value={"40"} />

                <View style={styles.whiteLine} />
                <RenderRow
                  title={"Toitepinge (V/Hz)"}
                  value={"220 - 240 / 50 - 60"}
                />
                <View style={styles.whiteLineHalf} />
                <RenderRow
                  title={"Kaal ilma lisatarvikuteta (kg)"}
                  value={"10,5"}
                />

                <View style={styles.whiteLine} />
                <RenderRow title={"Kaal, sh pakend (kg)"} value={"16,1"} />
                <View style={styles.whiteLineHalf} />
                <RenderRow
                  title={"Mõõdud (pikkus x laius x kõrgus) (mm)"}
                  value={"690 x 325 x 440"}
                />
                <View style={{ height: 50 }} />
              </View>
            </>
          )}
          <View style={[styles.boxStyleMob, { marginTop: 13 }]}>
            <View style={styles.boxBodyMob}>
              <Text style={styles.boxBodyText}>Saadavus</Text>
              <Image source={icons.downarrow} style={styles.downarrowMob} />
            </View>
          </View>
          <View style={[styles.boxStyleMob, { marginTop: 13 }]}>
            <View style={styles.boxBodyMob}>
              <Text style={styles.boxBodyText}>Kasutamine</Text>
              <Image source={icons.downarrow} style={styles.downarrowMob} />
            </View>
          </View>

          <Text style={styles.devicesText}>Viimati vaadatud seadmed</Text>
          <FlatList
            style={{ marginTop: 20, marginBottom: 50, alignSelf: "center" }}
            data={[
              {
                id: 2,
                icon: icons.image1,
                title: "KARCHER Puzzi 10/1",
                label: "Tekstiilipesur",
                aircon: 3240,
                volumeflow: 1,
                hoselength: 1,
              },
            ]}
            horizontal
            keyExtractor={(_i, index) => index.toString()}
            renderItem={({ item, index }) => {
              return (
                <Productcart
                  index={item?.id}
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
                  listStyle={{ ...defaultFont(400, 12, colors.filterText) }}
                  titleStyle={{
                    ...defaultFont(700, 14, colors.black),
                    marginBottom: 10,
                  }}
                  labelStyle={{
                    ...defaultFont(400, 12, colors.black),
                    marginBottom: 5,
                  }}
                />
              );
            }}
          />
          <View style={{ height: 50 }} />
        </View>
        <FooterView />
      </ScrollView>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  // mobile
  contentView: {
    marginHorizontal: heightPercentageToDP(3),
  },
  title: {
    ...defaultFont("600_o", 28, colors.black),
    marginBottom: heightPercentageToDP(4),
  },
  titleDes: {
    ...defaultFont(400, 14, colors.black),
    marginTop: heightPercentageToDP(6),
  },
  mainImage: {
    width: SCREEN_WIDTH - heightPercentageToDP(6),
    height: SCREEN_WIDTH - heightPercentageToDP(20),
    resizeMode: "contain",
  },
  bottomView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  priceViewMob: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  arrowImageMob: {
    height: 26,
    width: 26,
    resizeMode: "contain",
    marginRight: 10,
  },
  botomLineMob: {
    height: 1,
    backgroundColor: colors.bottomLine,
  },
  prodDes2: {
    ...defaultFont(400, 12, colors.headerBG),
    marginBottom: 5,
  },
  btnRowMob: {
    flexDirection: "row",
    marginTop: heightPercentageToDP(3),
    marginBottom: heightPercentageToDP(1),
  },
  btnBottomTextMob: {
    ...defaultFont(400, 10, colors.black),
  },
  desProduct: {
    ...defaultFont(400, 14, colors.black),
    marginTop: heightPercentageToDP(5),
    marginBottom: heightPercentageToDP(4),
    lineHeight: 20,
  },
  downarrowMob: {
    width: widthPercentageToDP(4),
    height: widthPercentageToDP(4),
    marginLeft: widthPercentageToDP(3),
  },
  boxStyleMob: {
    backgroundColor: colors.roheline,
    flex: 1,
    paddingVertical: heightPercentageToDP(2.5),
    borderTopLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  boxBodyMob: {
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  boxBodyText: {
    ...defaultFont(400, 18, colors.headerBG),
  },
  devicesText: {
    marginTop: heightPercentageToDP(8),
    textAlign: "center",
    marginBottom: heightPercentageToDP(2),
    ...defaultFont(400, 24, colors.black),
  },
  tab1ViewMob: {
    // width: screen_width * 0.55,
    // width: screen_width,
    // paddingVertical: 60,
    backgroundColor: colors.bottomLine,
    paddingTop: heightPercentageToDP(3),
    paddingHorizontal: widthPercentageToDP(2),
    top: heightPercentageToDP(-1.3),
  },

  // web
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  mainContainer: {
    width: screen_width * 0.75,
    alignSelf: "center",
    marginTop: hp(60),
  },
  bodyHeader: {
    alignItems: "flex-start",
  },
  unLineStyle: {
    width: screen_width * 0.75,
    borderWidth: 1,
    height: 2,
    borderColor: "#F5F1EF",
    marginVertical: hp(50),
  },
  mainContentView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imageProduct: {
    height: 350,
    width: (screen_width * 0.75) / 1.7,
    resizeMode: "contain",
  },
  bottomImages: {
    width: 100,
    height: 55,
    backgroundColor: colors.grey_1,
    marginRight: 15,
  },
  des: {
    ...commonFontStyle(fontFamily.articulat_normal, 14, colors.black),
    lineHeight: 21,
    marginTop: 20,
    width: (screen_width * 0.75) / 1.7,
  },
  title1: {
    ...commonFontStyle(fontFamily.articulat_normal, 14, colors.black),
  },
  rightView: {
    flex: 1,
    marginLeft: 50,
  },
  mainTitle: {
    ...commonFontStyle(fontFamily.semiBold, 28, colors.black),
  },
  botomLine: {
    height: 1,
    backgroundColor: colors.homecartBG,
  },
  priceView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  arrowImage: {
    height: 32,
    width: 32,
    resizeMode: "contain",
    marginRight: 10,
  },
  btnRow: {
    flexDirection: "row",
    marginTop: 20,
  },
  btnBottomText: {
    ...commonFontStyle(fontFamily.articulat_regular, 12, colors.black),
    paddingVertical: 10,
  },
  title2: {
    ...commonFontStyle(fontFamily.articulat_bold, 14, colors.black),
    marginTop: 10,
    marginBottom: 3,
  },
  des2: {
    ...commonFontStyle(fontFamily.articulat_regular, 12, colors.headerBG),
  },
  middleMainView: {
    backgroundColor: colors.homecartBG,
  },
  tabView: {
    width: "30%",
    borderBottomWidth: 3,
    borderBottomColor: "transparent",
    alignItems: "center",
    paddingVertical: 5,
  },
  tabText: {
    ...commonFontStyle(fontFamily.articulat_regular, 18, colors.headerBG),
  },
  whiteLine: {
    height: 1,
    backgroundColor: colors.white,
    marginVertical: 12,
  },
  tab1View: {
    width: screen_width * 0.55,
    alignSelf: "center",
    paddingVertical: 60,
  },
  whiteLineHalf: {
    height: 0.5,
    backgroundColor: colors.white,
    marginVertical: 12,
  },
  tab2View: {
    flexDirection: "row",
    width: screen_width * 0.75,
    paddingVertical: 30,
  },
});
