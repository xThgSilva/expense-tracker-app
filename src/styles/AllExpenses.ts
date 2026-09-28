import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EAEAEA",
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
    filterContainer: {
        padding: 12,
        gap: 16
    },
    filterHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 0 
    },
    filterHeaderText: {
        color: "#282828",
        fontSize: 24
    },
    calendarButton: {
        paddingVertical: 8,
        paddingHorizontal: 8
    },
    calendarButtonIcon: {
        color: "#AC0000",
        fontSize: 28
    },
    optionsFilter: {
        padding: 12,
        gap: 16
    },
    filterButton: {
        backgroundColor: "#D50303",
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 12,
        marginHorizontal: 4,
    },
    filterButtonText: {
        color: "#FFF",
        fontSize: 14,
        textAlign: "center"
    },
    filterSection: {
        flex: 1,
        paddingBottom: 12
    },
    filterSectionHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 12
    },
    filterSectionHeaderText: {
        color: "#282828",
        fontSize: 20,
    },
    filterList: {
        padding: 12
    },
    questionButtonText: {
        fontSize: 20,
        marginLeft: 32
    },
    relatoryButton: {
        backgroundColor: "#D50303",
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 12,
    },
    relatoryButtonText: {
        color: "#FFF",
        textAlign: "center",
        fontSize: 14
    },
    expensesListContainer: {
        flex: 1,
    },
    expensesList: {
        padding: 12,
    },
    expenseCard: {
        backgroundColor: "#C3C1C1",
        padding: 16,
        borderRadius: 11,
        gap: 8,
        marginBottom: 12
    },
    cardHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    expenseTitle: {
        fontSize: 18,
        fontWeight: "bold",
    },
    expenseValue: {
        color: "#03993c",
        fontSize: 14,
    },
    cardContent: {
        gap: 12
    },
    expenseDescription: {
        fontSize: 14,
        width: "75%"
    },
    expenseDate: {
        textAlign: "right",
        fontSize: 12
    },
    questionModal: {
        alignSelf: "center",
        margin: 0,
    },
    modalContent: {
        backgroundColor: "#DDDDDD",
        padding: 24,
        borderRadius: 12,
        alignItems: "center",
        width: "85%",
        height: 300,
        gap: 24,
    },
    modalTitle: {
        color: "#282828",
        fontSize: 20
    },
    modalText: {
        color: "#282828",
        fontSize: 16
    },
    modalLeftButton: {
        backgroundColor: "#D50303",
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 12,
        width: 100
    },
    modalLeftButtonText: {
        color: "#FFF",
        textAlign: "center",
        fontSize: 14
    }
});