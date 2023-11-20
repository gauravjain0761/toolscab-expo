//import liraries
import React, { useState } from "react";
import { StyleSheet,  } from "react-native";
import { colors } from "../../theme/Colors";
import { defaultFont } from "../../theme/Fonts";
import { heightPercentageToDP } from "react-native-responsive-screen";

export const styles = StyleSheet.create({
    // mobile
    title: {
        ...defaultFont('600_o', 32, colors.black),
        marginTop: heightPercentageToDP(6),
        marginBottom: heightPercentageToDP(4),
        textAlign: 'center'
    },
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    filterView: {
        position: 'absolute',
        bottom: heightPercentageToDP(2),
        paddingLeft: heightPercentageToDP(2)
    },
    filterIcon: {
        height: 75, width: 75, resizeMode: 'contain'
    }
});
