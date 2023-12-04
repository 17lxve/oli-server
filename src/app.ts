import express from 'express'
import cors from 'cors'
import { router } from './router';

function init(){
    const app = express()
    app.use(cors({ origin : true }));
    app.use(express.json());
    app.use(express.text({ type : 'text/html' }));
    
    app.get('/healthcheck', (req, res) => {
        res.status(200).send({ status : 'ok'});
    })

    app.use(router)
    return app
}

export const server = init()
