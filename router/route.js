import { Router } from 'express';
const router = Router();

// import controllers
import * as controller from '../controllers/controller.js'

// Question Routes API
router.route('/questions')
        .get(controller.getQuestion)
        .post(controller.insertQuestion)
        .delete(controller.dropQuestion)

// Result Routes API
router.route('/results')
        .get(controller.getResult)
        .post(controller.storeResult)
        .delete(controller.dropResult)

router.route('/users')
        .get(controller.getUser)
        .post(controller.storeUser)
        .delete(controller.dropUser)


export default router;