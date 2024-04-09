import instance from "./axios";
export interface LoginType {
  email: string;
  password: string;
}
export interface SignUpType {
  email: string;
  password: string;
  pwfirm: string;
}
export async function LoginData(data: LoginType) {
  try {
    const response = await instance.post(`/api/sign-in`, data);
    return response.data;
  } catch (error) {
    throw new Error("로그인에 실패했습니다. 다시 시도해주세요.");
  }
}
export async function EmailCheckApi(data: string) {
  try {
    const response = await instance.post(`/api/check-email`, {
      email: data,
    });
    return response.data;
  } catch (error) {
    throw new Error("로그인에 실패했습니다. 다시 시도해주세요.");
  }
}
export async function signupData(data: LoginType) {
  try {
    const response = await instance.post(`/api/sign-up`, data);
    return response.data;
  } catch (error) {
    throw new Error("로그인에 실패했습니다. 다시 시도해주세요.");
  }
}
