import React from 'react'
import styles from './ButtonStyle.module.css';

const ButtonStyle = ({children, ...props}) => {
  return (
    <button className={styles.button} {...props}>
       {children}
    </button>
  )
}
export default ButtonStyle;