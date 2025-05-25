import { Toaster } from 'react-hot-toast'
type Props = {
  id: string
  className?: string
}
const CustomToaster = ({ id, className }: Props) => {
  return (
    <Toaster
      position="bottom-center"
      toastOptions={{
        id: id,
        className: ` !bg-[#FFFFFF] !text-[1.5rem]  text-[#000000] rounded-[100px] flex flex-row-reverse !max-w-none !w-fit !whitespace-nowrap px-[1.25rem] py-[0.625rem] ${className}`,
      }}
    />
  )
}

export default CustomToaster
