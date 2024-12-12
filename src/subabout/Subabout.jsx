import React from 'react'
import { Element } from 'react-scroll';
import styles from './subabout.module.css'
import mimo1 from '../images/mimo1.png'
import mimo2 from '../images/mimo2.png'
import mimo3 from '../images/mimo3.png'
import Title from '../title/Title';

const Subabout = ({ }) => {

  const Box = ({ src, alt, keyword, comment }) => {
    return <>
      <div className={styles.roundedBox}>
        <img src={src} alt={alt} />
        <span>{keyword}</span>
        <span>{comment}</span>
      </div>
    </>
  }


  return (
    <Element name='about'>
      <div>
        <Title titleName="About me" />
      </div>
    </Element >
  )
}

export default Subabout
