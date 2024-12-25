import { getAuth, signOut } from 'firebase/auth'

export async function logout() {
  try {
    const auth = getAuth()
    await signOut(auth)
    console.log('Пользователь разлогинен')
  }
  catch (error) {
    console.error('Ошибка при разлогинивании:', error)
  }
}
