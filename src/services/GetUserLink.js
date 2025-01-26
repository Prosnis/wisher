import { getAuth } from 'firebase/auth'

const auth = getAuth()
const userUid = null
const URL = import.meta.env.VITE_API_URL

export async function getUserLink() {
  userUid.value = auth.currentUser.uid

  return `https://${URL}/user/${userUid.value}`
}
