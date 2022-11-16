import { Request, Response } from "express";
import { ITransactionService } from "../@types/ITransactionService";

class TransactionController {
    async makeTransaction(req: Request, res: Response, transactionService: ITransactionService) {
        try {
            const { cashOutUser, cashInUser, value } = req.body;
            const result = await transactionService.makeTrasaction(cashOutUser, cashInUser, value);

            if (typeof result === "string") {
                return res.status(400).json({ message: result })
            }

            return res.status(202).json({ message: "Transaction has been done successfully." })
        } catch (error) {
            return res.status(500).json({ message: "Unexpected error." })
        }
    }

    async getTransactions(req: Request, res: Response, transactionService: ITransactionService) {
        const { account, date, transactionType } = req.body;
        const result = await transactionService.getTransactions(account, date, transactionType);
    }
}
const transactionController = new TransactionController();
export default transactionController;