import express from 'express';
import bodyParser from 'body-parser'
import getAiRouter from './routes/getAiRoute'

const app = express();
app.use(bodyParser.json());
app.use('/', getAiRouter);


app.listen(3000 , () => {
    console.log('Server running on port 3000')
});