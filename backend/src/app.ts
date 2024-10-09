import express from 'express';
import bodyParser from 'body-parser'
import getAiRouter from './routes/getAiRoute'
import cors from 'cors'

const app = express();
app.use(cors())
app.use(bodyParser.json());
app.use('/', getAiRouter);


app.listen(3000 , () => {
    console.log('Server running on port 3000')
});