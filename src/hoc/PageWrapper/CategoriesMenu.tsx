import useFetchCategories from '../../api/useFetchCategories'

const CategoriesMenu = () => {
  const { data, isSuccess } = useFetchCategories()

  return (
    <>
      {isSuccess && (
        <div className="absolute right-[1px] top-[47px] z-10 min-w-[156px] rounded-[20px] bg-primary-30 py-2 text-center text-b4 text-grey-800 shadow-[4px_4px_16px_0px_#00000026]">
          {data?.map((item, index) => (
            <div className="hover:bg-primary-100 p-2" key={index}>
              {item.name}
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default CategoriesMenu
