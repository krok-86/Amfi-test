export const selectColor = (taskData: number) => {
  const now = new Date();
  const closestTaskDate = new Date(taskData * 1000);

  const isSameDay = (date1: Date, date2: Date): boolean => {
    return date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear();
  }

  const color = closestTaskDate
    ? (isSameDay(closestTaskDate, now) ? 'green' :
      (closestTaskDate > now ? 'yellow' : 'red'))
    : 'red';

  return color;
}

export const formatDate = (date: number) => {
  const now = new Date(date * 1000);

  const formattedDate = (() => {
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    return `${day}.${month}.${year}`;
  })();

  return formattedDate;
}