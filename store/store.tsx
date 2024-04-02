import { atom } from "recoil";
import { SharedTypes } from "@/types/shared/type";
import { AllFolder } from "@/types/folder/type";

// 검색 기능
export const searchData = atom<any>({
  key: "searchData",
  default: [],
});
