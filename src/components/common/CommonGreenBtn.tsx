import { StyleSheet, Text, View, ViewStyle, TouchableOpacity, Platform, Image } from 'react-native'
import React from 'react'
import { colors } from '../../theme/Colors';
import { commonFontStyle } from '../../theme/Fonts';
import { fontFamily } from '../../helper/constants';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { icons } from '../../theme/Icons';
import { defaultFont } from '../../theme/Fonts';

type Props = {
    title: string;
    onPress: () => void;
    style?: ViewStyle
}

const CommonGreenBtn = ({ title, onPress, style = {} }: Props) => {
    return (
        Platform.OS == 'web' ?
            <TouchableOpacity style={[styles.btn, style]} onPress={() => onPress()}>
                <Text style={styles.btnText}>{title}</Text>
            </TouchableOpacity>
            :
            <TouchableOpacity style={[styles.btnMob, style]} onPress={() => onPress()}>
                <Text style={styles.btnTextMob}>{title}</Text>
                <Image source={icons.rightBack} style={styles.backArrow} />
            </TouchableOpacity>
    )
}

export default CommonGreenBtn

const styles = StyleSheet.create({
    //mobile
    btnMob: {
        backgroundColor: colors.roheline,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 13,
        borderTopStartRadius: 25,
        borderBottomEndRadius: 25,
        borderWidth: 1,
        borderColor: colors.roheline,
        // flex: 1,
        flexDirection: 'row',
    },
    backArrow: {
        height: 11, width: 11, resizeMode: "contain"
    },
    btnTextMob: {
        ...defaultFont(700, 14, colors.black),
        marginRight: 3
    }




    //web
    , btn: {
        backgroundColor: colors.roheline,
        width: widthPercentageToDP(8.5),
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 9,
        borderTopStartRadius: 25,
        borderBottomEndRadius: 25,
        borderWidth: 1,
        borderColor: colors.roheline
    },
    btnText: {
        ...commonFontStyle(fontFamily.articulat_medium, 14, colors.black)
    }
})