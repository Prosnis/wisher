import { getDoc, getDocs, doc, collection, getFirestore } from 'firebase/firestore';

const db = getFirestore();

export async function getUserData(uid) {
    const userDoc = await getDoc(doc(db, 'users', uid));
    const userData = userDoc.exists() ? userDoc.data() : null;

    if (!userData) {
        console.error('Пользователь не найден!');
        return { user: null, wishes: [] };
    }

    const wishesSnapshot = await getDocs(collection(db, 'users', uid, 'wishes'));
    const userWishes = wishesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    return { user: userData, wishes: userWishes };
}