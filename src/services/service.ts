import AsyncStorage from "@react-native-async-storage/async-storage";
import { Expense } from "../interfaces/interfaces";
import { File, Paths } from "expo-file-system";
import * as Sharing from "expo-sharing";

export const handleSaveName = async (name: string) => {
    try {
        if (name.trim() === "") {
            return false;
        }

        await AsyncStorage.setItem("name", name);
        return true;

    } catch (error) {
        console.error(error);
        return false;
    }
};

export const handleGetName = async () => {
    const savedName = await AsyncStorage.getItem("name");
    return savedName;
};

export const generateReport = async (expenseList: Expense[]) => {
    let report = "RELATORIO DE DESPESAS\n\n"

    expenseList.forEach((expense) => {
        report += `
            Titulo: ${expense.title};
            Descricao: ${expense.description === null && "Descricao nao informada."};
            Valor: ${expense.value};
            Data: ${new Date(expense.created_at).toISOString()}
        `
    })

    const file = new File(Paths.document, "relatorio5''.txt");
    file.create();
    file.write(report);

    await Sharing.shareAsync(file.uri);
};

// TESTS
export const handleDelete = async () => {
    await AsyncStorage.removeItem("name");
};