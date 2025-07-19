// src/types/auth.types.ts
import { Request } from "express";

export interface AuthenticatedRequest extends Request {
  user?: {
    userId: string;
  };
}

// You can also add other auth-related types here
export interface JWTPayload {
  userId: string;
}

export interface User {
  userId: string;
  // Add other user properties as needed
}