import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { styles } from "../styles/Home";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CardExpense from "../components/CardExpense";
import Button from "../components/Button";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppScreens } from "../App";

type HomeProps = NativeStackScreenProps<AppScreens, "Home">;

const Home = ({ navigation, route }: HomeProps) => {
    const name = route.params.name;
    const menuButtons = [
        { id: "1", label: "Registrar Despesa", onPress: () => { navigation.navigate("RegisterExpense") } },
        { id: "2", label: "Ver Todas", onPress: () => { navigation.navigate("AllExpenses") } },
        { id: "3", label: "Configurações", onPress: () => { navigation.navigate("Configurations") } },
    ];

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
        </View >
    )
}

export default Home