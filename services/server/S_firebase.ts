import { initializeApp, getApps, cert, type ServiceAccount} from "firebase-admin/app";
import { getAuth} from "firebase-admin/auth"
import { getFirestore } from "firebase-admin/firestore";

const serviceAccount: ServiceAccount = {
	projectId: process.env.PROJECT_ID,
	privateKey: process.env.PRIVATE_KEY?.replace(/\\n/g, "\n"),
	clientEmail: process.env.CLIENT_EMAIL,
};

function initializeFirebaseAdmin() {
	if (getApps().length === 0) {
		initializeApp({
			credential: cert(serviceAccount),
		});
	}
}

initializeFirebaseAdmin()

const adminAuth = getAuth();
const firestore = getFirestore();

export { adminAuth, firestore};
