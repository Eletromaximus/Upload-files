import morgan from 'morgan';

import express from 'express';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));
app.get('/', (req, res) =>{
    return res.send( 'Hello World 1');
})
app.use(require("./routes"));

app.listen(3000);