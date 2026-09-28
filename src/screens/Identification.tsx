import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from "../styles/Identification";
import { useState } from 'react';
import Footer from '../components/Footer';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppScreens } from '../App';
import { handleSaveName } from '../services/service';

const waveCorner = require("../assets/imgs/wave-corner-top.png");
const pig = require("../assets/imgs/porquinho.png")

type IdentificationProps = NativeStackScreenProps<AppScreens, "Identification">;

const Identification = ({ navigation }: IdentificationProps) => {
    const [name, setName] = useState<string>("");

    const handleSave = async () => {
        const saved = await handleSaveName(name);

        if (saved) {
            navigation.navigate("Home");
        }
    };

    return (
        <View style={styles.container}>
            <Image source={waveCorner} />
            <View>
                <Text style={styles.title}>Controle de Gastos</Text>
                <Text style={styles.subTitle}>Olá, Seja Bem Vindo</Text>
            </View>
            <View style={styles.inputGroup}>
                <Text style={styles.label}>Informe o seu nome:</Text>
                <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={setName}
                />
                <TouchableOpacity style={styles.confirmButton} onPress={handleSave}>
                    <Text style={styles.confirmButtonText}>Confirmar</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Image style={styles.pig} source={pig} />
                <Footer />
            </View>
        </View>
    )
}

export default Identification