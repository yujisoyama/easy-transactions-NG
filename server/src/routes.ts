import { Request, Response, Router } from "express";
import accountController from "./controllers/AccountController";
import userController from "./controllers/UserController";
import authMiddleware from "./middleware/authMiddleware";
import accountService from "./services/AccountService";
import userService from "./services/UserService";


const routes = Router();

routes.get('/', (req: Request, res: Response) => { res.send('NG Desafio - Server-side') });
routes.post('/user', (req: Request, res: Response) => { userController.save(req, res, userService) });
routes.post('/user/login', (req: Request, res: Response) => { userController.login(req, res, userService) });

routes.use(authMiddleware);

routes.get('/user/account', (req: Request, res: Response) => { accountController.getAccount(req, res, accountService) })

export default routes;
