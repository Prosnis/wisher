import { getUserData } from '@/services/GetUserData'

const subscribeMap = []

export async function getSubscribeList(subList) {
  try {
    const result = await Promise.all(
      subList.map(async (item) => {
        try {
          const { user: userData } = await getUserData(item)
          subscribeMap.push(userData)
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
