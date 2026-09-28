import { View, TouchableOpacity, Text } from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { styles } from "../styles/Configurations";
import FontAwesome from "@react-native-vector-icons/fontawesome";
import { useState } from "react";
import Modal from "react-native-modal";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppScreens } from "../App";

type ConfigurationsProps = NativeStackScreenProps<AppScreens, "Configurations">;

const Configurations = ({ navigation }: ConfigurationsProps) => {
    const [exportDataModal, setExportDataModal] = useState<boolean>(false);
    const [importDataModal, setImportDataModal] = useState<boolean>(false);
    const [sendCloudModal, setSendCloudModal] = useState<boolean>(false);

    const name = "Username"

    return (
        <View style={styles.container}>
            <Header headerTitle={"Configurações"} />
            <TouchableOpacity style={styles.goBackButton} onPress={() => navigation.navigate("Home",{ name })}>
                <FontAwesome name='arrow-left' style={styles.goBackButtonIcon} /><Text style={styles.goBackButtonText}>Voltar</Text>
            </TouchableOpacity>
            <View style={styles.configOptionsContainer}>
                <View style={styles.configOption}>
                    <TouchableOpacity>
                        <Text style={styles.configOptionText}>Exportar dados</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setExportDataModal(true)}>
                        <FontAwesome style={styles.configOptionIcon} name="question-circle" />
                    </TouchableOpacity>
                </View>
                <View style={styles.configOption}>
                    <TouchableOpacity>
                        <Text style={styles.configOptionText}>Importar dados</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setImportDataModal(true)}>
                        <FontAwesome style={styles.configOptionIcon} name="question-circle" />
                    </TouchableOpacity>
                </View>
                <View style={styles.configOption}>
                    <TouchableOpacity>
                        <Text style={styles.configOptionText}>Enviar para nuvem</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSendCloudModal(true)}>
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
            <Modal
                style={styles.questionModal}
                isVisible={sendCloudModal}
                animationIn="bounceInUp"
                animationOut="bounceOutDown"
                animationInTiming={750}
                animationOutTiming={750}
                backdropOpacity={.5}
                backdropColor="#000"
            >
                <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>Enviar para nuvem</Text>
                    <Text style={styles.modalText}>Esta função ainda está em desenvolvimento.</Text>
                    <TouchableOpacity style={styles.modalLeftButton} onPress={() => setSendCloudModal(false)}>
                        <Text style={styles.modalLeftButtonText}>Entendi</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    )
}

export default Configurations