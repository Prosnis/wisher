const categories = [
  'Искусство',
  'Музыка',
  'Танцы',
  'Спорт',
  'Кулинария',
  'Путешествия',
  'Чтение',
  'Садоводство',
  'Рукоделие',
  'Игры',
  'Фотография',
  'Коллекционирование',
  'Технологии',
  'Писательство',
  'Фитнес и здоровье',
  'Рыбалка и охота',
  'Автомобили и мотоциклы',
  'Наука',
  'Моделирование',
  'Саморазвитие',
  'Животные и природа',
  'Экстрим',
  'Мода и стиль',
  'Кино и сериалы',
  'Активный отдых',
  'Электроника',
  'Видеоблогинг',
  'Косметология',
]

const chunkSize = 10

export async function classifyText(text) {
  try {
    const results = []

    for (let i = 0; i < categories.length; i += chunkSize) {
      const chunk = categories.slice(i, i + chunkSize)

      const response = await fetch('https://api-inference.huggingface.co/models/MoritzLaurer/bge-m3-zeroshot-v2.0', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer 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`,
        },
        body: JSON.stringify({
          inputs: text,
          parameters: { candidate_labels: chunk },
        }),
      })

      if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`)
      }

      const data = await response.json()

      const { labels, scores } = data

      const categoryScores = labels.map((label, index) => ({
        label,
        score: scores[index],
      }))

      const sorted = categoryScores.sort((a, b) => b.score - a.score)
      results.push(...sorted.slice(0, 2))
    }

    console.log('Результаты классификации:', results)
    return results
  }
  catch (error) {
    console.error('Ошибка при запросе:', error.message)
  }
}
