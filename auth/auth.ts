import express from 'express';
import { app } from '../data/firebase';

export function authenticateFirebaseToken(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) {
  const authHeader = req.headers.authorization;

  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) {
    res.sendStatus(401);
    return;
  }

  app
    .auth()
    .verifyIdToken(token)
    .then(() => {
      next();
    })
    .catch((error) => {
      console.log('error verifiying token in firebase auth', error);
    });
}
