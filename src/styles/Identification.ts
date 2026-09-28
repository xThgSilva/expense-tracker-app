import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 48,
        backgroundColor: "#EAEAEA",
    },
    title: {
        fontSize: 28,
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
        borderWidth: 1,
        borderColor: "#C3C1C1",
        borderRadius: 12,
        width: "50%",
        fontSize: 16,
        paddingVertical: 6,
        paddingHorizontal: 12
    },
    confirmButton: {
        marginTop: 16,
        backgroundColor: "#D50303",
        paddingVertical: 16, 
        paddingHorizontal: 23,
        borderRadius: 12,
        width: 150 
    },
    confirmButtonText: {
        color: "#FFF",
        textAlign: "center",
        fontWeight: 600,
        fontSize: 16
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