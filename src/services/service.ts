import AsyncStorage from "@react-native-async-storage/async-storage";

export const handleSaveName = async (name: string) => {
    try {
        if (name.trim() === "") {
            return false;
        }

        await AsyncStorage.setItem("name", name);
        return true;

    } catch (error) {
        console.error(error);
        return false;
    }
};

export const handleGetName = async () => {
    try {
        const savedName = await AsyncStorage.getItem("name");

        if (savedName) {
            return savedName;
        }
        else {
            throw new Error("[ERRO]Erro ao buscar o nome do usuário.");
        }
    } catch (error) {
        console.error(error);
    };
};