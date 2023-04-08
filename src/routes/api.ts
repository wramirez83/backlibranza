import {Router, Request, Response } from 'express';
import TextTopsController from '../Context/TextTops/infrastructure/TextTopsController';
import BannerController from '../Context/Banners/infrastructure/BannerController';
export const router = Router();

router.get('/info', (req: Request, res: Response) => {
    res.send('Hola.. Wilson');
});

router.get('/text-tops', async (req: Request, res: Response) => {
    const controller = new TextTopsController()
    res.json(await controller.getAll());
});

router.get('/banners/:origin', async (req: Request, res: Response) => {
    
    const controller = new BannerController();
    res.json(await controller.getAll(req.params.origin));

})

