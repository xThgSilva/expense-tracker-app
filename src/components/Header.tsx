import { View, Text } from 'react-native';
import FontAwesome from '@react-native-vector-icons/fontawesome';

import { styles } from "../styles/Header"

type HeaderProps = {
    headerTitle: string;
    iconName?: React.ComponentProps<typeof FontAwesome>['name'] 
}

const Header = ({ headerTitle, iconName }: HeaderProps) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{headerTitle}</Text>
            {iconName && <FontAwesome name={iconName} style={styles.icon} />}
        </View>
    )
}

export default Header