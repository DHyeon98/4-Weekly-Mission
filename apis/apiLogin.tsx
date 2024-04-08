import instance from "./axios";
type LoginType = {
  email: string;
  password: string;
};
export async function LoginData(data: LoginType) {
  try {
    const response = await instance.post(`/api/sign-in`, data);
    return response.data;
  } catch (error) {
    throw new Error("로그인에 실패했습니다. 다시 시도해주세요.");
  }
}
