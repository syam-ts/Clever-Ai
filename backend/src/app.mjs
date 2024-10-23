import express from 'express';
import bodyParser from 'body-parser'
import getAiRouter from './routes/getAiRoute.ts'
import cors from 'cors'

const app = express();
app.use(cors())
app.use(bodyParser.json());
app.use('/', getAiRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT , () => {
    console.log('Server running on port 3000')
});