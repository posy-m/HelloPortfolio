import React from 'react'
import { Element } from 'react-scroll';
import Title from '../title/Title';
import styles from './project.module.css'
import Square from './square/Square';

import apptech from '../images/app.png'
import inside from '../images/wine.png'
import donutshop from '../images/donutshop.png'

const Project = () => {
  return (
    <Element name='project'>
      <div className={styles.projectBox}>
        <Title titleName='Project' />
        <div className={styles.projectWrap}>
          <Square
            src={apptech}
            title='등산앱테크'
            content='산을 오르며 고도에 따라 포인트를 적립할 수 있도록 하이브리드 앱을 구현 했습니다.'
            hashtag='Hybrid App' />
          <Square
            src={inside}
            title='와인커뮤니티 사이트'
            content='프론트엔드와 백엔드 간의 데이터 송수신 원리를 활용하여 커뮤니티 사이트를 구현했습니다.'
            hashtag='Web' />
          <Square
            src={donutshop}
            title='커뮤니티 사이트'
            content='데이터 저장소 기능 대신 사용할 수 있는 로컬 스토리지와 세션스토리지를 사용하여 커뮤니티 사이트를 구현했습니다.'
            hashtag='Web' />
        </div>
      </div>
    </Element>
  )
}

export default Project
