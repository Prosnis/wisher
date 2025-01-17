import { getUserData } from '@/services/GetUserData'
import { ref } from 'vue'

const subscribeMap = ref([])

export async function getSubscribeList(subList) {
  try {
    const result = await Promise.all(
      subList.map(async (item) => {
        try {
          const { user: userData } = await getUserData(item)
          subscribeMap.value.push(userData)
          return userData
        }
        catch (error) {
          console.error(`Error fetching data for ${item}:`, error)
          return null
        }
      }),
    )
    console.log(result, '123')
    return result.filter(user => user !== null)
  }
  catch (error) {
    console.error('Error fetching all data:', error)
    return []
  }
}
