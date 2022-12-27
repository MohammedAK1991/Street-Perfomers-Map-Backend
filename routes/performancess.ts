import express from 'express';
const router = express.Router();

import firestore from '../data/firebase';

router.get(
  '/allPerformances',
  async (req: express.Request, res: express.Response) => {
    try {
      const performanceSnapshot = await firestore
        .collection('performances')
        .get();

      //   const performances = performanceSnapshot.docs.map((doc) => doc.data());
      // const performances = performanceSnapshot.docs.data();
      const performances = performanceSnapshot.docs.map((doc) => doc.data());

      res.status(200).send(performances);
    } catch (err) {
      console.error(err);
      res.status(500).send(err);
    }
  },
);

router.post(
  '/allPerformances',
  async (req: express.Request, res: express.Response) => {
    try {
      const { text } = req.body;

      if (!text) {
        return;
      }

      await firestore.collection('performance').doc('body').set({
        body: text,
      });

      res.status(200).send('New performance added to firestore');
    } catch (err) {
      console.error(err);
      res.status(500).send(err);
    }
  },
);

export default router;
