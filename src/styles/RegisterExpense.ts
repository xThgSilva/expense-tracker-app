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
        fontSize: 18
    },
    goBackButtonText: {
        fontSize: 18
    },
    registerExpenseForm: {
        backgroundColor: "#DDDDDD",
        gap: 24,
        alignSelf: "center",
        paddingVertical: 16,
        paddingHorizontal: 32,
        borderRadius: 12,
        marginTop: 48,
        width: 350
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
        borderColor: "#C3C1C1",
        paddingVertical: 12,
        paddingHorizontal: 24,
        color:"#282828"
    },
    confirmButton: {
        alignSelf: "center",
        backgroundColor: "#D50303",
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 12,
        fontWeight: 600
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
        color: "#D50303",
        fontSize: 16
    }
});