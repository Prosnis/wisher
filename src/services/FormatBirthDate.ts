import type { Timestamp } from "firebase/firestore"

export const formattedBirthday = (userDate : Timestamp) : string => {
    const timestamp = userDate
    if (!timestamp) return '—'
    const date = timestamp.toDate?.() || new Date(timestamp)
    return date.toLocaleDateString('ru-RU', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    })
}