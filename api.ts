import express from 'express';

const router = express.Router();

import emailAddresses from './routes/emailAddresses';
import users from './routes/users';
import emailBody from './routes/emailBody';

router.get('/', (req, res) => {
  res.status(200).send('Welcome to the Street perfomers Backend ');
});

// Build routes
router.use('/', emailAddresses);
router.use('/', users);
router.use('/', emailBody);

export default router;
