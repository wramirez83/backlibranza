import {Router, Request, Response } from 'express';
import AuthUserController from '../Context/Admin/Auth/AuthUserController';
import TextTopsController from '../Context/Admin/TextTop/TextTopsController';
export const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.status(200).json('<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>');
});

router.post('/',  (req: Request, res: Response) => {
    const user = new AuthUserController();
    user.login({
        email: req.body.email,
        password: req.body.password,
    })
    .then(result => {
        res.status(201).send(result)
    });
});

router.all('/text-tops/:id?', (req: Request, res: Response) => {
    const text = new TextTopsController();
    if(req.method == 'GET')
        res.json('-----------')

    if(req.method == 'POST'){
        const { icons, word_one } = req.body
        if(icons && word_one){
            res.json(text.save({ icons: icons, word_one: word_one}))
        }else{
            res.json('Los Campos Son Obligatorios')
        }
    }
    
    if(req.method == 'DELETE'){
        const { id } = req.params
        
        if(id){
            
            res.json(text.delete(Number(id)))
        }else{
             res.json('Los Campos Son Obligatorios')
        }
    }
})



