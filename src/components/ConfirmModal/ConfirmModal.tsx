import Button from '../Button/Button'
import Modal from '../Modal/Modal'
type Props = {
  onClose: () => void
  onClick: () => void
  confirmMessage: string
}

const ConfirmModal = ({ onClose, onClick, confirmMessage }: Props) => {
  return (
    <Modal onClose={onClose}>
      <h2 className="mb-6 text-center text-lg font-semibold">{confirmMessage}</h2>
      <div className="flex justify-evenly">
        <Button
          text="Так"
          onClick={onClick}
          className="min-w-btn-small bg-primary-950 px-4 py-2 text-white hover:bg-red-700"
        />
        <Button
          text="Ні"
          onClick={onClose}
          className="min-w-btn-small border border-primary-950 px-4 py-2 text-grey-950 hover:bg-primary-950 hover:text-primary-50"
        />
      </div>
    </Modal>
  )
}

export default ConfirmModal
