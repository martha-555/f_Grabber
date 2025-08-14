import HeartIcon from '../../assets/icons/heart.svg?react'
import useFavorites from '../../api/useFavorites.ts'
import useToggleFavorite from '../../api/useToggleFavorite'

type FavoriteIconProps = {
  product_id: string
}

const FavoriteIcon = ({ product_id }: FavoriteIconProps) => {
  const { data: favorites = [], isLoading } = useFavorites()
  const toggleFavorite = useToggleFavorite()

  if (isLoading) return null

  const isFavorite = favorites.some((item) => item.id === product_id)

  const handleClick = () => {
    toggleFavorite.mutate({ product_id, favorite: !isFavorite })
  }

  return (
    <button
      onClick={handleClick}
      aria-label="Toggle favorite"
      className={isFavorite ? 'text-primary-950' : 'text-primary-50'}
    >
      <HeartIcon className="transition-colors" fill={isFavorite ? 'currentColor' : 'none'} />
    </button>
  )
}

export default FavoriteIcon
