import React from 'react'
import styles from './square.module.css'

const Square = ({ src, alt, title, content, hashtag, technology, onClick }) => {
  return (
    <div className={styles.squareBox} onClick={onClick}>
      <div className={styles.imgBox}>
        <img src={src} alt={alt} />
      </div>
      <div className={styles.contents}>
        <p>{title}</p>
        <p>{content}</p>
      </div>
      <div className={styles.hashTag}>
        <span>{hashtag}</span>
      </div>
    </div>
  )
}

export default Square
