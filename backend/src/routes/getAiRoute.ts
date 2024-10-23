
import { Router } from 'express'
import {main} from '../controller.ts/groqAiCtrl.js'

const router = Router();


router.post('/getResult', main );

export default router;