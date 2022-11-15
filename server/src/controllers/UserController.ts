import { Request, Response } from "express";
import IUserService from "../@types/IUserService";


class UserController {

    async save(req: Request, res: Response, userService: IUserService) {
        try {
            const { username, password } = req.body;
            const result = await userService.save({ username, password });

            if (typeof result === "string") {
                return res.status(400).json({ message: result })
            }
            
            const { username: name, account } = result;
            const { balance } = account;
            const userCreated = { name, balance };
            return res.status(201).json(userCreated);
        } catch (error) {
            return res.status(500).json({ message: error })
        }
    }
}
const userController = new UserController();
export default userController;