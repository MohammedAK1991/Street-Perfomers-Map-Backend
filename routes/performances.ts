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
      const { uid } = req.params;
      const {
        performanceTitle,
        performanceTime,
        performanceLatitude,
        performanceLongitude,
      } = req.body;

      const doc = await firestore.collection('users').doc(uid).get();

      if (!doc.exists) {
        res.status(404).send(new Error('User document does not exist'));
        return;
      }

      const blaDocs = await firestore
        .collection('performances')
        .where('performance', '==', performanceTitle)
        .get();

      if (blaDocs.docs.length > 0) {
        console.log('Performance Namajjj already exist');
        res.status(409).send(new Error('Performance Name already exist'));
        return;
      }
      await firestore
        .collection('users')
        .doc(uid)
        .collection('performances')
        .add({
          performance: performanceTitle,
          performanceTime: performanceTime,
          coordinates: {
            latitude: performanceLatitude,
            longitude: performanceLongitude,
          } as any,
        });

      await firestore.collection('performances').add({
        creatorID: uid,
        performance: performanceTitle,
        performanceTime: performanceTime,
        coordinates: {
          latitude: performanceLatitude,
          longitude: performanceLongitude,
        } as any,
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

      const { id, performance } = req.body;

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

      await firestore
        .collection('performances')
        .where('creatorID', '==', uid)
        .where('performance', '==', performance)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            doc.ref.delete();
          });
          // querySnapshot.docs.delete();
          //.collection('performances')
          //.doc(id)

          // console.log(
          //   querySnapshot.docs.map((docSnapshot) => docSnapshot.id),
          //   'is the query snapshot where the id matches',
          // );
        });

      res.status(200).send('OK');
    } catch (err) {
      res.status(500).send(err);
    }
  },
);
router.patch(
  '/performances/:uid',
  authenticateFirebaseToken,
  async (req: Request, res: Response) => {
    try {
      const { uid } = req.params;

      const { id, editPerformanceTitle, editPerformanceTime } = req.body;

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
        .update({
          performance: editPerformanceTitle,
          performanceTime: editPerformanceTime,
        });

      await firestore
        .collection('performances')
        .where('creatorID', '==', uid)
        .where('performance', '==', performance)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            console.log(doc.data(), 'is the doc data');
            // doc.ref.delete();
          });
        });

      res.status(200).send('OK');
    } catch (err) {
      res.status(500).send(err);
    }
  },
);

export default router;
