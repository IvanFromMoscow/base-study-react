import React from 'react'
import styles from './Modal.module.css';

const Modal = ({children, visible, setVisible}) => {
    const stylesModal = [styles.modal__wrapper];
    if(visible) {
        stylesModal.push(styles.modal__wrapper_active);
    }

    return (
    <div className={stylesModal.join(' ')} onClick={() => setVisible(false)}>
        <div className={styles.modal__content} onClick={(event) => { event.stopPropagation(); }}>
            {children}
        </div>
    </div>
  )
}

export default Modal