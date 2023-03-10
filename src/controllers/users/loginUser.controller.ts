import { Request, Response } from 'express';
import { IUserLogin } from '../../interfaces/users';
import { loginUserService } from '../../services/users/loginUser.service';

export const loginUserController = async (req: Request, res: Response) => {
  const { email, password }: IUserLogin = req.body;
  const token = await loginUserService({ email, password });

  return res.status(200).json(token);
};
