import useLogout from '../../api/logout'
import userProfileStore from '../../store/userProfileStore'
import { useNavigate } from 'react-router-dom'
import { FC } from 'react'
import { Modal } from '../../components'
import { Button } from '../index.ts'
import { PATHS } from '../../paths'

interface Props {
  onClose: () => void
}

const LogoutModal: FC<Props> = ({ onClose }) => {
  const navigate = useNavigate()
  const resetUserProfile = userProfileStore((state) => state.resetUserProfile)

  const logout = useLogout({
    onSuccess: () => {
      resetUserProfile()
      onClose()
      navigate(PATHS.HOME)
    },
  })

  return (
    <Modal onClose={onClose}>
      <h2 className="mb-6 text-center text-lg font-semibold">Ви впевнені, що хочете вийти?</h2>
      <div className="flex justify-end gap-4">
        <Button
          text="Ні"
          onClick={onClose}
          className="min-w-btn-small border border-primary-950 px-4 py-2 text-primary-950 hover:bg-primary-950 hover:text-primary-50"
        />
        <Button
          text="Так"
          onClick={() => logout.mutate()}
          className="min-w-btn-small bg-error-default px-4 py-2 text-white hover:bg-red-700"
        />
      </div>
    </Modal>
  )
}

export default LogoutModal
