export interface User {
  id: string;
  name: string;
  email: string;
  role: "user" | "admin";
  avatarUrl?: string;
  about?: string;
}

export interface SMSCheckResult {
  id: string;
  message: string;
  status: "Normal" | "Waspada" | "Penipuan"; 
  confidence: number;                     
  keywords: string[];                      
  createdAt: string;
}

export interface FeedbackItem {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  createdAt: string;
}