import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { commonFontStyle, defaultFont } from "../../theme/Fonts";
import { fontFamily } from "../../helper/constants";
import { colors } from "../../theme/Colors";
import { icons } from "../../theme/Icons";
import { countryCode, emailCheck, screen_width } from "../../helper/globalFunctions";
import { useDispatch, useSelector } from "react-redux";
import { CountryPicker } from "react-native-country-codes-picker";
import { getProfileMethods, userSaveProfile } from "../../actions/authAction";
import { getAsyncUserInfo } from "../../helper/asyncStorage";

type Props = {
  title?: string;
  list?: any;
  data?: any;
};

const TowValue = ({ title, value, textStyle }: any) => {
  if (Platform.OS == "web") {
    return (
      <View style={[styles.container, { marginTop: 12 }]}>
        <Text style={styles.itemText}>{title}</Text>
        <Text style={[styles.itemText1, textStyle]}>{value}</Text>
      </View>
    );
  } else {
    return (
      <View style={[styles.containerMob, { marginTop: 12 }]}>
        <Text style={styles.itemTextMob}>{title}</Text>
        <Text style={[styles.itemText1Mob, textStyle]}>{value}</Text>
      </View>
    );
  }
};

const TowValueInput = ({
  title,
  value,
  textStyle,
  onChangeText,
  maxLength,
}: any) => {
  if (Platform.OS == "web") {
    return (
      <View style={[styles.container, { marginTop: 12 }]}>
        <Text style={styles.itemText}>{title}</Text>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          style={styles.inputStyle}
          maxLength={maxLength}
        />
      </View>
    );
  } else {
    return (
      <View style={[styles.containerMob, { marginTop: 12 }]}>
        <Text style={styles.itemTextMob}>{title}</Text>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          style={[styles.inputStyle, { width: 190 }]}
          maxLength={maxLength}
        />
      </View>
    );
  }
};

