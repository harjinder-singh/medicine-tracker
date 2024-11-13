import {
  SafeAreaView,
  StyleSheet,
  Image,
  Text,
  View,
  FlatList,
  Pressable,
  ListRenderItemInfo,
} from "react-native";
import { Href, router } from "expo-router";
import { useContext } from "react";
import { MedicineContext } from "@/context/MedicineContext";
import { Medicine } from "@/types/medicineContextType";

const renderItem = ({ item }: ListRenderItemInfo<Medicine>) => {
  return (
    <Pressable
      style={styles.item}
      onPress={() => router.push(`/medicine/${item.id}`)}
    >
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.dose}>
        Dose: {item.doseQty} {Number(item.doseQty) > 1 ? "tablets" : "tablet"}{" "}
        {item.dose} {Number(item.dose) > 1 ? "times" : "time"} a day.
      </Text>
    </Pressable>
  );
};

export default function HomeScreen(props: any) {
  const { medicines } = useContext(MedicineContext);
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../../assets/images/medicines.png")}
        style={styles.image}
      />
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to Medicine Tracker</Text>
        <FlatList
          data={medicines}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          scrollEnabled={true}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  image: {
    width: 300,
    height: 300,
    marginTop: 0,
    resizeMode: "contain",
  },
  content: {
    flex: 1,
    marginTop: 0,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  dose: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: "400",
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
});
