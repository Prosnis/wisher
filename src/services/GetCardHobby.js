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
  'Интерьер и уют',
  'Косметология',
]

const apiUrl = 'Bearer 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' // Замените на ваш токен
const chunkSize = 10

export async function classifyText(text) {
  try {
    const results = []

    for (let i = 0; i < categories.length; i += chunkSize) {
      const chunk = categories.slice(i, i + chunkSize)

      const response = await fetch('https://api-inference.huggingface.co/models/facebook/bart-large-mnli', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': apiUrl,
        },
        body: JSON.stringify({
          inputs: text,
          parameters: { candidate_labels: chunk },
        }),
      })

      if (!response.ok) {
        const errorText = await response.text()
        throw new Error(`Ошибка HTTP ${response.status}: ${errorText}`)
      }

      const data = await response.json()

      const categoryScores = data.labels.map((label, index) => ({
        label,
        score: data.scores[index],
      }))

      results.push(...categoryScores.sort((a, b) => b.score - a.score).slice(0, 3))
    }

    return results
  }
  catch (error) {
    console.error('Ошибка при запросе:', error.message)
    return []
  }
}
