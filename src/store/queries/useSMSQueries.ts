import { useMutation } from "@tanstack/react-query";
import { SMSCheckResult } from "@/types";

export function useSMSCheckMutation() {
  return useMutation({
    mutationFn: async (message: string): Promise<SMSCheckResult> => {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const lowerMsg = message.toLowerCase();
      const isFraud = lowerMsg.includes("hadiah") || lowerMsg.includes("menang") || lowerMsg.includes("transfer") || lowerMsg.includes("pinjol");
      const isWaspada = lowerMsg.includes("kode") || lowerMsg.includes("otp") || lowerMsg.includes("verifikasi");

      let status: "Normal" | "Waspada" | "Penipuan" = "Normal";
      if (isFraud) status = "Penipuan";
      else if (isWaspada) status = "Waspada";

      return {
        id: Date.now().toString(),
        message,
        status,
        confidence: isFraud ? 94.5 : isWaspada ? 82.0 : 12.0,
        keywords: isFraud ? ["Hadiah", "Transfer"] : isWaspada ? ["OTP", "Kode"] : [],
        createdAt: new Date().toISOString(),
      };
    },
  });
}