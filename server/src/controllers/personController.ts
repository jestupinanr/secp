import {Request, Response} from 'express';
import conn from '../database';

class PersonController{

    public async list (req:Request, res:Response) {
        const person = await conn.query('SELECT * FROM person');
        res.json(person);
    }
    public async create (req: Request, res: Response): Promise<any>{
        const username = req.body.username;
        const password =req.body.password;
        const person = await conn.query("select first_name, first_lastname from person where username=? and password=?",[username,password]);
        if (person.length >0){
            return res.json(person[0]);
        }
        res.json({});
    }

    public async selectOne (req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const person = await conn.query('SELECT * FROM person WHERE auto_person=?', [id]);
        if(person.length > 0){
            return res.json(person[0]);
        }
        res.status(404).json({text: 'no fue encontrado'});
        
    }
    public async update (req:Request, res:Response): Promise<void>{
        const {id} = req.params;
        await conn.query('UPDATE PERSON set ? WHERE auto_person=?',[req.body,id]);
        res.json({text:'person update'});
    }

    public async delete (req:Request, res:Response): Promise<void>{
        const {id} = req.params;
        await conn.query('DELETE FROM PERSON WHERE auto_person=?',[id]);
        res.json({text:'person delete'});
    }
}

const personController = new PersonController();
export default personController;