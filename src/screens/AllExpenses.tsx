import { View, TouchableOpacity, Text, ScrollView } from "react-native";
import { FontAwesome } from "@react-native-vector-icons/fontawesome";
import { styles } from "../styles/AllExpenses"
import Header from "../components/Header";
import Footer from "../components/Footer";
import CardExpense from "../components/CardExpense";
import Modal from "react-native-modal";
import { useState } from "react";
import Button from "../components/Button";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppScreens } from "../App";

type AllEspensesProps = NativeStackScreenProps<AppScreens, "AllExpenses">;

const AllExpenses = ({ navigation }: AllEspensesProps) => {
    const filterButtons = [
        { id: "1", label: "Últimos 7 dias", onPress: () => { setFilterType(7) } },
        { id: "2", label: "Últimos 14 dias", onPress: () => { setFilterType(14) } },
        { id: "3", label: "Últimos 30 dias", onPress: () => { setFilterType(30) } },
    ];

    const name = "Username"

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [filterType, setFilterType] = useState<7 | 14 | 30>(7)

    return (
        <View style={styles.container}>
            <Header headerTitle="Minhas Despesas" />
            <TouchableOpacity style={styles.goBackButton} onPress={() => navigation.navigate("Home", { name })}>
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
                            buttonStyle={styles.filterButton}
                            onPress={button.onPress}
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
                    <TouchableOpacity style={styles.relatoryButton}>
                        <Text style={styles.relatoryButtonText}>Gerar Relatório</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView showsVerticalScrollIndicator={false} style={styles.filterList}>
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
                    <TouchableOpacity style={styles.modalLeftButton} onPress={() => setIsOpen(false)}>
                        <Text style={styles.modalLeftButtonText}>Entendi</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    )
}

export default AllExpenses