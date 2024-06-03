export interface VehicleType {
  IsPrimary: boolean;
  Name: string;
}

export interface CarManufacturer {
  Country: string;
  Mfr_CommonName: string;
  Mfr_ID: number;
  Mfr_Name: string;
  VehicleTypes: VehicleType[];
}

export interface APIRes {
  Count: number;
  Message: string;
  SearchCriteria: string | null;
  Results: CarManufacturer[];
}
