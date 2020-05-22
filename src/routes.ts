const routes = require('express').Router();

routes.get('/', (req:Request, res:Response) =>{
    return res.json();
});

module.exports = routes;