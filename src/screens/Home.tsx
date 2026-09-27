import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { styles } from "../styles/Home";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
                    <View style={styles.expenseCard}>
                        <View style={styles.cardHeader}>
                            <Text style={styles.expenseTitle}>Nome da Despesa</Text>
                            <Text style={styles.expenseValue}>R$ 100,00</Text>
                        </View>
                        <View style={styles.cardContent}>
                            <Text style={styles.expenseDescription}>Compra de não sei o que mais não sei o que lá</Text>
                            <Text style={styles.expenseDate}>Data: 24/09/2026 - 16:41</Text>
                        </View>
                    </View>
                    <View style={styles.expenseCard}>
                        <View style={styles.cardHeader}>
                            <Text style={styles.expenseTitle}>Nome da Despesa</Text>
                            <Text style={styles.expenseValue}>R$ 100,00</Text>
                        </View>
                        <View style={styles.cardContent}>
                            <Text style={styles.expenseDescription}>Compra de não sei o que mais não sei o que lá</Text>
                            <Text style={styles.expenseDate}>Data: 24/09/2026 - 16:41</Text>
                        </View>
                    </View>
                    <View style={styles.expenseCard}>
                        <View style={styles.cardHeader}>
                            <Text style={styles.expenseTitle}>Nome da Despesa</Text>
                            <Text style={styles.expenseValue}>R$ 100,00</Text>
                        </View>
                        <View style={styles.cardContent}>
                            <Text style={styles.expenseDescription}>Compra de não sei o que mais não sei o que lá</Text>
                            <Text style={styles.expenseDate}>Data: 24/09/2026 - 16:41</Text>
                        </View>
                    </View>
                    <View style={styles.expenseCard}>
                        <View style={styles.cardHeader}>
                            <Text style={styles.expenseTitle}>Nome da Despesa</Text>
                            <Text style={styles.expenseValue}>R$ 100,00</Text>
                        </View>
                        <View style={styles.cardContent}>
                            <Text style={styles.expenseDescription}>Compra de não sei o que mais não sei o que lá</Text>
                            <Text style={styles.expenseDate}>Data: 24/09/2026 - 16:41</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
            <Footer />
        </View>
    )
}

export default Home