const MyProfileView = ({ data }: Props) => {
  const [isSelect, setIsSelect] = useState(true);
  const { getProfileList } = useSelector((state) => state.profile);
  const [show, setShow] = useState(false);
  console.log("getProfileList", getProfileList);

  const [testInputData, setTestInputData] = useState({
    firstName: data?.first_name,
    emailId: data?.email,
    mobileNo: data?.mobile.toString(),
    code: data?.country,
    personalNo: data?.social_sec_no,
  });
  console.log("testInputData", getProfileList);

  const dispatch = useDispatch();

  const onSubmitPress = async () => {
    const customer = await getAsyncUserInfo();
    if (testInputData?.firstName.trim().length === 0) {
      alert("Palun sisesta oma eesnimi");
    } else if (testInputData?.personalNo.trim().length == 0) {
      alert("Palun sisestage omaisikukood");
    }else if (testInputData?.personalNo.trim().length < 11) {
      alert("Sisestage oma isikukoodiks maksimaalselt 11 numbrit");
    }  else if (testInputData?.emailId.trim().length === 0) {
      alert("Palun sisestage oma e-posti aadress");
    } else if (!emailCheck(testInputData?.emailId)) {
      alert("Sisestage oma kehtiv e-posti aadress");
    } else if (testInputData.code.trim().length == 0) {
      alert("Sisestage oma riigikood.");
    } else if (testInputData?.mobileNo.length === 0) {
      alert("Palun sisestage oma mobiilinumber.");
    } else {
      const obj = {
        data: {
          customer_id: customer,
          first_name: testInputData?.firstName,
          last_name: data?.last_name,
          current_balance: 0,
          mobile: testInputData?.mobileNo,
          email: testInputData?.emailId,
          country: testInputData?.code,
          news_subscription: 0,
          social_sec_no: testInputData?.personalNo,
        },
        onSuccess: (res: any) => {
          const obj = {
            params: {
              customer_id: res,
            },
            onSuccess: (res: any) => {
              setIsSelect(true);
            },
            onFailure: () => {},
          };
          dispatch(getProfileMethods(obj));
        },
        onFailure: (error: any) => {
          const errorValue = error?.detail.includes(
            "Cannot insert duplicate key row in object"
          );
          errorValue &&
            alert(
              "E-post on juba kasutusel Palun värskendage oma e-posti aadressi"
            );
        },
      };
      dispatch(userSaveProfile(obj));
    }
  };

  if (Platform.OS == "web") {
    return (
      <View style={[styles.container, { marginTop: 25 }]}>
        <View style={[{ flex: 1 }]}>
          {isSelect ? (
            <TowValue
              title="Nimi:"
              value={`${data?.first_name}`}
              textStyle={styles.textStyle}
            />
          ) : (
            <TowValueInput
              title="Nimi:"
              value={testInputData?.firstName}
              textStyle={styles.textStyle}
              onChangeText={(text) => {
                setTestInputData({ ...testInputData, firstName: text });
              }}
            />
          )}
          {isSelect ? (
            <TowValue title="Isikukood" value={data?.social_sec_no} />
          ) : (
            <TowValueInput
              title="Isikukood"
              value={testInputData?.personalNo}
              textStyle={styles.textStyle}
              onChangeText={(text) => {
                setTestInputData({ ...testInputData, personalNo: text });
              }}
              maxLength={11}
            />
          )}
          {isSelect ? (
            <TowValue title="E-post" value={data?.email} />
          ) : (
            <TowValueInput
              title="E-post"
              value={testInputData?.emailId}
              textStyle={styles.textStyle}
              onChangeText={(text) => {
                setTestInputData({ ...testInputData, emailId: text });
              }}
            />
          )}
          {isSelect ? (
            <TowValue
              title="Telefoninumber"
              value={`${data?.country} ${data?.mobile}`}
            />
          ) : (
            <View style={[styles.container, { marginTop: 12 }]}>
              <Text style={styles.itemText}>{"Telefoninumber"}</Text>
              <View style={{ flexDirection: "row" }}>
                <TextInput
                  value={testInputData.code}
                  onChangeText={(text) => {
                    setTestInputData({ ...testInputData, code: text });
                  }}
                  maxLength={2}
                  style={[styles.inputStyle, { width: 90, marginRight: 10 }]}
                />
                <TextInput
                  value={testInputData?.mobileNo}
                  onChangeText={(text) => {
                    setTestInputData({ ...testInputData, mobileNo: text });
                  }}
                  style={styles.inputStyle}
                />
              </View>
            </View>
          )}
        </View>
        <TouchableOpacity
          onPress={() => {
            isSelect ? setIsSelect(false) : onSubmitPress();
          }}
          style={[
            styles.container,
            { alignSelf: "flex-start", marginRight: 10 },
          ]}
        >
          <Image
            source={isSelect ? icons.pen : icons.save}
            style={{ width: 18, height: 18 }}
          />
          <Text style={styles.headerText}>
            {isSelect ? "Muuda" : "Salvesta"}
          </Text>
        </TouchableOpacity>
        {/* <CountryPicker
          show={show}
          // when picker button press you will get the country object with dial code
          pickerButtonOnPress={(item) => {
            console.log("item", item);
            setCountry(item?.dial_code);
            setTestInputData({ ...testInputData, code: item?.code });
            setShow(false);
          }}
          style={{ modal: { height: 500, alignSelf: "center" } }}
        /> */}
      </View>
    );
  } else {
    return (
      <>
        <View style={{}}>
          <View style={{ height: 28 }} />
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.headerSubTextMob}>{"Minu profiil"}</Text>
            <TouchableOpacity
              onPress={() => (isSelect ? setIsSelect(false) : onSubmitPress())}
              style={[
                {
                  flexDirection: "row",
                  alignItems: "center",
                  marginRight: 12,
                },
              ]}
            >
              <Image
                source={isSelect ? icons.pen : icons.save}
                style={{ width: 18, height: 18, marginRight: 8 }}
              />
              <Text style={styles.headerRightTextMob}>
                {isSelect ? "Muuda" : "Salvesta"}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.unLineStyleMob]} />
        </View>
        <View style={[styles.containerMob, { marginTop: 10 }]}>
          <View style={[{ flex: 1 }]}>
            {isSelect ? (
              <TowValue
                title="Nimi:"
                value={`${data?.first_name}`}
                textStyle={styles.textStyleMob}
              />
            ) : (
              <TowValueInput
                title="Nimi:"
                value={testInputData?.firstName}
                textStyle={styles.textStyle}
                onChangeText={(text) => {
                  setTestInputData({ ...testInputData, firstName: text });
                }}
              />
            )}
            {isSelect ? (
              <TowValue title="Isikukood" value={data?.social_sec_no} />
            ) : (
              <TowValueInput
                title="Isikukood"
                value={testInputData?.personalNo}
                textStyle={styles.textStyle}
                onChangeText={(text) => {
                  setTestInputData({ ...testInputData, personalNo: text });
                }}
                maxLength={11}
              />
            )}
            {isSelect ? (
              <TowValue title="E-post" value={data?.email} />
            ) : (
              <TowValueInput
                title="E-post"
                value={testInputData?.emailId}
                textStyle={styles.textStyle}
                onChangeText={(text) => {
                  setTestInputData({ ...testInputData, emailId: text });
                }}
              />
            )}
            {isSelect ? (
              <TowValue
                title="Telefoninumber"
                value={`${data?.country} ${data?.mobile}`}
              />
            ) : (
              <View style={[styles.container, { marginTop: 12 }]}>
                <Text style={styles.itemText}>{"Telefoninumber"}</Text>
                <View style={{ marginTop: 25 }}>
                  <TextInput
                    value={testInputData.code}
                    onChangeText={(text) => {
                      setTestInputData({ ...testInputData, code: text });
                    }}
                    maxLength={2}
                    style={[styles.inputStyle, { width: 90 }]}
                  />
                  <TextInput
                    value={testInputData?.mobileNo}
                    onChangeText={(text) => {
                      setTestInputData({ ...testInputData, mobileNo: text });
                    }}
                    style={[styles.inputStyle, { width: 190, marginTop: 5 }]}
                  />
                </View>
              </View>
            )}
          </View>
          {/* <View style={[styles.container,{alignSelf:'flex-start',marginRight:10}]}>
        <Image source={icons.pen} style={{ width: 18, height: 18 }} />
        <Text style={styles.headerText}>{"Muuda"}</Text>
      </View> */}
        </View>
      </>
    );
  }
};

