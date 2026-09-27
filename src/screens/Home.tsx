import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { styles } from "../styles/Home";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CardExpense from "../components/CardExpense";

type HomeProps = {
    name: string;
};

const Home = ({ name }: HomeProps) => {
    return (
        <View style={styles.container}>
            <Header headerTitle="Início" />
            <Text style={styles.welcomeText}>Olá, {name}!</Text>
            <View style={styles.optionsMenu} >
                <Text style={styles.menuTitle}>Menu de Opções</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <TouchableOpacity style={styles.menuButton}>
                        <Text style={styles.textMenuButton}>Registrar Despesa</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuButton}>
                        <Text style={styles.textMenuButton}>Ver Todas</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuButton}>
                        <Text style={styles.textMenuButton}>Configurações</Text>
                    </TouchableOpacity>
                </ScrollView>
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