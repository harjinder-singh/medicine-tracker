import CustomButton from "@/components/fields/CustomButton";
import CustomLabel from "@/components/fields/CustomLabel";
import CustomTextField from "@/components/fields/CustomTextField";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { MedicineContext } from "@/context/MedicineContext";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useContext, useState } from "react";
import { Pressable, SafeAreaView, Text, View, StyleSheet } from "react-native";
import uuid from "react-native-uuid";

const addMedicine = () => {
  const [text, onChangeText] = useState("");
  const [dose, onChangeDose] = useState("");
  const [doseQty, onChangeDoseQty] = useState("");
  const { updateMedicines } = useContext(MedicineContext);

  const onSubmit = () => {
    updateMedicines({
      id: uuid.v4() as string,
      title: text,
      dose: dose,
      doseQty: doseQty,
    });
    onChangeText("");
    onChangeDose("");
    onChangeDoseQty("");
    router.back();
  };
  return (
    <SafeAreaView style={styles.container}>
      <Pressable onPress={() => router.back()} style={styles.back}>
        <TabBarIcon name={"arrow-back-circle-outline"} size={40} />
      </Pressable>
      <View style={styles.content}>
        <Text style={styles.title}>Add Medicine</Text>
        <View style={styles.form}>
          <CustomLabel text="Please Enter Medicine Name" />
          <CustomTextField onChangeText={onChangeText} value={text} />
          <CustomLabel text="Enter number of doses per day" />
          <CustomTextField onChangeText={onChangeDose} value={dose} />
          <CustomLabel text="Enter quantity of medicines in each dose" />
          <CustomTextField onChangeText={onChangeDoseQty} value={doseQty} />
          <CustomButton text="Add" onPress={onSubmit} />
        </View>
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
  image: {
    width: 300,
    height: 300,
    marginTop: 0,
    resizeMode: "contain",
  },
  form: {
    padding: 50,
  },
  content: {
    flex: 1,
    alignItems: "center",
    marginTop: 50,
  },
  title: {
    fontSize: 48,
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginTop: 10,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    borderRadius: 10,
    width: "100%",
  },
  back: {
    position: "relative",
    top: 10,
    left: 20,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#f9c2ff",
    paddingVertical: 10,
    paddingHorizontal: 50,
    fontSize: 24,
    fontWeight: "400",
    marginTop: 10,
    borderRadius: 10,
  },
  buttonLabel: {
    fontSize: 24,
    fontWeight: "400",
  },
});

export default addMedicine;
