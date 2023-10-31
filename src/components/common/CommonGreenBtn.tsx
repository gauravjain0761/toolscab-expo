import { StyleSheet, Text, View, ViewStyle, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../../theme/Colors';
import { commonFontStyle } from '../../theme/Fonts';
import { fontFamily } from '../../helper/constants';
import { widthPercentageToDP } from 'react-native-responsive-screen';

type Props = {
    title: string;
    onPress: () => void;
    style?: ViewStyle
}

const CommonGreenBtn = ({ title, onPress, style = {} }: Props) => {
    return (
        <TouchableOpacity style={[styles.btn, style]} onPress={() => onPress()}>
            <Text style={styles.btnText}>{title}</Text>
        </TouchableOpacity>
    )
}

export default CommonGreenBtn

const styles = StyleSheet.create({
    btn: {
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