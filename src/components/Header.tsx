import React from 'react'
import { View, Text } from 'react-native';

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