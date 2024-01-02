//import liraries
import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import Modal from "react-native-modal";
import { colors } from "../../theme/Colors";

type Props = {
  isVisible: boolean;
  onClose: () => void;
  sourceId: any;
};

// create a component
const ImageModalWeb = ({ isVisible, onClose, sourceId }: Props) => {
  return (
    <Modal
      animationInTiming={500}
      animationOutTiming={500}
      style={{ margin: 0 }}
      backdropColor={colors.headerBG}
      backdropOpacity={0.2}
      isVisible={isVisible}
      onBackButtonPress={() => {
        onClose();
      }}
      onBackdropPress={() => {
        onClose();
      }}
      
    >
      <Pressable onPress={onClose}  style={styles.container}>
        <View style={styles.bodyContent}>
          <Image
            resizeMode="contain"
            style={styles.imageStyle}
            source={{
              uri: `https://api.toolscab.ee/PhotoBinary/ProductPhoto?product_photo_id=${sourceId}&maxWidth=100&maxHeight=100`,
            }}
          />
        </View>
      </Pressable>
    </Modal>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bodyContent: {
    // width: screen_width * 0.32,
    paddingHorizontal: 45,
    backgroundColor: colors.white,
  },
  imageStyle: {
    width: 500,
    height: 500,
  },
});

//make this component available to the app
export default ImageModalWeb;
