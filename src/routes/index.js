import express from 'express';
import { userPage  } from '../controllers';
const indexRouter = express.Router();

indexRouter.get('/users', userPage);

export default indexRouter;