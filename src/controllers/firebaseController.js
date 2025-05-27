import {initializeApp} from 'firebase/app';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID, 
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export const getMensagem = async (req, res) => {
    try{
        const ref = doc(db, 'mensagens', 'mensagem1');
        const snap = await getDoc(ref);

        if(!snap.exists()){
            return res.status(400).json({message: 'Documento não encontrado'});
        }
        res.json(snap.data());
    }catch (error){
        res.status(500).json({error: error.message});
    }
};