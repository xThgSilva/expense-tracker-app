import { View, TouchableOpacity, Text, ActivityIndicator } from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { styles } from "../styles/Settings";
import FontAwesome from "@react-native-vector-icons/fontawesome";
import { useState } from "react";
import Modal from "react-native-modal";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppScreens } from "../App";
import { exportData, importData } from "../services/service";

type ConfigurationsProps = NativeStackScreenProps<AppScreens, "Settings">;

const Configurations = ({ navigation }: ConfigurationsProps) => {
    const [exportDataModal, setExportDataModal] = useState<boolean>(false);
    const [importDataModal, setImportDataModal] = useState<boolean>(false);
    const [loadingExport, setLoadingExport] = useState<boolean>(false);
    const [loadingImport, setLoadingImport] = useState<boolean>(false);

    const handleExportData = async () => {
        setLoadingExport(true);
        try {
            await exportData();
        } finally {
            setLoadingExport(false);
        }
    };

    const handleImporData = async () => {
        setLoadingImport(true);
        try {
            await importData();
        } finally {
            setLoadingImport(false)
        }
    }

    return (
        <View style={styles.container}>
            <Header headerTitle={"Configurações"} iconName="gear" />
            <TouchableOpacity style={styles.goBackButton} onPress={() => navigation.navigate("Home")}>
                <FontAwesome name='arrow-left' style={styles.goBackButtonIcon} /><Text style={styles.goBackButtonText}>Voltar</Text>
            </TouchableOpacity>
            <View style={styles.configOptionsContainer}>
                <View style={styles.configOption}>
                    <TouchableOpacity onPress={handleExportData} disabled={loadingExport}>
                        {loadingExport ?
                            <ActivityIndicator size={20} color={"#FFF"} />
                            : <Text style={styles.configOptionText}>Exportar dados</Text>
                        }
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setExportDataModal(true)}>
                        <FontAwesome style={styles.configOptionIcon} name="question-circle" />
                    </TouchableOpacity>
                </View>
                <View style={styles.configOption}>
                    <TouchableOpacity onPress={handleImporData} disabled={loadingImport}>
                        {loadingImport ?
                            <ActivityIndicator size={20} color={"#FFF"} />
                            : <Text style={styles.configOptionText}>Importar dados</Text>
                        }</TouchableOpacity>
                    <TouchableOpacity onPress={() => setImportDataModal(true)}>
                        <FontAwesome style={styles.configOptionIcon} name="question-circle" />
                    </TouchableOpacity>
                </View>
            </View>
            <Footer />
            <Modal
                style={styles.questionModal}
                isVisible={exportDataModal}
                animationIn="bounceInUp"
                animationOut="bounceOutDown"
                animationInTiming={750}
                animationOutTiming={750}
                backdropOpacity={.5}
                backdropColor="#000"
            >
                <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>Exportar Dados</Text>
                    <Text style={styles.modalText}>Exportar dados é um recurso que permite você fazer uma cópia de todas as suas despesas adicionadas. Podendo fazer isso para mandar uma cópia para alguém ou mudar de dispositivo</Text>
                    <TouchableOpacity style={styles.modalLeftButton} onPress={() => setExportDataModal(false)}>
                        <Text style={styles.modalLeftButtonText}>Entendi</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
            <Modal
                style={styles.questionModal}
                isVisible={importDataModal}
                animationIn="bounceInUp"
                animationOut="bounceOutDown"
                animationInTiming={750}
                animationOutTiming={750}
                backdropOpacity={.5}
                backdropColor="#000"
            >
                <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>Importar Dados</Text>
                    <Text style={styles.modalText}>Importar dados permite que você restaure uma cópia de despesas que foi exportada anteriormente. Útil para recuperar dados de um backup ou ao trocar de dispositivo.</Text>
                    <TouchableOpacity style={styles.modalLeftButton} onPress={() => setImportDataModal(false)}>
                        <Text style={styles.modalLeftButtonText}>Entendi</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    )
}

export default Configurations