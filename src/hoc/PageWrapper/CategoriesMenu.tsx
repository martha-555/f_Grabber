import { Link } from 'react-router-dom'
import useFetchCategories from '../../api/useFetchCategories'
import { PATHS } from '../../paths'

const CategoriesMenu = () => {
  const { data, isSuccess } = useFetchCategories()

  return (
    <>
      {isSuccess && (
        <div className="absolute right-[1px] top-[47px] z-10 min-w-[156px] rounded-[20px] bg-primary-50 py-2 text-center text-b4 text-grey-800 shadow-[4px_4px_16px_0px_#00000026]">
          {data?.map((item, index) => (
            <Link key={index} to={`${PATHS.PRODUCTS.category}${item.name}`}>
              <div
                className={`p-2 hover:bg-secondary-brown-100 ${index === data.length - 1 && 'rounded-b-[20px]'} ${index === 0 && 'rounded-t-[20px]'}`}
              >
                {item.name}
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  )
}

export default CategoriesMenu
