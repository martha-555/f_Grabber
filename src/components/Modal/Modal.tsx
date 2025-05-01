import React, { ReactNode, useEffect } from 'react'
import ReactDOM from 'react-dom'

type ModalProps = {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    if (isOpen) {
      window.addEventListener('keydown', handleEsc)
      document.body.style.overflow = 'hidden' // Блокуємо прокрутку
    } else {
      document.body.style.overflow = '' // Відновлюємо прокрутку
    }

    return () => {
      window.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = '' // Відновлюємо прокрутку при розмонтуванні
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <div className="relative rounded-xl bg-white p-6" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}></button>
        {children}
      </div>
    </div>,
    document.getElementById('modal-root') as HTMLElement,
  )
}

export default Modal
