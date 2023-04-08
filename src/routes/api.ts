import {Router, Request, Response } from 'express';
import TextTopsController from '../Context/TextTops/infrastructure/TextTopsController';
export const router = Router();

router.get('/info', (req: Request, res: Response) => {
    res.send('Hola.. Wilson');
});

router.get('/text-tops', async (req: Request, res: Response) => {
    const controller = new TextTopsController()
    res.json(await controller.getAll());
});

