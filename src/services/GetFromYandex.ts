import type { ParsedData } from "@/types/interfaces/dataFromParse"
export async function YandexParser(productUrl:string) : Promise<ParsedData> {
  const url = 'http://localhost:3000/fetch-product'
  // const url = 'https://www.xn--b1agi7a0b.xn--p1ai/api/fetch-product'

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url: productUrl }),
    })

    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}`)
    }

    const data : ParsedData = await response.json()
    console.log('Данные о товаре:', data)

    return data
  }
  catch (error) {
    console.log(error)
    throw new Error('Ошибка при загрузке данных о товаре')
  }
}
