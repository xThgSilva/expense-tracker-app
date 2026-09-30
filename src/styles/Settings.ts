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
    configOptionsContainer: {
        flex: 1,
        padding: 12,
        gap: 16
    },
    configOption: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#C3C1C1",
    },
    configOptionText: {
        fontSize: 20
    },
    configOptionIcon: {
        fontSize: 24,
        padding: 12
    },
    questionModal: {
        alignSelf: "center",
        margin: 0,
    },
    modalContent: {
        backgroundColor: "#DDDDDD",
        width: "85%",
        height: 300,
        padding: 24,
        borderRadius: 12,
        alignItems: "center",
        gap: 24
    },
    modalTitle: {
        color: "#282828",
        fontSize: 20
    },
    modalText: {
        color: "#282828",
        fontSize: 16,
    },
    modalLeftButton: {
        backgroundColor: "#D50303",
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 12,
        width: 125
    },
    modalLeftButtonText: {
        color: "#FFF",
        textAlign: "center",
        fontSize: 16
    }
});