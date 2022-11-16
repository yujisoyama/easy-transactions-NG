import IAccountService from "../@types/IAccountService";
import { accountRepository } from "../repositories/AccountRepository";

class AccountService implements IAccountService {
    async getBalance(userId: number): Promise<number> {
        const account = await accountRepository.findOneBy({});
        return 0;
    }
}
const accountService = new AccountService();
export default accountService;