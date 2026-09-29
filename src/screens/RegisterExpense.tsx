import { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import { styles } from '../styles/RegisterExpense';
import { FontAwesome } from "@react-native-vector-icons/fontawesome";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppScreens } from '../App';

type RegisterExpenseProps = NativeStackScreenProps<AppScreens, "RegisterExpense">;

const RegisterExpense = ({ navigation }: RegisterExpenseProps) => {
  const [expenseTitle, setExpenseTitle] = useState<string>("");
  const [expenseDescription, setExpenseDescription] = useState<string>("");
  const [expenseValue, setExpenseValue] = useState<string>("");

  const [statusStyle, setStatusStyle] = useState<"success" | "error" | "">("");
  const [status, setStatus] = useState<string>("");

  const handleRegisterExpense = () => {
    try {
      if (expenseTitle === "" || expenseValue === "") {
        throw new Error("[ERRO]: O título da despesa e o valor são obrigatórios!");
      }
    } catch (error) {
      if (error instanceof Error) {
        setStatus(error.message);
        setStatusStyle("error");
      }
      return;
    }

    setStatusStyle("success");
    setStatus("Despesa registrada! Voltando...");
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Header headerTitle='Área de Registro' />
      <TouchableOpacity style={styles.goBackButton} onPress={() => navigation.navigate("Home")}>
        <FontAwesome name='arrow-left' style={styles.goBackButtonIcon} /><Text style={styles.goBackButtonText}>Voltar</Text>
      </TouchableOpacity>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <ScrollView>
          <View style={styles.registerExpenseForm}>
            <Text style={styles.formTitle}>Adicionar Despesa</Text>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Título da Despesa</Text>
              <TextInput placeholderTextColor={"#BABABA"} placeholder='Exemplo: abastecer o carro' onChangeText={setExpenseTitle} style={styles.input} />
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Descrição (opcional)</Text>
              <TextInput placeholderTextColor={"#BABABA"} placeholder='Exemplo: abasteci para viajar' onChangeText={setExpenseDescription} style={styles.input} />
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Valor</Text>
              <TextInput placeholderTextColor={"#BABABA"} placeholder='Exemplo: 10,51' keyboardType='numeric' onChangeText={setExpenseValue} style={styles.input} />
            </View>
            <TouchableOpacity style={styles.confirmButton} onPress={handleRegisterExpense}>
              <Text style={styles.confirmButtonText}>Confirmar</Text>
            </TouchableOpacity>
            <Text style={[statusStyle === "success" ? styles.success : styles.error]}>{status}</Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <Footer />
    </View>
  )
}

export default RegisterExpense