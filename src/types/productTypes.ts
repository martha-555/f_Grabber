export type AdType = {
  id: string
  title: string
  description: string
  images: string[]
  price: string
  location: string
  is_favorite: boolean
}

export type TFavorite = {
  product_id: string
  favorite: boolean
}
