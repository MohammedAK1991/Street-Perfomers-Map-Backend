import admin from 'firebase-admin';

const serviceAccount = {
  type: 'service_account',
  project_id: 'callypso-c1252',
  private_key_id: '3cfde9cf40d3f37fae4a03d3d7f43c3a0d12e4d7',
  private_key:
    '-----BEGIN PRIVATE KEY-----\nMIIEugIBADANBgkqhkiG9w0BAQEFAASCBKQwggSgAgEAAoIBAQCGHTxqFg7k+xyN\no1+Xgc2W7JoLWUu6ZJm5XevPHgpWRZ6O2IMByRmPVWDta3bVGve00SCRR0DAsx7J\nNWxpk2XZn8kOTXMIdnlSqicAgBZOjPTHkEKug3nfxgoFAseWsx0u02Tv+DSiny3d\noLT9NzSkjPjv3ojg8S6MGvXu4KW38KO+XFEE0MhJm23wz9C22abS5Y9e3jwfb2Yy\nBft9UISQBVTUcl2JJVP4O5WMVf2CMqP0Kdol3f5r0teU3bp5dRZlag5iYmF1Nuqr\npxYI0Gee6DY6vajaSbe5rSgFHmR0iarN/SpvYI/Qo9QsJ5yocluDPeZkf/dmeEGE\nUk0SxSfVAgMBAAECgf8+vip87pCi5PoH0gkAR20A8vRRnyg9eluj3SIXEHbFkGYd\nkC1TsQ4qkXolEEw7EVo4AeK6nU5QC+L9YTy00msxsbnvIbMeXAqZmVZQdq0sI6OT\n/b7wO03z0ZkRnO5+3xnQkp3zHd7XaQdY9RIdyxPeTjefmlH3t2ZcNqctRQ4gXPGI\nWdTHDR6FC9gZojW8OP23SfdxbuuRgq9lYnxgJHIhWKIIYlaaKJZpJyRMDpC5a+Yi\nrlJPlfC90AIxHrOpVFmVetWwIp0dHMYzwikfGZPY7TTIz6ebsGyUu3oX++DNC9RM\nO73/b0VjRnPQr2cqS+zvxA0JMHIZhHu3aBDE4FECgYEAuljXyPozwFyqC8jNaN7Y\nw0yy9POHnwV/8DnXmWsCX9kFYCRVDcIU2q6E9hfyz2D7XBxc9DMHnuCE2B/SiFkD\nUdqub69fE96nazw2U+86nkBf/AVGvIajLeX+enuYoaKVaML6QRx0y7TN5Or1RgF2\ntxYv10+8hU6yLVM70Sj43K0CgYEAuD5Xpnm6rYAlr8pdFcJqo2NmOapAiJPrpDJQ\naG0o1Ysyw6RSYh41neeWYIFtzjJYE7WAQRgoISSFUr0WZUCnUrpDmH9+D/6+MSwK\nKrzCiJLSEe3kkF+ZEwvZTcsVrJ9i2BJuDoVYD5Xb1WlfVFX5GNkou6TjDHF8BARL\nLReX9MkCgYBc/AQA10iHjjWT18kXsUs8eMM7k2FzKk1i05oPheQTa7lQ9hAy40uA\nq2DRY7XXYS9MESMY/3WoA6SGK6rkOnZ7m8E7Hak1wv6LdeouC8uWN80tdnyLiitW\ntdM7zvykevpO4iv53XcyRrAOsGdfXU+doEaTC8ioRFKIZ2YLwoQbqQKBgFhLUBfw\nuDyTb/wZn5hg7lfUt9WkuH57XO74Sb5xqaMErVRCuFRbI9jDdjZTcHrjd4AieA85\n82lGpjnrcgMeA9HKf8BiQNiLfTv1Xf3zLcrjiZacCfACUEpnYEE+tOlgDK99zY5Z\n6sS1TX+tmsjA1rpIv5OFRmXdMNB/+kLmzqS5AoGADZKYMjJK/j3hX19mIeA8kg4x\nt22uNHvPgTgnRX3nhctA2qK/vWi3Ia26ZpAaGlB/mgWyJTjqu9dGLkiajig4gFH3\nm40yjU6tnedPruHbTdi3xwalp7uZ4IVTWTms8bGVMLbDYYRftToQ38xU71avsxSX\nW+qNW2d5yiW4STT14T0=\n-----END PRIVATE KEY-----\n',
  client_email:
    'firebase-adminsdk-yzg0i@callypso-c1252.iam.gserviceaccount.com',
  client_id: '103896792993219784403',
  auth_uri: 'https://accounts.google.com/o/oauth2/auth',
  token_uri: 'https://oauth2.googleapis.com/token',
  auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
  client_x509_cert_url:
    'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-yzg0i%40callypso-c1252.iam.gserviceaccount.com',
};

export const app = admin.initializeApp({
  // @ts-ignore
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://callypso-c1252.firebaseio.com',
});

const firestore = app.firestore();

export default firestore;
