import { Request, Response, Router } from "express";
import userController from "./controllers/UserController";
import userService from "./services/UserService";


const routes = Router();

routes.get('/', (req: Request, res: Response) => { res.send('NG Desafio - Server-side') });

routes.post('/user', (req: Request, res: Response) => { userController.save(req, res, userService)});

export default routes;
