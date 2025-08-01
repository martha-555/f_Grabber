import { categories } from '../../constants/categories'

const CategoriesMenu = () => {
  return (
    <div className="absolute right-[1px] top-[47px] z-10 min-w-[156px] rounded-[20px] bg-primary-30 py-2 text-center text-b4 text-grey-800 shadow-[4px_4px_16px_0px_#00000026]">
      {categories.map((item, index) => (
        <div className="p-2 hover:bg-primary-100" key={index}>
          {item}
        </div>
      ))}
    </div>
  )
}

export default CategoriesMenu
