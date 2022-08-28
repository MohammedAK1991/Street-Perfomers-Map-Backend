import express, { Request, Response } from 'express';
const router = express.Router();
import { authenticateFirebaseToken } from '../auth/auth';

import firestore from '../data/firebase';

router.get(
  '/emails/:uid',
  authenticateFirebaseToken,
  async (req: express.Request, res: express.Response) => {
    try {
      if (!req.params.uid) {
        res.status(400).send(Error('Bad Request'));
        return;
      }
      const doc = await firestore.collection('users').doc(req.params.uid).get();

      if (!doc.exists) {
        res.status(404).send(Error('User Not Found'));
        return;
      }

      const emailsSubCollectionSnapshot = await firestore
        .collection('users')
        .doc(req.params.uid)
        .collection('emails')
        .get();
      const emails = [];
      for await (const email of emailsSubCollectionSnapshot.docs) {
        const emailData = email.data();
        emails.push({ id: email.id, email: emailData.email });
      }

      res.status(200).send(emails);
    } catch (err) {
      console.error(err);
      res.status(500).send(err);
    }
  },
);

router.post(
  '/emails/:uid',
  authenticateFirebaseToken,
  async (req: express.Request, res: express.Response) => {
    try {
      const { uid } = req.params;
      const { emailAddress } = req.body;

      const doc = await firestore.collection('users').doc(uid).get();

      if (!doc.exists) {
        res.status(404).send(new Error('User document does not exist'));
        return;
      }

      await firestore
        .collection('users')
        .doc(uid)
        .collection('emails')
        .doc(emailAddress)
        .set({
          email: emailAddress,
        });

      res.status(200).send('email address added to user document');
    } catch (err) {
      console.error(err);
      res.status(500).send(err);
    }
  },
);

router.delete(
  '/emails/:uid',
  authenticateFirebaseToken,
  async (req: Request, res: Response) => {
    try {
      const { uid } = req.params;

      const { emailAddress } = req.body;

      const doc = await firestore.collection('users').doc(uid).get();

      if (!doc.exists) {
        res.status(404).send(Error('User Not Found'));
        return;
      }

      await firestore
        .collection('users')
        .doc(req.params.uid)
        .collection('emails')
        .doc(emailAddress)
        .delete();

      res.status(200).send('OK');
    } catch (err) {
      res.status(500).send(err);
    }
  },
);

export default router;
