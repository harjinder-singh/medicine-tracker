import { Dispatch, SetStateAction } from "react";

export interface MedicineContextType {
  medicines: Medicine[];
  updateMedicines(props?: Medicine): any;
}

export interface Medicine {
  id: string;
  title: string;
  dose: string;
  doseQty: string;
}
