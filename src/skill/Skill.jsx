import React from 'react'
import { Element } from 'react-scroll';
import Title from '../title/Title';
import styles from './skill.module.css'
import Explanation from './explanation/Explanation';
import Language from './rightbox/Language';

const Skill = () => {
  return (
    <Element name='stack'>
      <div className={styles.skillBox}>
        <Title titleName='Skill' />
        <div className={styles.skillWrap}>
          <div className={styles.leftBox}>
            <Explanation />
          </div>
          <div className={styles.rightBox}>
            <Language />
          </div>
        </div>
      </div>
    </Element>
  )
}

export default Skill
