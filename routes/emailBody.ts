import express from 'express';
const router = express.Router();

import firestore from '../data/firebase';

router.get('/body', async (req: express.Request, res: express.Response) => {
  try {
    const bodySnapshot = await firestore.collection('body').doc('body').get();
    const body = bodySnapshot.data();

    res.status(200).send(body);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
});

router.post('/body', async (req: express.Request, res: express.Response) => {
  try {
    const { text } = req.body;

    if (!text) {
      return;
    }

    await firestore.collection('body').doc('body').set({
      body: text,
    });

    res.status(200).send('email address added to user document');
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
});

export default router;
