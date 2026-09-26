import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EAEAEA"
    },
    goBackButton: {
       gap: 12,
       flexDirection: "row",
       alignItems: "center",
       width: 100,
       paddingVertical: 10,
       paddingHorizontal: 20
    },
    goBackButtonIcon: {
        fontSize: 20
    },
    goBackButtonText: {
        fontSize: 20
    },
    registerExpenseForm: {
        backgroundColor: "#DDDDDD",
        gap: 24,
        alignSelf: "center",
        paddingVertical: 16,
        paddingHorizontal: 32,
        borderRadius: 12,
        marginTop: 48,
        width: 300
    },
    formTitle: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#282828",
        textAlign: "center"
    },
    inputGroup: {
        gap: 8
    },
    label: {
        fontSize: 16
    },
    input: {
        borderWidth: 1,
        borderRadius: 12,
        borderColor: "#6B6B6B",
        paddingVertical: 12,
        paddingHorizontal: 24,
    },
    confirmButton: {
        alignSelf: "center",
        backgroundColor: "#D91B1B",
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 12
    },
    confirmButtonText: {
        color: "#FFF",
        fontSize: 16
    },
    success: {
        textAlign: "center",
        color: "#06C54F",
        fontSize: 16
    },
    error: {
        textAlign: "center",
        color: "#990303",
        fontSize: 16
    }
});