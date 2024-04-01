import instance from "./axios";

export async function getUser() {
  try {
    const res = await instance.get(`/api/sample/folder`);
    const userData = res.data.folder;
    return userData;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchUserData() {
  try {
    const res = await instance.get(`/api/sample/user`);
    const userData = res.data;
    return userData;
  } catch (error) {
    console.error(error);
  }
}
