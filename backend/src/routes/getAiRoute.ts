
import { Router } from 'express'
import {main} from '../controller/groqAiCtrl'

const router = Router();


router.post('/getResult', main );

export default router;