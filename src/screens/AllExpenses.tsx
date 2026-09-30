import { View, TouchableOpacity, Text, ScrollView } from "react-native";
import { FontAwesome } from "@react-native-vector-icons/fontawesome";
import { styles } from "../styles/AllExpenses"
import Header from "../components/Header";
import Footer from "../components/Footer";
import CardExpense from "../components/CardExpense";
import Modal from "react-native-modal";
import { useEffect, useState } from "react";
import Button from "../components/Button";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppScreens } from "../App";
import { Expense } from "../interfaces/interfaces";
import { filterExpensesByDate, getAllExpenses } from "../database/database";
import { generateReport } from "../services/service";

type AllEspensesProps = NativeStackScreenProps<AppScreens, "AllExpenses">;

const AllExpenses = ({ navigation }: AllEspensesProps) => {
    const filterButtons = [
        { id: "7", label: "Últimos 7 dias", onPress: () => { setFilterType(7) } },
        { id: "14", label: "Últimos 14 dias", onPress: () => { setFilterType(14) } },
        { id: "30", label: "Últimos 30 dias", onPress: () => { setFilterType(30) } },
    ];

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [filterType, setFilterType] = useState<7 | 14 | 30 | null>(null)
    const [expenses, setExpenses] = useState<Expense[]>([]);
    const [page, setPage] = useState<number>(1);

    useEffect(() => {
        if (filterType) {
            const filterExpenses = async () => {
                const date = new Date();
                date.setDate(date.getDate() - filterType);

                const filteredExpenses = await filterExpensesByDate(date.toISOString());
                setExpenses(filteredExpenses);
            };

            filterExpenses();
        } else {
            const getExpenses = async () => {
                const expenses = await getAllExpenses(page, 10);
                setExpenses(expenses);
            };

            getExpenses();
        }
    }, [page, filterType]);

    const handleGenerateReport = () => {
        generateReport(expenses);
    };

    return (
        <View style={styles.container}>
            <Header headerTitle="Minhas Despesas" />
            <TouchableOpacity style={styles.goBackButton} onPress={() => navigation.navigate("Home")}>
                <FontAwesome name='arrow-left' style={styles.goBackButtonIcon} /><Text style={styles.goBackButtonText}>Voltar</Text>
            </TouchableOpacity>
            <View style={styles.filterContainer}>
                <View style={styles.filterHeader}>
                    <Text style={styles.filterHeaderText}>Adicionar um filtro:</Text>
                    <TouchableOpacity style={styles.calendarButton}>
                        <FontAwesome name="calendar" style={styles.calendarButtonIcon} />
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {filterButtons.map(button => (
                        <Button
                            key={button.id}
                            label={button.label}
                            buttonStyle={[styles.filterButton, filterType != Number(button.id) ? styles.disabled : styles.filterButton]}
                            onPress={() => {
                                if (filterType === Number(button.id)) {
                                    setFilterType(null);
                                } else {
                                    setFilterType(Number(button.id) as 7 | 14 | 30);
                                }
                            }}
                        />
                    ))}
                </ScrollView>
            </View>
            <View style={styles.filterSection}>
                <View style={styles.filterSectionHeader}>
                    <Text style={styles.filterSectionHeaderText}>Lista de Despesas</Text>
                    <TouchableOpacity onPress={() => setIsOpen(true)}>
                        <FontAwesome style={styles.questionButtonText} name="question-circle" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.relatoryButton} onPress={handleGenerateReport}>
                        <Text style={styles.relatoryButtonText}>Gerar Relatório</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView showsVerticalScrollIndicator={false} style={styles.filterList}>
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
                <View style={styles.paginationView}>
                    <TouchableOpacity
                        style={[styles.paginationButton, page <= 1 && styles.disabled]}
                        disabled={page <= 1}
                        onPress={() => setPage(page - 1)}
                    >
                        <Text>Página anterior</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.paginationButton, expenses.length < 10 && styles.disabled]}
                        disabled={expenses.length < 10}
                        onPress={() => setPage(page + 1)}
                    >
                        <Text>Próxima página</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Footer />
            <Modal
                style={styles.questionModal}
                isVisible={isOpen}
                animationIn="bounceInUp"
                animationOut="bounceOutDown"
                animationInTiming={500}
                animationOutTiming={500}
                backdropOpacity={.5}
                backdropColor="#000"
            >
                <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>Gerar Relatório</Text>
                    <Text style={styles.modalText}>A função "Gerar Relatório" gera um relatório sobre suas despesas. O relatório será baixado no seu celular e será possível compartilhá-lo com outros</Text>
                    <TouchableOpacity style={styles.modalLeftButton} onPress={() => setIsOpen(false)} >
                        <Text style={styles.modalLeftButtonText}>Entendi</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    )
}

export default AllExpenses