import { View, Text } from "react-native";
import { styles }from "../styles/CardExpense";

type ExpenseCardProps = {
    title: string;
    value: number;
    description: string | null;
    created_at: string
};

const CardExpense = ({title, value, description, created_at}: ExpenseCardProps) => {
    const date = new Date(created_at);

    const formatterDate = date.toLocaleDateString("pt-BR");
    const formatterHour = date.toLocaleTimeString("pt-BR");

    return (
        <View style={styles.expenseCard}>
            <View style={styles.cardHeader}>
                <Text style={styles.expenseTitle}>{title}</Text>
                <Text style={styles.expenseValue}>R${value.toFixed(2)}</Text>
            </View>
            <View style={styles.cardContent}>
                <Text style={styles.expenseDescription}>{description ? description : "Descrição não informada"}</Text>
                <Text style={styles.expenseDate}>Data: {formatterDate} às {formatterHour}</Text>
            </View>
        </View>
    )
}

export default CardExpense