export default MyProfileView;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  bodyHeader: {
    alignItems: "flex-start",
  },
  boxConainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  headerText: {
    marginLeft: 8,
    ...commonFontStyle(fontFamily.articulat_normal, 18, colors.black),
  },
  itemText: {
    width: 120,
    ...commonFontStyle(fontFamily.articulat_normal, 14, colors.black),
  },
  textStyle: {
    ...commonFontStyle(fontFamily.bold, 26, colors.black),
  },
  itemText1: {
    ...commonFontStyle(fontFamily.articulat_normal, 18, colors.black),
  },
  inputStyle: {
    ...commonFontStyle(fontFamily.articulat_normal, 18, colors.black),
    borderWidth: 1,
    paddingLeft: 10,
    borderRadius: 8,
  },
  boxView: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: colors.grey_6,
    marginRight: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  downarrowStyle: {
    width: 8,
    height: 8,
    tintColor: "#707070",
    marginLeft: 5,
  },
  //mobile

  containerMob: {
    flexDirection: "row",
    alignItems: "center",
  },
  bodyHeaderMob: {
    alignItems: "flex-start",
  },
  boxConainerMob: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  headerTextMob: {
    marginLeft: 8,
    ...defaultFont(400, 18, colors.black),
  },
  itemTextMob: {
    width: 120,
    ...defaultFont(400, 14, colors.black),
  },
  textStyleMob: {
    ...defaultFont("700_o", 26, colors.black),
  },
  itemText1Mob: {
    ...defaultFont(400, 18, colors.black),
  },
  boxViewMob: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: colors.grey_6,
    marginRight: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  headerSubTextMob: {
    marginBottom: 5,
    ...defaultFont(400, 18, colors.black),
    flex:1
  },
  headerRightTextMob: {
    ...defaultFont(400, 18, colors.black),
  },
  unLineStyleMob: {
    width: screen_width * 0.85,
    borderWidth: 0.5,
    height: 1,
    borderColor: colors.black,
    // marginBottom: 12,
    alignItems: "center",
    // alignSelf: "center",
  },
});
