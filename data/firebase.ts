import admin from 'firebase-admin';

// import serviceAccount from '../.secret/serviceAccountKey.json';
const serviceAccount = {
  type: 'service_account',
  project_id: 'callypso-c1252',
  private_key_id: 'c20e1d77174e1d85b4961de62029eef1061ed028',
  private_key:
    '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCsudXID5gmavWV\nCBte/bEQg6PCMP7OgFJ93DKXt3nOTEPKqSd0b56FvXXaQTFY9NcyJ/V0leKYeFp8\ngDR0UddyCkHIb2L4WsBTKOH8smdZASclr/E8fP0M33WJxKq1QgCu7y9XALAs8Chh\nOH0uYEXB87A7LcKyzzWA1IInsQkmcpaoT0hpuCcCVu0WsWuA0z83W0qoLBQyW0cl\net1Ve78WKaqb0QZOoBPzsFAzFH5NPyJhMSPIdE4A3l9RntZg6zCUkxBf0TAJnwOy\nj8ect31nNa4dSAcqffKNUEOgyMNm0pJ1RMqhxDfjjzBI7wFyhcCzbUC0hRvW/vHu\nHHUwQrE3AgMBAAECggEABKvLO0DTYDPuS5x6LlnKqw6ppBEdIvUsxe3pia7S4ssE\niPuFb0xWy3kchyLSNHyn69mmyq4EVb6Te+B1CrGX6PlGtCacVOkSCxhaRtza7KOa\nV8Dn/jccb3evlGKMLKC0p1vH5PYbeED6ZpQCK/nl3mE6YoSnSkdORBtQdcWqNgRB\n5X82WXiijMoGbskG4jss9ywKU5s8biJL8908Jenufd4q6PfqZMbXqUrvQy2qIWSO\n2GffywjorHWV0rBZ22uFf4w9VbvMoJDVoSgpbTMfwlsSYgNGA/MwAHqhBmzWnHbv\nkP7izyeDT7iG8m8W8+xpdBuWeKYAk+3ApfZQ1UCSQQKBgQDiGBTLDcXBzItaPTM4\n+zEzW/yEn2rQDRaKE5bzFf7zWcwEcLQDDlaBVtjnraI5YSs0RdYrE+OfyuFh/LSk\nCR8IL+zCMqND4xfAZ3UcBRmLWnKANU3YHlHth1d9NcQD46NIsgLoNgYj57AQuNtU\nJ4rvWU2jMnYLzSy9S9KIrpRzoQKBgQDDkp7BPqCW+0LZ2Kf9L30WvHVtWXcQ0Kos\nOBefpWd0wyfaMjdYX0Kf1WzHHVyz5M3v/WZm4T2rE4aBjZt+NVE/yGafjK8+F8bW\nYpUGZO85bm4LUvZgRSYzY6wA3HlCelfGkiE4dFzNE7pWpivW150qKDyc2RbUcRkL\nH7fTb5111wKBgFYLDha8lg8L9diQw+aiifXewvoB5VdqM7K2g9LdAxq/iMoDzi3/\njeJJF+ELjlpB5XxOO5RHTHAqeJ2e22w14G5wNq0tMj8KtKZPeR0Bv9ftwveR0Z82\n4rz/rccD6CYGwsROopaWwL13VeT3RNkA93nhRY+fC5ewLJ+ZtHS549shAoGAGuSq\nmAA4rQpYIwS79QD2vo2jyCmpSdKn0/TSqs1f8Jp1fHezTJ+s1bXPg4HyIXqxJvM9\nhaArjr7cnCwQ2cYTKiYwlngOEQfL++cKfxqaGteooj4CSzK3EhH+sQ+gTRftwgyO\nLOkzaa/wy8GF/cEgh4+I5jij/wqeWv09lgGfMXkCgYEAh4GJGzgiQ0TQCSFH5EeK\nkLpInGA4K92J+/DsZhKOUtLRP971u0Cio2+4AXbekhAJu3MCuHRQUFA0ntIwgnPV\na8cxLx21Qv5iaE44k97oIwBl3h/kT0pSw2vbLGv35Hhhig7AiuyGEu09mWmQzwKd\n6E7jKvkFDxwl7pQ4sm1hu1s=\n-----END PRIVATE KEY-----\n',
  client_email: 'idk-453@callypso-c1252.iam.gserviceaccount.com',
  client_id: '103086644572601235031',
  auth_uri: 'https://accounts.google.com/o/oauth2/auth',
  token_uri: 'https://oauth2.googleapis.com/token',
  auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
  client_x509_cert_url:
    'https://www.googleapis.com/robot/v1/metadata/x509/idk-453%40callypso-c1252.iam.gserviceaccount.com',
};

const app = admin.initializeApp({
  // @ts-ignore
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://callypso-c1252.firebaseio.com',
});

export const firestore = app.firestore();

export default firestore;
