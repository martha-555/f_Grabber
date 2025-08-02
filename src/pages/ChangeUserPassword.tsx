import { CustomToaster, EditPasswordForm } from '../components'

const ChangeUserPassword = () => {
  return (
    <div className="mb-[210px] flex flex-col items-center">
      <h1 className="mb-8 mt-[160px] text-h3 text-grey-950">Редагування паролю</h1>
      <EditPasswordForm />
      <CustomToaster id="change_password" />
    </div>
  )
}

export default ChangeUserPassword
