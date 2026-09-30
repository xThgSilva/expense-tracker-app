import { Text, View, ScrollView } from "react-native";
import { styles } from "../styles/Home";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CardExpense from "../components/CardExpense";
import Button from "../components/Button";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppScreens } from "../App";
import { useEffect, useState } from "react";
import { handleGetName } from "../services/service";
import { Expense } from "../interfaces/interfaces";
import { getAllExpenses } from "../database/database";

type HomeProps = NativeStackScreenProps<AppScreens, "Home">;

const Home = ({ navigation }: HomeProps) => {
    const menuButtons = [
        { id: "1", label: "Registrar Despesa", onPress: () => { navigation.navigate("RegisterExpense") } },
        { id: "2", label: "Ver Todas", onPress: () => { navigation.navigate("AllExpenses") } },
        { id: "3", label: "Configurações", onPress: () => { navigation.navigate("Settings") } },
    ];
    const [name, setName] = useState<string>("");
    const [expenses, setExpenses] = useState<Expense[]>([]);

    useEffect(() => {
        const loadName = async () => {
            const savedName = await handleGetName();

            if (savedName) {
                setName(savedName);
            }
        };

        const getLimitExpenses = async () => {
            const expenses = await getAllExpenses();
            setExpenses(expenses)
        };

        getLimitExpenses();
        loadName();
    }, []);

    return (
        <View style={styles.container}>
            <Header headerTitle="Início" />
            <Text style={styles.welcomeText}>Olá, {name}!</Text>
            <View style={styles.optionsMenu} >
                <Text style={styles.menuTitle}>Menu de Opções</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {menuButtons.map(button => (
                        <Button
                            key={button.id}
                            label={button.label}
                            buttonStyle={styles.menuButton}
                            onPress={button.onPress}
                        />
                    ))}
                </ScrollView>
            </View>
            <View style={styles.lastExpenses}>
                <Text style={styles.lastExpensesText}>Despesas mais recentes</Text>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {expenses.length > 0 ? expenses.map((expense) => (
                        <CardExpense
                            key={expense.id}
                            title={expense.title}
                            value={expense.value}
                            description={expense.description}
                            created_at={expense.created_at}
                        />
                    )) : <Text style={styles.noExpenses}>Sem despesas registradas.</Text>
                    }
                </ScrollView>
            </View>
            <Footer />
        </View >
    )
}

export default Home