import { getAuth } from "firebase/auth";
import { ref } from 'vue';

const auth = getAuth()
const userUid = ref(null)

export async function getUserLink() {
    userUid.value = auth.currentUser.uid

    return `https://prosnis.github.io/wisher/user/${userUid.value}`
}