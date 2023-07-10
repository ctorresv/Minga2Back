import express from 'express'
import conectedEndpoints from '../middlewares/conectedEndpoint.js'
import userRouter from './users.js'
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'MINGA API',
    subtitle: "Endpoints of Minga"
  });
});

router.use('/user', conectedEndpoints, userRouter)

export default router;
