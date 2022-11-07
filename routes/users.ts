import express from 'express';
import { authenticateFirebaseToken } from '../auth/auth';
const router = express.Router();
import UserFirestore from '../utils/firestore'


router.post(
  '/users',
  authenticateFirebaseToken,
  async (req: express.Request, res: express.Response) => {
    try {
      const { uid, email, name } = req.body;

      const doc = await UserFirestore.getDocument(uid);

      if (doc.exists) {
        res.status(409).send(new Error('User document already exists.'));
        return;
      }

      await UserFirestore.addDocument(uid, { email, name });

      res.status(200).send('OK');
    } catch (err) {
      console.error(err);
      res.status(500).send(err);
    }
  },
);

export default router;
