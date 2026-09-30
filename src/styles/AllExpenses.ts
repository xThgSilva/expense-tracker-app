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
        color: "#D50303",
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
        fontSize: 16,
    },
    filterSection: {
        flex: 1,
    },
    filterSectionHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 12
    },
    filterSectionHeaderText: {
        color: "#282828",
        fontSize: 24,
    },
    filterList: {
        padding: 12
    },
    questionButtonText: {
        fontSize: 16,
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
        fontSize: 16
    },
    expensesListContainer: {
        flex: 1,
    },
    expensesList: {
        padding: 12,
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
        fontSize: 20,
        fontWeight: 600
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
    },
    noExpenses: {
        textAlign: "center",
        fontSize: 16,
        marginTop: 24
    },
    paginationView: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        paddingVertical: 16
    },
    paginationButton: {
        padding: 8,
    },
    disabled: {
        opacity: 0.4
    }
});