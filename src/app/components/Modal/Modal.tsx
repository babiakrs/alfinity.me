import { createPortal } from 'react-dom';
import classes from './Modal.module.scss';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Modal({ isOpen, onClose }: ModalProps) {
  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div className={classes.modal__backdrop} onClick={() => onClose()}>
      <div className={classes.modal__panel}>
        <div className={classes.modal__inner}>
          <div className={classes.modal__preview}></div>

          <div className={classes.modal__title}></div>
        </div>

        <button className={classes.modal__close}></button>
      </div>
    </div>,
    document.body
  );
}
