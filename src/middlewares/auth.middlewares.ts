import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';
import { AuthenticatedRequest, JWTPayload } from "../types/auth.types";

const JWT_SECRET = process.env.JWT_SECRET!;

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Unauthorized - No Token Provided" });
  }

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as JWTPayload;
    
    // Type assertion to add user property
    (req as AuthenticatedRequest).user = { userId: decoded.userId };
    
    next();
  } catch (error) {
    return res.status(401).json({ error: "Unauthorized - Invalid Token" });
  }
};