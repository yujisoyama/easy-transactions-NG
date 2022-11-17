import { Request, Response } from "express";
import IUserService from "../@types/IUserService";
import { User } from "../entities/User";

class UserController {

    async save(req: Request, res: Response, userService: IUserService) {
        try {
            const { username, password } = req.body;
            const result = await userService.save({ username, password });

            if (typeof result === 'string') {
                return res.status(201).json({ message: result });
            }
            return res.status(400).json({ 
                message: result.message,
                fieldError: result.fieldError 
            });
        } catch (error) {
            return res.status(500).json({ message: "Unexpected error." })
        }
    }

    async login(req: Request, res: Response, userService: IUserService) {
        try {
            const { username, password } = req.body;
            const result = await userService.login(username, password);

            if (typeof result === "string") {
                return res.status(401).json({ message: result })
            }

            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json({ message: "Unexpected error." })
        }
    }
}
const userController = new UserController();
export default userController;