import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { hp, screen_width } from '../../helper/globalFunctions'
import { commonFontStyle } from "../../theme/Fonts";
import { fontFamily } from '../../helper/constants';
import { colors } from '../../theme/Colors';

type Props = {
    heading: string
}

const HeaderBottomPathView = ({ heading }: Props) => {
    return (
        <View>
            <View style={styles.bodyHeader}>
                <Text style={styles.heading}>{heading}</Text>
            </View>
            <View style={styles.unLineStyle} />
        </View>
    )
}

export default HeaderBottomPathView

const styles = StyleSheet.create({
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
    heading: {
        ...commonFontStyle(fontFamily.articulat_regular, 14, colors.black),
    }
})