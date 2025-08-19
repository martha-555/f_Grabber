export type TComment = {
  id: string
  product_id: string
  user_name: string
  rating: number
  comment_text: string
  created_at: string
}

export type TCommentAndRating = {
  average_rating: number
  comments: TComment[]
}
