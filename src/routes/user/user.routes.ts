import { Request, Response, Router } from 'express';
import { UserController } from 'controllers/user/User.controller';

const userController = new UserController();

export const router: Router = Router({
  strict: true,
});

router.post('/', (req: Request, res: Response) => {
  userController.create(req, res);
});

router.get('/', (req: Request, res: Response) => {
  userController.getAll(req, res);
});

router.get('/:id', (req: Request, res: Response) => {
  userController.getOne(req, res);
});

router.patch('/', (req: Request, res: Response) => {
  userController.update(req, res);
});

router.delete('/', (req: Request, res: Response) => {
  userController.delete(req, res);
});
