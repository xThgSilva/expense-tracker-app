import { TouchableOpacity, Text, ViewStyle, StyleProp } from "react-native";

import { styles } from "../styles/Button";

type ButtonProps = {
    label: string;
    onPress?: () => void;
    buttonStyle?: StyleProp<ViewStyle>;
};

const Button = ({ label, onPress, buttonStyle }: ButtonProps) => {
    return (
        <TouchableOpacity 
            style={[styles.button, buttonStyle]} 
            onPress={onPress}
        >
            <Text style={styles.buttonText}>{label}</Text>
        </TouchableOpacity>
    );
};

export default Button;