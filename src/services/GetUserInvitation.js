import { getAuth } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { getStorage, ref as storageRef, getDownloadURL } from 'firebase/storage';

const auth = getAuth();
const db = getFirestore();
const storage = getStorage();

export async function getInvitationImageUrl() {
  try {
    const currentUser = auth.currentUser;
    const userDocRef = doc(db, 'users', currentUser.uid);
    const userDoc = await getDoc(userDocRef);
    const invitationImagePath = userDoc.data().invitationImage;
    const invitationImageRef = storageRef(storage, invitationImagePath);
    const invitationImageUrl = await getDownloadURL(invitationImageRef);

    return invitationImageUrl;
  } catch (error) {
    console.error('Ошибка при получении изображения приглашения:', error);
    return null;
  }
}
