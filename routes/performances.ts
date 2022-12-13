import express, { Request, Response } from 'express';
import { authenticateFirebaseToken } from '../auth/auth';
import firestore from '../data/firebase';

const router = express.Router();

router.get(
  '/performances/:uid',
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

      const performancesSubCollectionSnapshot = await firestore
        .collection('users')
        .doc(req.params.uid)
        .collection('performances')
        .get();

      const performances = [];
      for await (const performance of performancesSubCollectionSnapshot.docs) {
        const performanceData = performance.data();
        performances.push({
          id: performance.id,
          email: performanceData.email,
          performance: performanceData.performance,
          performanceTime: performanceData.performanceTime,
        });
      }

      res.status(200).send(performances);
    } catch (err) {
      console.error(err);
      res.status(500).send(err);
    }
  },
);

router.post(
  '/performances/:uid',
  authenticateFirebaseToken,
  async (req: express.Request, res: express.Response) => {
    try {
      console.log('yo');
      const { uid } = req.params;
      const { performanceTitle, performanceTime } = req.body;

      const doc = await firestore.collection('users').doc(uid).get();

      if (!doc.exists) {
        res.status(404).send(new Error('User document does not exist'));
        return;
      }

      await firestore
        .collection('users')
        .doc(uid)
        .collection('performances')
        .add({
          performance: performanceTitle,
          performanceTime: performanceTime,
        });

      res.status(200).send('Performance added to user document');
    } catch (err) {
      console.error(err);
      res.status(500).send(err);
    }
  },
);

router.delete(
  '/performances/:uid',
  authenticateFirebaseToken,
  async (req: Request, res: Response) => {
    try {
      const { uid } = req.params;

      const { id } = req.body;

      const doc = await firestore.collection('users').doc(uid).get();

      if (!doc.exists) {
        res.status(404).send(Error('User Not Found'));
        return;
      }

      await firestore
        .collection('users')
        .doc(req.params.uid)
        .collection('performances')
        .doc(id)
        .delete();

      res.status(200).send('OK');
    } catch (err) {
      res.status(500).send(err);
    }
  },
);

export default router;
