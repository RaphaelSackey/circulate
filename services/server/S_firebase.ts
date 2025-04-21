import { initializeApp, getApps, cert, type ServiceAccount} from "firebase-admin/app";
import { getAuth} from "firebase-admin/auth"
import { getFirestore } from "firebase-admin/firestore";
import { getStorage } from "firebase-admin/storage";

const serviceAccount: ServiceAccount = {
	projectId: process.env.PROJECT_ID,
	privateKey: process.env.PRIVATE_KEY?.replace(/\\n/g, "\n"),
	clientEmail: process.env.CLIENT_EMAIL,
};

function initializeFirebaseAdmin() {
	if (getApps().length === 0) {
		initializeApp({
			credential: cert(serviceAccount),
			storageBucket: 'circulate-2c614.firebasestorage.app'
		});
	}
}

initializeFirebaseAdmin()

const adminAuth = getAuth();
const firestore = getFirestore();
const storageBucket = getStorage().bucket()


export { adminAuth, firestore, storageBucket};
