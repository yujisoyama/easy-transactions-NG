import { NextFunction, Request, Response } from "express";
import { userRepository } from "../repositories/UserRepository";

import jwt from "jsonwebtoken";

interface JWTPayload {
    id: number;
}

const jwtPass = process.env.JWT_PASS as string;

const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { authorization } = req.headers;

        if (!authorization) {
            return res.status(401).json("Not authorized.");
        }

        const token = authorization.split(' ')[1];
        const { id } = jwt.verify(token, jwtPass) as JWTPayload;
        const loggedUser = await userRepository.findOneBy({ id });
        if (!loggedUser) {
            return res.status(401).json("Not authorized.")
        }
        const { id: userId, username, account } = loggedUser;
        req.user = {
            id: userId,
            username,
            account
        };
        next();
    } catch (error) {
        return res.status(401).json({ message: "Session expired, please log in again." });
    }
}

export default authMiddleware;