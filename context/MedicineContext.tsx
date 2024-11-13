import { MedicineContextType, Medicine } from "@/types/medicineContextType";
import { createContext, useState } from "react";
import { medicines as meds } from "@/constants/Utils";

export const MedicineContext = createContext<MedicineContextType>({
  medicines: [],
  updateMedicines() {},
} as MedicineContextType);

export const MedicineProvider = (props: any) => {
  const [medicines, setMedicines] = useState<Medicine[]>(meds);

  const updateMedicines = (medicine: Medicine) => {
    const newMedicines = [...medicines, medicine];
    setMedicines(newMedicines);
  };
  return (
    <MedicineContext.Provider value={{ medicines, updateMedicines }}>
      {props.children}
    </MedicineContext.Provider>
  );
};
