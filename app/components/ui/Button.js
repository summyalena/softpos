import React from 'react'

import styles from './ui.module.css'

function Button({children, className}) {
  return (
    <button className={`${className} ${styles.button}`}>
      {children}
    </button>
  )
}

export default Button