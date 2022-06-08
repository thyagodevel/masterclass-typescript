import { Request, Response } from 'express';
import EmailService from '../services/EmailService';

const users = [
  { name: 'Thyago', email: 'thyago@teste.com' },
];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService();

    emailService.sendMail({
      to: { 
        name: 'Thyago Cabral', 
        email: 'thyago@teste.com'
      },
      message: { 
        subject: 'Bem-vindo ao sistema', 
        body: 'Seja bem-vindo'
      }
    });

    return res.send();
  }
};