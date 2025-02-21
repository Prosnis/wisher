import { getAuth } from 'firebase/auth'

const auth = getAuth()
const URL: string = import.meta.env.VITE_API_URL

export async function getUserLink(): Promise<string> {
  return `https://${URL}/user/${auth.currentUser.uid}`
}
