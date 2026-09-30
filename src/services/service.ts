import AsyncStorage from "@react-native-async-storage/async-storage";
import { Expense } from "../interfaces/interfaces";
import { File, Paths } from "expo-file-system";
import * as Sharing from "expo-sharing";
import { createExpensesTable, getExpensesToExport, importExpenses } from "../database/database";
import { Alert } from "react-native";

export const initializeDatabase = async () => {
    await createExpensesTable();
};

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
            Descricao: ${expense.description === null ? "Descricao nao informada." : expense.description};
            Valor: ${expense.value};
            Data: ${new Date(expense.created_at).toISOString()}
        `
    })

    const file = new File(Paths.document, "relatorio.txt");

    if (file.exists) {
        Alert.alert(
            "Arquivo já gerado",
            "Deseja gerar novamente?",
            [
                {
                    text: "Cancelar",
                },
                {
                    text: "Gerar novamente",
                    onPress: async () => {
                        file.delete()
                        file.create();
                        file.write(report);

                        await Sharing.shareAsync(file.uri);
                    }
                }
            ]
        );

        return;
    }

    file.create();
    file.write(report);
    await Sharing.shareAsync(file.uri);
};

export const exportData = async () => {
    const expensesList = await getExpensesToExport();

    const json = JSON.stringify(expensesList);

    const file = new File(Paths.document, "export-data.json");

    if (file.exists) {
        Alert.alert(
            "Arquivo já gerado",
            "Deseja gerar novamente?",
            [
                {
                    text: "Cancelar",
                },
                {
                    text: "Gerar novamente",
                    onPress: async () => {
                        file.delete()
                        file.create();
                        file.write(json);

                        await Sharing.shareAsync(file.uri);
                    }
                }
            ]
        );
        return;
    }

    file.create();
    file.write(json);
    await Sharing.shareAsync(file.uri);
}

export const importData = async () => {
    const file = await File.pickFileAsync({ multipleFiles: false, mimeTypes: "application/json" });

    if (file.canceled) {
        return;
    }

    const selectedFile = file.result;
    const content = await selectedFile.text();
    const json = JSON.parse(content);

    await importExpenses(json);
}

// TESTS
export const handleDelete = async () => {
    await AsyncStorage.removeItem("name");
};