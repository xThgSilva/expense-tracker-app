import React, { Children } from 'react'
import { View, Text } from 'react-native';
import FontAwesome from '@react-native-vector-icons/fontawesome';

import { styles } from "../styles/Header"

type HeaderProps = {
    headerTitle: string;
}

const Header = ({ headerTitle }: HeaderProps) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{headerTitle}</Text>
        </View>
    )
}

export default Header