import React from 'react'
import FAQItem from '../FAQItem/FAQItem'
import useFetchFAQItems from '../../api/useFetchFAQItems'
import { nanoid } from 'nanoid'

interface FAQSectionProps {}

const FAQSection: React.FC<FAQSectionProps> = ({}) => {
  const { data: FAQItems } = useFetchFAQItems()
  const key = nanoid()

  return (
    <section className="mx-auto flex max-w-container flex-col items-center justify-center py-[7.5rem]">
      <h2 className="self-center text-center text-h2">FAQ</h2>
      <div className="w-[70%]">
        {FAQItems && FAQItems.map((item, index) => <FAQItem {...item} key={key + index} />)}
      </div>
    </section>
  )
}

export default FAQSection
