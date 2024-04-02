import { atom } from "recoil";
import { SharedTypes } from "@/types/shared/type";

// 검색 기능
export const searchData = atom<SharedTypes>({
  key: "searchData",
  default: {
    count: 0,
    id: 0,
    links: [],
    name: "",
    owner: {
      id: 0,
      name: "",
      profileImageSource: "",
    },
  },
});

export const clickFolder = atom({
  key: "clickFolder",
  default: "전체",
});
