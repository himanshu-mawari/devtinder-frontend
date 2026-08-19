// utils/dayjs.js
import dayjs from 'dayjs';

// Compact relative time: "6h", "2d", "3w", "5m" (minutes), "just now"
export const shortTimeAgo = (date) => {
  if(!date) return ""
  const now = dayjs();
  const then = dayjs(date);
  const diffSec = now.diff(then, 'second');
  const diffMin = now.diff(then, 'minute');
  const diffHr = now.diff(then, 'hour');
  const diffDay = now.diff(then, 'day');
  const diffWeek = now.diff(then, 'week');
  const diffMonth = now.diff(then, 'month');
  const diffYear = now.diff(then, 'year');

  if (diffSec < 60) return 'just now';
  if (diffMin < 60) return `${diffMin}m`;
  if (diffHr < 24) return `${diffHr}h`;
  if (diffDay < 7) return `${diffDay}d`;
  if (diffWeek < 4) return `${diffWeek}w`;
  if (diffMonth < 12) return `${diffMonth}mo`;
  return `${diffYear}y`;
};