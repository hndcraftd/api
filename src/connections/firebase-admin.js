import firebaseAdmin from "firebase-admin";

const { FIREBASE_CONFIG } = process.env;
const serviceAccount = JSON.parse(FIREBASE_CONFIG);

const admin = firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),
});

console.info("\nInitialized Firebase Admin. 🏄");

export const firebaseAuth = admin.auth();
export const firestore = admin.firestore();

export default admin;
