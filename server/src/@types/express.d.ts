import { Account } from "../entities/Account";
import { User } from "../entities/User";

declare global {
    namespace Express {
        export interface Request {
            user: Partial<User | Account>;
        }
    }
}