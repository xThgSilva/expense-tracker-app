import { ScrollView, TouchableOpacity, Text } from "react-native";
import Button from "./Button";
import { styles } from "../styles/HorizontalScrollView";

type ButtonItem = {
    id: string;
    label: string;
    onPress?: () => void;
};

type HorizontalButtonScrollProps = {
    buttons: ButtonItem[];
};

const HorizontalButtonScroll = ({ buttons }: HorizontalButtonScrollProps) => {
    return (
        <ScrollView
            style={styles.scrollContainer}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        >
            {buttons.map((button) => (
                <Button
                    key={button.id}
                    label={button.label}
                    onPress={button.onPress}
                    buttonStyle={styles.button}
                />
            ))}
        </ScrollView>
    );
};

export default HorizontalButtonScroll;