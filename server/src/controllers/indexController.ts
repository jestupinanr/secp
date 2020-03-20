import {Request, Response} from 'express';

class IndexController{

    public index (re:Request, res:Response) {
        res.json({text: 'API INDEX'})
    }
    
}

export const indexController = new IndexController();