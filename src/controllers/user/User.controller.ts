import { Request, Response } from 'express';
import { BaseController } from 'controllers/BaseController';

export class UserController extends BaseController {
  public create(_req: Request, res: Response): void {
    try {
      res.json({ message: 'POST /user request received' });
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }

  public getAll(_req: Request, res: Response): void {
    try {
      res.json({ message: 'GET /user request received' });
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }

  public getOne(_req: Request, res: Response): void {
    try {
      res.json({ message: 'GET /user/:id request received' });
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }

  public update(_req: Request, res: Response): void {
    try {
      res.json({ message: 'PATCH /user request received' });
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }

  public delete(_req: Request, res: Response): void {
    try {
      res.json({ message: 'DELETE /user request received' });
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
}
