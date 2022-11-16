import { Request, Response } from "express";
class AccountController {
    async getAccount(req: Request, res: Response) {
        try {
            return res.status(200).json(req.user);
        } catch (error) {
            return res.status(500).json({message: "Unexpected Error."});
        }
    }
}
const accountController = new AccountController();
export default accountController;