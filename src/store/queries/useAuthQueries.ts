import { useMutation } from "@tanstack/react-query";
import { loginUser, registerUser } from "@/lib/api-client";
import { LoginFormData, RegisterFormData } from "@/lib/schemas";

export function useLoginMutation() {
  return useMutation({
    mutationFn: async (credentials: LoginFormData) => {
      const res = await loginUser(credentials);
      if (!res.success) throw new Error(res.message);
      return res.data;
    },
  });
}

export function useRegisterMutation() {
  return useMutation({
    mutationFn: async (userData: RegisterFormData) => {
      const res = await registerUser({
        fullName: userData.fullName,
        email: userData.email,
        password: userData.password,
      });
      if (!res.success) throw new Error(res.message);
      return res.data;
    },
  });
}