import React from 'react'
import styles from './title.module.css'


const Title = ({ titleName }) => {
  return (
    <div className={styles.titleStyle}>
      <div>{titleName}</div>
      <div></div>
    </div>
  )
}





export default Title
