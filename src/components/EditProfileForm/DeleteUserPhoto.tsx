import { useState } from 'react'
import ConfirmModal from '../ConfirmModal/ConfirmModal'
import CustomToaster from '../CustomToaster/CustomToaster'
import useFetchDeleteUserPhoto from '../../api/useFetchDeleteUserPhoto'
import Button from '../Button/Button'

const DeleteUserPhoto = () => {
  const [showModal, setShowModal] = useState<boolean>(false)
  const { mutate: fetchDeletePhoto } = useFetchDeleteUserPhoto()

  return (
    <>
      <Button
        onClick={() => setShowModal(true)}
        className="custom-button mt-0 w-[221px] bg-grey-50 text-primary-900"
      >
        Видалити фото
      </Button>
      {showModal && (
        <ConfirmModal
          confirmMessage="Ви впевнені, що хочете видалити фото?"
          onClick={() => {
            fetchDeletePhoto()
            setShowModal(false)
          }}
          onClose={() => setShowModal(false)}
        />
      )}
      <CustomToaster id="delete-user-photo" />
    </>
  )
}

export default DeleteUserPhoto
