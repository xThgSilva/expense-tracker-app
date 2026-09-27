import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { styles } from "../styles/Home";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CardExpense from "../components/CardExpense";
import HorizontalButtonScroll from "../components/HorizontalScrollView";

type HomeProps = {
    name: string;
};

const Home = ({ name }: HomeProps) => {
    const menuButtons = [
        { id: "1", label: "Registrar Despesa", onPress: () => { } },
        { id: "2", label: "Ver Todas", onPress: () => { } },
        { id: "3", label: "Configurações", onPress: () => { } },
    ];

    return (
        <View style={styles.container}>
            <Header headerTitle="Início" />
            <Text style={styles.welcomeText}>Olá, {name}!</Text>
            <View style={styles.optionsMenu} >
                <Text style={styles.menuTitle}>Menu de Opções</Text>
                <HorizontalButtonScroll
                    buttons={menuButtons}
                />
            </View>
            <View style={styles.lastExpenses}>
                <Text style={styles.lastExpensesText}>Despesas mais recentes</Text>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <CardExpense
                        title={"Minha Despesa"}
                        value={100}
                        description={"Uma grande despesa"}
                        date={"14/06/2026 - 16:41"}
                    />
                    <CardExpense
                        title={"Minha Despesa"}
                        value={100}
                        description={"Uma grande despesa"}
                        date={"14/06/2026 - 16:41"}
                    />
                    <CardExpense
                        title={"Minha Despesa"}
                        value={100}
                        description={"Uma grande despesa"}
                        date={"14/06/2026 - 16:41"}
                    />
                    <CardExpense
                        title={"Minha Despesa"}
                        value={100}
                        description={"Uma grande despesa"}
                        date={"14/06/2026 - 16:41"}
                    />
                    <CardExpense
                        title={"Minha Despesa"}
                        value={100}
                        description={"Uma grande despesa"}
                        date={"14/06/2026 - 16:41"}
                    />
                </ScrollView>
            </View>
            <Footer />
        </View>
    )
}

export default Home