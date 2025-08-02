import { Link } from 'react-router-dom'
import useFetchCategories from '../../api/useFetchCategories'
import { PATHS } from '../../paths'

const CategoriesMenu = () => {
  const { data, isSuccess } = useFetchCategories()

  return (
    <>
      {isSuccess && (
        <div className="bg-primary-50 absolute right-[1px] top-[47px] z-10 min-w-[156px] rounded-[20px] py-2 text-center text-b4 text-grey-800 shadow-[4px_4px_16px_0px_#00000026]">
          {data?.map((item, index) => (
            <Link key={index} to={`${PATHS.PRODUCTS.category}${item.name}`}>
              <div
                className={`hover:bg-secondary-brown-100 p-2 ${index === data.length - 1 && 'rounded-b-[20px]'} ${index === 0 && 'rounded-t-[20px]'}`}
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
