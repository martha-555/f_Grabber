export type TAdsCreate = {
  title: string
  description: string
  price: string
  status?: 'draft' | 'pending'
  category?: string
}
