import { View, Text } from "react-native";
import { styles }from "../styles/CardExpense";

type ExpenseCard = {
    title: string;
    value: number;
    description: string | null;
    date: string
};

const CardExpense = ({title, value, description, date}: ExpenseCard) => {
    return (
        <View style={styles.expenseCard}>
            <View style={styles.cardHeader}>
                <Text style={styles.expenseTitle}>{title}</Text>
                <Text style={styles.expenseValue}>R${value}</Text>
            </View>
            <View style={styles.cardContent}>
                <Text style={styles.expenseDescription}>{description ? description : "Descrição não informada"}</Text>
                <Text style={styles.expenseDate}>Data: {date}</Text>
            </View>
        </View>
    )
}

export default CardExpense