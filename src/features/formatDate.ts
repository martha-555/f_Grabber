export const formatDate = (date: Date) => {
  const datetime = new Date(date)

  const formattedDate = datetime.toLocaleDateString('uk-UA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return formattedDate
}
