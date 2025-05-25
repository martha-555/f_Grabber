import { useState } from 'react'
import PhotoButton from './PhotoButton'
import ConfirmModal from '../ConfirmModal/ConfirmModal'
import CustomToaster from '../CustomToaster/CustomToaster'
import useFetchDeleteUserPhoto from '../../api/useFetchDeleteUserPhoto'

const DeleteUserPhoto = () => {
  const [showModal, setShowModal] = useState<boolean>(false)
  const { mutate: fetchDeletePhoto } = useFetchDeleteUserPhoto()

  return (
    <>
      <PhotoButton onClick={() => setShowModal(true)} text="Видалити фото" />
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
