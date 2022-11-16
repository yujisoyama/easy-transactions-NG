import { NextFunction, Request, Response } from "express";
import { userRepository } from "../repositories/UserRepository";

import jwt from "jsonwebtoken";

interface JWTPayload {
    id: number;
}

const jwtPass = process.env.JWT_PASS as string;

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { authorization } = req.headers;

        if (authorization) {
            const token = authorization.split(' ')[1];
            const { id } = jwt.verify(token, jwtPass) as JWTPayload;
            const user = await userRepository.findOneBy({ id });
            if (!user) {
                return res.status(401).json("Not authorized.")
            }
            const { password: _, ...loggedUser } = user;
            req.user = loggedUser;
            next();
        }
        res.status(401).json("Not authorized.");
    } catch (error) {
        return res.status(500).json({ message: "Unexpected error." });
    }
}