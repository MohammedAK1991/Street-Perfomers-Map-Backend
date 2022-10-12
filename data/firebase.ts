import admin from 'firebase-admin';

const serviceAccount = {
  type: 'service_account',
  project_id: 'callypso-c1252',
  private_key_id: 'c20e1d77174e1d85b4961de62029eef1061ed028',
  private_key:
    '-----BEGIN PRIVATE KEY----------END PRIVATE KEY-----\n',
  client_email: 'idk-453@callypso-c1252.iam.gserviceaccount.com',
  client_id: '103086644572601235031',
  auth_uri: 'https://accounts.google.com/o/oauth2/auth',
  token_uri: 'https://oauth2.googleapis.com/token',
  auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
  client_x509_cert_url:
    'https://www.googleapis.com/robot/v1/metadata/x509/idk-453%40callypso-c1252.iam.gserviceaccount.com',
};

export const app = admin.initializeApp({
  // @ts-ignore
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://callypso-c1252.firebaseio.com',
});

const firestore = app.firestore();

export default firestore;
