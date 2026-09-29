import * as SQLite from "expo-sqlite";
import { Expense } from "../interfaces/interfaces";

export const getDatabase = async () => {
    const db = await SQLite.openDatabaseAsync("expenses.db");
    return db;
};

export const createExpensesTable = async () => {
    const db = await getDatabase();

    await db.runAsync(`
        CREATE TABLE IF NOT EXISTS tb_expenses (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            description TEXT NULL,
            value REAL NOT NULL,
            created_at TEXT NOT NULL
        );`);
};

export const getAllExpenses = async () => {
    const db = await getDatabase();
    const expenses = await db.getAllAsync<Expense>("SELECT * FROM tb_expenses ORDER BY id DESC LIMIT 5");

    return expenses;
};

// TESTS
export const dropDatabase = async () => {
    const db = await getDatabase()

    db.runAsync("DROP TABLE IF EXISTS tb_expenses")
}