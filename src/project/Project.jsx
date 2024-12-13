import React from 'react'
import { Element } from 'react-scroll';
import Title from '../title/Title';
import styles from './project.module.css'
const Project = () => {
  return (
    <Element name='project'>
      <div className={styles.projectBox}>
        <Title titleName='Project' />
        <div className={styles.projectWrap}>
        </div>
      </div>
    </Element>
  )
}

export default Project
