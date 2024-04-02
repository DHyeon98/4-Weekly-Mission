import instance from "./axios";

export async function folderUserData() {
  try {
    const res = await instance.get(`/api/users/1`);
    const data = res.data;
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function buttonDataApi() {
  try {
    const response = await instance.get(`/api/users/1/folders`);
    const buttonData = response.data;
    return buttonData;
  } catch (error) {
    console.error(error);
  }
}

export async function folderLinksData(folderId: string) {
  const url =
    folderId === "all"
      ? `/api/users/1/links`
      : `/api/users/1/links?folderId=${folderId}`;
  try {
    const response = await instance.get(url);
    const folderData = response.data;
    return folderData;
  } catch (error) {
    console.error(error);
  }
}
