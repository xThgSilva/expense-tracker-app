import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EAEAEA",
    },
    welcomeText: {
        fontSize: 24,
        color: "#282828",
        margin: 12
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
        marginHorizontal: 4
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
    },
    expenseCard: {
        backgroundColor: "#C3C1C1",
        padding: 16,
        borderRadius: 12,
        gap: 8,
        marginBottom: 12
    },
    cardHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    expenseTitle: {
        fontSize: 20,
        fontWeight: "bold",
    },
    expenseValue: {
        color: "#03993c",
        fontSize: 16,
    },
    cardContent: {
        gap: 12
    },
    expenseDescription: {
        fontSize: 16,
        width: "75%"
    },
    expenseDate: {
        textAlign: "right"
    },
    footer: {
        backgroundColor: "#AC0000",
        height: 75
    }
});