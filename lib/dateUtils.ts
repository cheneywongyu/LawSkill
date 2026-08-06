import { TimelineEvent, TimelineEventDisplay, Urgency, DeadlineType } from '@/types/timeline'

export function getDaysFromNow(dateStr: string): number {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const target = new Date(dateStr)
  target.setHours(0, 0, 0, 0)
  return Math.round((target.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))
}

export function getUrgency(daysFromNow: number, isDeadline: boolean, deadlineType?: DeadlineType): Urgency {
  if (!isDeadline) return 'normal'
  if (daysFromNow < 0) {
    // Contractual payment violations are historical facts — amber, not red
    if (deadlineType === 'payment') return 'warning'
    return 'expired'
  }
  if (daysFromNow <= 7) return 'critical'
  if (daysFromNow <= 30) return 'warning'
  return 'normal'
}

export function toDisplayDate(dateStr: string): string {
  const [year, month, day] = dateStr.split('-')
  return `${year}年${parseInt(month)}月${parseInt(day)}日`
}

export function formatDaysLabel(days: number): string {
  if (days === 0) return '今日到期'
  if (days < 0) return `已过期 ${Math.abs(days)} 天`
  return `还有 ${days} 天`
}

export function enrichEvents(events: TimelineEvent[]): TimelineEventDisplay[] {
  return events.map((ev) => {
    const daysFromNow = getDaysFromNow(ev.date)
    return {
      ...ev,
      daysFromNow,
      urgency: getUrgency(daysFromNow, ev.isDeadline, ev.deadlineType),
    }
  })
}
