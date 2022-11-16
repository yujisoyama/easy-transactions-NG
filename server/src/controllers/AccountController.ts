import { Request, Response } from "express";
import IAccountService from "../@types/IAccountService";


class AccountController {
    async getAccount(req: Request, res: Response, accountService: IAccountService) {
        return res.json(req.user);
    }
}
const accountController = new AccountController();
export default accountController;