import React from 'react'
import styles from './InputStyle.module.css';

const InputStyle = (props) => {
  return (
    <input className={styles.input} {...props} />
  )
}

export default InputStyle