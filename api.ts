import express from 'express';

const router = express.Router();

import emailAddresses from './routes/emailAddresses';
import users from './routes/users';
import emailBody from './routes/emailBody';
import performances from './routes/performances';

router.get('/', (req, res) => {
  res.status(200).send('Welcome to the Street performers Backend ');
});

// Build routes
router.use('/', emailAddresses);
router.use('/', users);
router.use('/', performances);
router.use('/', emailBody);

export default router;
