import { AppDataSource } from "../data-source";
import { Account } from "../entities/Account";
import { Transaction } from "../entities/Transaction";


export const databaseQueryTransaction = async (updatedCashOutAccount: Account, updatedCashInAccount: Account, newTransaction: Transaction) => {
    const queryRunner = AppDataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    
    try {
        await queryRunner.manager.save(updatedCashOutAccount);
        await queryRunner.manager.save(updatedCashInAccount);
        await queryRunner.manager.save(newTransaction);

        await queryRunner.commitTransaction();
    } catch (error) {
        await queryRunner.rollbackTransaction();
        console.log(error);
        return "Unexpected error."
    } finally {
        await queryRunner.release(); 
    }
}