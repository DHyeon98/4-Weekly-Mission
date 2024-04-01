import { atom, selector } from "recoil";
import { folderContentsData, folderUserData } from "@/apis/apiFolder";
import { SharedTypes } from "@/types/shared/type";

export const folderUser = selector({
  key: "folderUser",
  get: folderUserData,
});

export const folderContents = selector({
  key: "folderContents",
  get: folderContentsData,
});

export const clickFolder = atom({
  key: "clickFolder",
  default: "전체",
});
export const clickFolderId = atom({
  key: "clickFolderId",
  default: "all",
});
export const folderLinkContents = atom({
  key: "folderLinkContents",
  default: { data: [] },
});
export const contentsLink = atom({
  key: "contentsLink",
  default: null,
});

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
export const searchContents = atom({
  key: "searchContents",
  default: [],
});
