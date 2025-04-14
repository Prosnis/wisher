import type { User } from '@/types/interfaces/user'
import { getUserData } from '@/services/GetUserData'

export async function getSubscribeList(subList: string[]): Promise<User[] | []> {
  try {
    const result = await Promise.all(
      subList.map(async (item) => {
        try {
          const { user: userData } = await getUserData(item)
          return userData
        }
        catch (error) {
          console.error(`Error fetching data for ${item}:`, error)
          return null
        }
      }),
    )
    return result.filter(user => user !== null)
  }
  catch (error) {
    console.error('Error fetching all data:', error)
    return []
  }
}
