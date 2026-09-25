import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from "../styles/Identification";

const waveCorner = require("../assets/imgs/wave-corner-top.png");
const pig = require("../assets/imgs/porquinho.png")

export const Identification = () => {
    return (
        <View style={styles.container}>
            <Image source={waveCorner} />
            <View>
                <Text style={styles.title}>Controle de Gastos</Text>
                <Text style={styles.subTitle}>Olá, Seja Bem Vindo</Text>
            </View>
            <View style={styles.inputGroup}>
                <Text style={styles.label}>Informe o seu nome:</Text>
                <TextInput style={styles.input} />
                <TouchableOpacity style={styles.confirmButton}>
                    <Text style={styles.confirmButtonText}>Confirmar</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Image style={styles.pig} source={pig} />
                <View style={styles.footer}></View>
            </View>
        </View>
    )
}
