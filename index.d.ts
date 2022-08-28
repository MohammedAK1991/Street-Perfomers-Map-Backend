import { Token } from './auth/Token';

declare global {
  namespace Express {
    interface Request {
      token: Token;
    }
  }
}
