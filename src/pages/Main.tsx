import {
  CategoriesSection,
  RecommendedSection,
  NewsCard,
  FAQSection,
  AnimationSection,
} from '../components'

const Main = () => {
  return (
    <div>
      <AnimationSection />
      <CategoriesSection />
      <RecommendedSection slideView={2} text="Вам може сподобатися" variant="home" />
      <NewsCard />
      <FAQSection />
    </div>
  )
}

export default Main
