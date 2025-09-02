import { Comments, RecommendedSection, AdInfo } from '../components'
import { useParams } from 'react-router-dom'

const AdDetails = () => {
  const { ad_id } = useParams()
  if (!ad_id) return null

  return (
    <div className="mx-auto max-w-container">
      <AdInfo ad_id={ad_id} />
      <RecommendedSection slideView={3} text="Вам також може сподобатися" variant="adPage" />
      <Comments />
    </div>
  )
}

export default AdDetails
