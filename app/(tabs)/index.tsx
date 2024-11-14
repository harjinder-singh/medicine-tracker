import {
  SafeAreaView,
  Image,
  Text,
  View,
  FlatList,
  Pressable,
  ListRenderItemInfo,
} from "react-native";
import { router } from "expo-router";
import { useContext } from "react";
import { MedicineContext } from "@/context/MedicineContext";
import { Medicine } from "@/types/medicineContextType";

const renderItem = ({ item }: ListRenderItemInfo<Medicine>) => {
  return (
    <Pressable
      className="bg-primary p-5 my-4 rounded-full items-center"
      onPress={() => router.push(`/medicine/${item.id}`)}
    >
      <Text className="text-2xl font-bold">{item.title}</Text>
      <Text className="mt-1.5">
        <Text className="text-xl font-semibold">Dose: </Text>
        <Text className="text-lg font-normal">
          {item.doseQty} {Number(item.doseQty) > 1 ? "tablets" : "tablet"}{" "}
          {item.dose} {Number(item.dose) > 1 ? "times" : "time"} a day.
        </Text>
      </Text>
    </Pressable>
  );
};

export default function HomeScreen(props: any) {
  const { medicines } = useContext(MedicineContext);
  return (
    <SafeAreaView className="flex-1 items-center bg-slate-100">
      <Image
        source={require("../../assets/images/medicines.png")}
        className="w-48 h-48 mt-0"
      />
      <View className="flex-1 mt-0">
        <Text className="text-3xl font-bold">Welcome to Medicine Tracker</Text>
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
