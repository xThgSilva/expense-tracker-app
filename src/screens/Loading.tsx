import { useEffect, useRef, useState } from "react";
import { View, Text, Animated } from "react-native";
import { styles } from "../styles/Loading";
import LottieView from "lottie-react-native";

type LoadingProps = {
    savedName: string | null | undefined;
    setLoading: (loading: boolean) => void;
}

const Loading = ({ savedName, setLoading }: LoadingProps) => {
    const [animation, setAnimation] = useState<number>(1);
    const opacity = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        if (savedName) {
            Animated.sequence([
                Animated.delay(2500),

                Animated.timing(opacity, {
                    toValue: 0,
                    duration: 500,
                    useNativeDriver: true
                })
            ]).start(() => {
                setAnimation(2);

                Animated.timing(opacity, {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: true
                }).start(() => {
                    const loadingFalse = setTimeout(() => {
                        setLoading(false);
                    }, 1000);

                    return () => {
                        clearTimeout(loadingFalse);
                    };
                });
            });
        }

        if (savedName === null) {
            Animated.sequence([
                Animated.delay(2500),
                Animated.timing(opacity, {
                    toValue: 0,
                    duration: 100,
                    useNativeDriver: true
                })
            ]).start(() => {
                setLoading(false);
            });
        }
    }, [savedName]);

    return (
        <View style={styles.container}>
            {animation === 1 ? (<>
                <Animated.View style={{ opacity: opacity }}>
                    <LottieView
                        source={require("../assets/animations/Searching.json")}
                        autoPlay
                        loop
                        duration={2500}
                        style={styles.animation}
                    />
                    <Text style={styles.animationText}>Buscando seus dados...</Text>
                </Animated.View>
            </>) : (<>
                <Animated.View style={{ opacity: opacity }}>
                    <LottieView
                        source={require("../assets/animations/Verified.json")}
                        autoPlay
                        speed={1.5}
                        style={styles.animation}
                    />
                    <Text style={styles.animationText}>Bem vindo de volta!</Text>
                </Animated.View>
            </>)}
        </View>
    );
};

export default Loading;