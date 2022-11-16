
export default interface IAccountService {
    getBalance(userId: number): Promise<number>;
}