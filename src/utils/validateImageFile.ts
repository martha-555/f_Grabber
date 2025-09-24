export function validateImageType(file: File): string | null {
  const allowedTypes = ['image/jpeg', 'image/png']
  if (!allowedTypes.includes(file.type)) {
    return 'Дозволені лише формати JPEG та PNG'
  }
  return null
}
