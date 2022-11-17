import { Request, Response, Router } from "express";
import accountController from "./controllers/AccountController";
import transactionController from "./controllers/TransactionController";
import userController from "./controllers/UserController";
import authMiddleware from "./middleware/authMiddleware";
import transactionService from "./services/TransactionService";
import userService from "./services/UserService";


const routes = Router();

routes.get('/', (req: Request, res: Response) => { res.send('NG Desafio - Server-side') });
routes.post('/user', (req: Request, res: Response) => { userController.save(req, res, userService) });
routes.post('/user/login', (req: Request, res: Response) => { userController.login(req, res, userService) });

routes.use(authMiddleware);

routes.get('/user/account', (req: Request, res: Response) => { accountController.getAccount(req, res) })
routes.post('/transaction', (req: Request, res: Response) => { transactionController.makeTransaction(req, res, transactionService) })
routes.get('/transaction/:account', (req: Request, res: Response) => { transactionController.haveTransactions(req, res, transactionService) })
routes.post('/transaction/history', (req: Request, res: Response) => { transactionController.getTransactions(req, res, transactionService) })

export default routes;
