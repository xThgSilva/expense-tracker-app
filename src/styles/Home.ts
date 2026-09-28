import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EAEAEA",
    },
    welcomeText: {
        fontSize: 24,
        color: "#282828",
        margin: 12,
        fontWeight: 600
    },
    optionsMenu: {
        padding: 12,
        gap: 16
    },
    menuTitle: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#282828"
    },
    menuButton: {
        backgroundColor: "#D50303",
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 12,
        marginHorizontal: 6
    },
    textMenuButton: {
        color: "#FFF",
        fontSize: 16
    },
    lastExpenses: {
        padding: 12,
        gap: 16,
        flex: 1
    },
    lastExpensesText: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#282828"
    }
});