import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
        gap: 20
    },
    expenseDescription: {
        fontSize: 16,
        width: "75%"
    },
    expenseDate: {
        textAlign: "right"
    }
});