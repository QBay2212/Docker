import express from "express";
import morgan from "morgan";
import contribuyenteroutes from './routes/contribuyente.routes'
import upload from './routes/upload.routes'
import pkg from '../package.json'


const app = express();
var cors = require('cors');
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.get('/',(req,res)=>{
    res.send('Bienvenido a Node Js....');
});

app.get('/', (req, res)=>{
    res.send('Bienvenido a Node Js....');
})
app.use(express.static('./uploads'))
app.use('/upload', upload);
app.use('/api/auth/contribuyente',contribuyenteroutes);
export default app;