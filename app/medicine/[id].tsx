import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { MedicineContext } from "@/context/MedicineContext";
import { router, useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useContext } from "react";
import { Pressable, SafeAreaView, Text, View, StyleSheet } from "react-native";

const medicineDetails = () => {
  const { id } = useLocalSearchParams();
  const { medicines } = useContext(MedicineContext);
  const medicine = medicines.find((med) => med.id === id);

  return (
    <SafeAreaView style={styles.container}>
      <Pressable onPress={() => router.back()} style={styles.back}>
        <TabBarIcon name={"arrow-back-circle-outline"} size={40} />
      </Pressable>
      <View style={styles.content}>
        <Text style={styles.title}>Details About {medicine?.title}</Text>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  content: {
    flex: 1,
    alignItems: "center",
    marginTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
  },
  back: {
    position: "relative",
    top: 10,
    left: 20,
  },
});

export default medicineDetails;
