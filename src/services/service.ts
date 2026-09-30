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
    const savedName = await AsyncStorage.getItem("name");
    return savedName;
};

// TESTS
export const handleDelete = async() => {
    await AsyncStorage.removeItem("name");
};