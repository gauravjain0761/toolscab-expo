// import React, { Component, Fragment, useState } from 'react';
// import { TouchableOpacity, Text, Linking, View, Image, ImageBackground, BackHandler } from 'react-native';
// import QRCodeScanner from 'react-native-qrcode-scanner';
// import styles from './scanStyle';
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  Image,
  ImageBackground,
  Alert,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { Camera } from "expo-camera";
import styles from "./QRCodeScannerScreenStyle";
import CommonGreenBtn from "../../components/reusableComponent/CommonGreenBtn";
import { useNavigation, useRoute } from "@react-navigation/native";
import { screenName } from "../../helper/constants";
import { useDispatch } from "react-redux";
import { getStartRentalsAction } from "../../actions/cartAction";
import { colors } from "../../theme/Colors";
import ReactNativeModal from "react-native-modal";
import { icons } from "../../theme/Icons";
import { CartAddFLowModal } from "../../components";
import { getAsyncUserInfo } from "../../helper/asyncStorage";
const QRCodeScannerScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [scannedValue, setScannedValue] = useState([]);
  const navigationRef = useNavigation();
  const dispatch = useDispatch();
  const [modalShow, setModalShow] = useState(false);
  const [sucessModal, setSucessModal] = useState(false);
  const [failModal, setFailModal] = useState(false);
  const { params } = useRoute();
  const [locarShow, setLocarShow] = useState(false);
  const [errorText, setErrorText] = useState("");

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
    return () => {
      setScannedValue([]);
      setScanned(false);
    };
  }, []);

  const onActivePress = async (value: any) => {
    const customer = await getAsyncUserInfo();
    const obj = {
      data: {
        rental_id: params?.itemData?.rental_id,
        qr_codes: value,
      },
      customer_id: customer,
      onSuccess: (res: any) => {
        setLocarShow(true);
      },
      onFailure: (err) => {
        setErrorText(err?.data?.detail);
        setSucessModal(true);
        setFailModal(true);
        setScannedValue([]);
      },
    };

    dispatch(getStartRentalsAction(obj));
  };

  const onsubmitPress = () => {
    if (failModal == false) {
      setScannedValue([]);
      setScanned(false);
      setSucessModal(false);
      setFailModal(false);
      navigationRef.navigate(screenName.profileScreen);
    } else {
      setSucessModal(false);
      setFailModal(false);
      navigationRef.goBack();
    }
  };

  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);
    const updateData = scannedValue.filter((item) => item == data);
    if (updateData.length == 0) {
      let QRData = params?.itemData?.lockers[scannedValue?.length]?.qr_code;
      if (data == QRData) {
        const updatValue = [...scannedValue, data];
        setScannedValue(updatValue);
        if (updatValue.length === params?.itemData?.lockers.length) {
          onActivePress(updatValue);
        } else {
          setModalShow(true);
        }
      } else {
        Alert.alert("QR-kood ei ühti", "", [
          {
            text: "Jah",
            onPress: () => {
              setScannedValue((prevArray) => [...prevArray]);
              setScanned(false);
            },
          },
        ]);
      }
    } else {
      setScannedValue((prevArray) => [...prevArray]);
      setScanned(false);
    }
  };

  const renderCamera = () => {
    return (
      <View
        style={[
          styles.cameraContainer,
          {
            borderWidth: scanned ? 4 : 1,
            borderColor: scanned ? colors.Roheline2 : colors.black,
          },
        ]}
      >
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={styles.camera}
        />
      </View>
    );
  };

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Kaamera luba ei antud</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
       <View>
        <Text
          style={[
            styles.headerTextMain1,
            { color: colors.Roheline2, alignSelf: "center" },
          ]}
        >
          Scan QR code from locker
        </Text>
        <Text style={styles.headerTextMain}>
          {params?.itemData?.lockers[scannedValue?.length]?.locker_number}
        </Text>
      </View>
      {!sucessModal ? renderCamera() : null}
      {modalShow && (
        <ReactNativeModal isVisible={modalShow}>
          <View
            style={{
              borderRadius: 25,
              backgroundColor: colors.white,
              padding: 10,
              paddingVertical: 20,
              paddingHorizontal: 30,
            }}
          >
            <Text style={styles.textstyle}>
              kappide avamiseks skaneeri nüüd QR-kood kapilt No
            </Text>
            <Text style={styles.textstyle1}>
              {params?.itemData?.lockers[scannedValue?.length]?.locker_number}
            </Text>
            <Text style={styles.textstyle2}>
              kappe on kokku{" "}
              <Text style={{ color: colors.black }}>
                {params?.itemData?.lockers?.length}
              </Text>
            </Text>
            <Text style={styles.textstyle3}>
              {"kapid avanevad alles pärast\nkõigi koodide skaneerimist"}
            </Text>
            <CommonGreenBtn
              // disabled={params?.itemData?.lockers.length - scannedValue.length != 0}
              title={"skaneeri"}
              onPress={() => {
                setModalShow(false);
                setScanned(false);
              }}
              style={[styles.button, { marginTop: 20, alignSelf: "center" }]}
            />
          </View>
        </ReactNativeModal>
      )}
      {sucessModal && (
        <ReactNativeModal isVisible={sucessModal}>
          <View
            style={{
              borderRadius: 25,
              backgroundColor: colors.white,
              padding: 10,
              paddingVertical: 20,
              paddingHorizontal: 30,
            }}
          >
            <View
              style={[
                styles.logoStyleMob,
                {
                  backgroundColor:
                    failModal == false ? colors.roheline : colors.red,
                },
              ]}
            >
              {failModal == false ? (
                <Image source={icons.done} style={styles.doneIconMob} />
              ) : (
                <Image source={icons.closeIcon} style={styles.closeIcon} />
              )}
            </View>

            <Text style={styles.textstyle}>
              {failModal == false ? "edukas" : "ebaõnnestunud"}
            </Text>
            <Text style={styles.textSubStyle}>
              {failModal == false ? "" : errorText}
            </Text>
            <CommonGreenBtn
              title={failModal == false ? "Esita" : "tühistada"}
              onPress={onsubmitPress}
              style={[styles.button, { marginTop: 20, alignSelf: "center" }]}
            />
          </View>
        </ReactNativeModal>
      )}
      <CartAddFLowModal
        isVisible={locarShow}
        onClose={() => {
          setLocarShow(false);
        }}
        itemData={params?.itemData}
        oncomfirmPress={() => {}}
      />
    </View>
  );
};

export default QRCodeScannerScreen;
