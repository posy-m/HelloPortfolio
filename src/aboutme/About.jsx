import React, { useState } from 'react'
import styles from './about.module.css'
import mainimg from '../images/main.jpg'

const About = () => {
  return (
    <div className={styles.aboutBox}>
      <div className={styles.aboutWrap}>
        <section className={styles.aboutTextBox}>
          <h1>프론트엔드 개발자 김민지 입니다.</h1>
          <div className={styles.aboutSubText}>
            <p>문제 해결을 염두에 두고 주도적으로 테스트 하며,</p>
            <p>피드백을 통해 인사이트를 도출 하겠습니다.</p>
          </div>
        </section>

        <img src={mainimg} alt="" className={styles.aboutMainimg} />

        <section className={styles.hashTagText}>
          <span>#책임감</span>
          <span>#개발자는 불편해야한다.</span>
          <span>#근거있게 일히자</span>
        </section>
      </div>

    </div>
  )
}


export default About
