import express from 'express';
import { app } from '../data/firebase';
import { Token } from './Token';

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
    .then((decoded) => {
      req.token = new Token(
        decoded.sub,
        decoded.email,
        decoded.iat,
        'viewer',
        decoded.exp,
      );
      next();
    });
}
