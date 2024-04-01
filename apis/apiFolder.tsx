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

export async function folderContentsData() {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/api/users/1/folders`
    );
    if (response.ok) {
      const userProfileData = await response.json();
      return userProfileData;
    }
  } catch (error) {
    console.error(error);
  }
}

export async function folderLinksData(folderId: string) {
  const url =
    folderId === "all"
      ? `${process.env.REACT_APP_API_URL}/api/users/1/links`
      : `${process.env.REACT_APP_API_URL}/api/users/1/links?folderId=${folderId}`;
  try {
    const response = await fetch(url);
    if (response.ok) {
      const userProfileData = await response.json();
      return userProfileData;
    }
  } catch (error) {
    console.error(error);
  }
}
