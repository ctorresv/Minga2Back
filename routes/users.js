import express from 'express'
import signin from '../controllers/users/signin.js';
import accountExistsSignIn from '../middlewares/accountExistsSignIn.js';
import passwordIsOk from '../middlewares/passwordIsOk.js'
import accountHasBeenVerified from '../middlewares/accountHasBeenVerified.js';
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signin',accountExistsSignIn,passwordIsOk,accountHasBeenVerified,signin)

export default router;
