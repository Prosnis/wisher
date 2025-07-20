import type { Timestamp } from 'firebase/firestore'

export function timestampToDate(timestamp: Timestamp | null | undefined): string {
  if (!timestamp)
    return ''
  if (typeof timestamp.toDate === 'function') {
    return timestamp.toDate().toISOString().split('T')[0]
  }
  return ''
}
