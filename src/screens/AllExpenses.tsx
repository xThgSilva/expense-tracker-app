import { View, TouchableOpacity, Text, ScrollView } from "react-native";
import { FontAwesome } from "@react-native-vector-icons/fontawesome";
import { styles } from "../styles/AllExpenses"
import Header from "../components/Header";
import Footer from "../components/Footer";
import Modal from "react-native-modal";
import { useState } from "react";

const AllExpenses = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <View style={styles.container}>
            <Header headerTitle="Minhas Despesas" />
            <TouchableOpacity style={styles.goBackButton}>
                <FontAwesome name='arrow-left' style={styles.goBackButtonIcon} /><Text style={styles.goBackButtonText}>Voltar</Text>
            </TouchableOpacity>
            <View>
                <View style={styles.filterHeader}>
                    <Text style={styles.filterHeaderText}>Adicionar um filtro:</Text>
                    <TouchableOpacity style={styles.calendarButton}>
                        <FontAwesome name="calendar" style={styles.calendarButtonIcon} />
                    </TouchableOpacity>
                </View>
                <ScrollView style={styles.optionsFilter} horizontal={true} showsHorizontalScrollIndicator={false}>
                    <TouchableOpacity style={styles.filterButton}>
                        <Text style={styles.filterButtonText}>Últimos 7 dias</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.filterButton}>
                        <Text style={styles.filterButtonText}>Últimos 14 dias</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.filterButton}>
                        <Text style={styles.filterButtonText}>Últimos 30 dias</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
            <View style={styles.filterList}>
                <View style={styles.filterListHeader}>
                    <Text style={styles.filterListHeaderText}>Lista de Despesas</Text>
                    <TouchableOpacity onPress={() => setIsOpen(true)}>
                        <FontAwesome style={styles.questionButtonText} name="question-circle" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.relatoryButton}>
                        <Text style={styles.relatoryButtonText}>Gerar Relatório</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView style={styles.expensesList} showsHorizontalScrollIndicator={false}>
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