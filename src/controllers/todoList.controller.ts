import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { MSCTodo } from '../interfaces';

export default class TodoController {
  constructor(private service: MSCTodo) { }

  async get(_req: Request, res: Response, next: NextFunction) {
    try {
      console.log('ola');
      
      console.log(this.service);
      
      const list = await this.service.get();
      return res.status(StatusCodes.OK).json(list);
    } catch (error) {
      next(error);
    }
  }

  async put(req: Request, res: Response, next: NextFunction) {
    try {
      this.service.put(req.body);
      return res.status(StatusCodes.NO_CONTENT).end();
    } catch (error) {
      next(error);
    }
  }

  async post(req: Request, res: Response, next: NextFunction) {
    try {
      this.service.post(req.body);
      return res.status(StatusCodes.CREATED).end();
    } catch (error) {
      next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.body;
      this.service.delete(id);
      return res.status(StatusCodes.NO_CONTENT).end();
    } catch (error) {
      next(error);
    }
  }
}