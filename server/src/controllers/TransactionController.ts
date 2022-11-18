import { Request, Response } from "express";
import { ITransactionService } from "../@types/ITransactionService";
import { Account } from "../entities/Account";


class TransactionController {
    async makeTransaction(req: Request, res: Response, transactionService: ITransactionService) {
        try {
            const { cashOutUser, cashInUser, value } = req.body;
            const result = await transactionService.makeTrasaction(cashOutUser, cashInUser, value);

            if (typeof result === "string") {
                return res.status(400).json({ message: result })
            }
            return res.status(202).json({
                message: "Transaction has been done successfully.",
                newBalance: result
            })
        } catch (error) {
            return res.status(500).json({ message: "Unexpected error." })
        }
    }

    async haveTransaction(req: Request, res: Response, transactionService: ITransactionService) {
        try {
            const id = Number(req.params.accountId);
            const account: Partial<Account> = { id };
            const result = await transactionService.haveTransaction(account);

            if (result.length) {
                return res.status(200).json({ haveTransaction: true });
            }
            return res.status(200).json({ haveTransaction: false });
        } catch (error) {
            return res.status(500).json({ message: error });
        }
    }

    async getTransactions(req: Request, res: Response, transactionService: ITransactionService) {
        try {
            const { account, date, transactionType } = req.body;
            const result = await transactionService.getTransactions(account, date, transactionType);

            if (!result.length) {
                return res.status(200).json({ message: "You don't have transactions with this filter." });
            }

            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json({ message: error })
        }
    }
}
const transactionController = new TransactionController();
export default transactionController;