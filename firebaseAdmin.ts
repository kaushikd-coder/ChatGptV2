import admin from 'firebase-admin';
import { getApps } from 'firebase/app';

const serviceAccount = JSON.parse(
    process.env.FIREBASE_SERVICE_ACCOUNT_KEY as string
)

if (!getApps().length) {

    try {
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
        })
    } catch (error) {
        console.log(error)
    }
   
}

const adminDb = admin.firestore();

export { adminDb };
