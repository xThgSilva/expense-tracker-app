import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 48,
        backgroundColor: "#EAEAEA",
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
        textAlign: "center"
    },
    subTitle: {
        fontSize: 24,
        textAlign: "center"
    },
    inputGroup: {
        display: "flex",
        alignItems: "center",
        width: "100%",
    },
    label: {
        fontSize: 20,
    },
    input:{
        borderWidth: 2,
        borderColor: "#6B6B6B",
        borderRadius: 12,
        width: "50%",
        fontSize: 16,
        paddingVertical: 6,
        paddingHorizontal: 12
    },
    confirmButton: {
        marginTop: 16,
        backgroundColor: "#AC0000",
        paddingVertical: 16, 
        paddingHorizontal: 23,
        borderRadius: 12,
        width: 150 
    },
    confirmButtonText: {
        color: "white",
        textAlign: "center"
    },
    pig: {
        resizeMode: "contain",
        width: 175,
        height: 175,
    },
    footer: {
        backgroundColor: "#AC0000",
        height: 100,
    }
});


// Backgrounds -> EAEAEA
// Elementos Principais -> AC0000
// Cor dos textos -> 282828
// Cor de Fundo dos Botões -> D50303
// Cor de Fundo dos Cards -> 8D8DD8