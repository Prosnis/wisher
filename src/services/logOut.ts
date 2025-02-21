import { getAuth, signOut } from 'firebase/auth'

export async function logout(): Promise<void> {
  try {
    const auth = getAuth()
    await signOut(auth)
    window.location.reload()
    console.log('Пользователь разлогинен')
  }
  catch (error) {
    console.error('Ошибка при разлогинивании:', error)
  }
}
