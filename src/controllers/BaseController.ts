import { Request, Response } from 'express';

export abstract class BaseController {
  public abstract create(req: Request, res: Response): void;
  public abstract getAll(req: Request, res: Response): void;
  public abstract getOne(req: Request, res: Response): void;
  public abstract update(req: Request, res: Response): void;
  public abstract delete(req: Request, res: Response): void;
}
