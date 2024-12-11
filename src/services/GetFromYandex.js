export async function YandexParser(productUrl) {
  const url = 'http://212.22.90.119:3000/fetch-product'

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

    const data = await response.json()
    console.log('Данные о товаре:', data)

    return data
  }
  catch (error) {
    console.error('Ошибка:', error.message)
  }
}
