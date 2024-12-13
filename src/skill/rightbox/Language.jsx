import React, { useEffect, useState } from 'react'
import styles from './language.module.css'

import reactImg from '../../skillimg/React.svg'
import JavaScript from '../../skillimg/JavaScript.svg'
import css from '../../skillimg/CSS.svg'
import TypeScript from '../../skillimg/TypeScript.svg'
import HTML from '../../skillimg/HTML.svg'
import NextJS from '../../skillimg/NextJS.svg'
import NestJS from '../../skillimg/NestJS-Dark.svg'
import TailwindCSS from '../../skillimg/TailwindCSS-Dark.svg'
import MySQL from '../../skillimg/MySQL-Dark.svg'
import NodeJS from '../../skillimg/NodeJS.svg'

const Language = () => {
  const [selectedSection, setlectedSection] = useState('all')

  useEffect(() => {

  }, [selectedSection])

  const frontendImages = [
    {
      src: HTML, alt: 'HTML',
      description: '웹 표준을 준수하며 브라우저에서 웹 콘텐츠를 표현할 수 있습니다.'
    },
    {
      src: css, alt: 'css',
      description: '웹페이지의 디자인과 레이아웃을 통해 웹페이지의 시각적 표현을 할 수 있습니다.'
    },
    {
      src: JavaScript, alt: 'JavaScript',
      description: '자바스크립트를 사용하여 동적 웹사이트를 구축할 수 있습니다.'
    },
    {
      src: TypeScript, alt: 'TypeScript',
      description: '타입 검사를 통해 오류를 줄여 코드의 가독성을 높일 수 있습니다.'
    },
    {
      src: reactImg, alt: 'React',
      description: '함수형 컴포넌트에서 상태관리와 생명주기 메서드를 사용할 수 있습니다.'
    },
    {
      src: NextJS, alt: 'NextJS',
      description: '파일 기반 라우팅을 통해 페이지를 관리할 수 있습니다.'
    },
    {
      src: TailwindCSS, alt: 'TailwindCSS',
      description: 'Tailwind CSS로 유틸리티 클래스를 활용해 직관적으로 스타일링하며, 반응형 디자인을 구상할 수 있습니다.'
    },
  ];
  const backendImages = [
    {
      src: NodeJS, alt: 'NodeJS',
      description: '의존성 주입 기능을 활용해 객체간의 의존 관계를 이해하며 사용할 수 있습니다.'
    },
    {
      src: NestJS, alt: 'NestJS',
      description: '데코레이터를 사용하여 의존성 주입을 통해 코드를 효율적으로 관리할 수 있습니다.'
    },
    {
      src: MySQL, alt: 'MySQL',
      description: '관계형 데이터베이스인 MYSQL을 통해 데이터를 효율적으로 저장하고 관리할 수 있습니다.'
    },
  ];
  return (
    <div className={styles.languageBox}>
      <div className={styles.languageBtnBox}>
        <button
          className={selectedSection === 'all' ? styles.active : ''}
          onClick={() => setlectedSection('all')}>All</button>
        <button
          className={selectedSection === 'frontend' ? styles.active : ''}
          onClick={() => setlectedSection('frontend')}>Frontend</button>
        <button
          className={selectedSection === 'backend' ? styles.active : ''}
          onClick={() => setlectedSection('backend')}>Backend</button>
      </div>

      <div className={styles.languageImgBox}>
        {(selectedSection === 'all' || selectedSection === 'frontend') &&
          frontendImages.map((img, index) => (
            <div key={index}>
              <div className={styles.skillImgBox}>
                <img src={img.src} alt={img.alt} />
                <div>
                  <p>{img.description}</p>
                </div>
              </div>
            </div>
          ))}

        {(selectedSection === 'all' || selectedSection === 'backend') &&
          backendImages.map((img, index) => (
            <div key={index}>
              <div className={styles.skillImgBox}>
                <img src={img.src} alt={img.alt} />
                <div>
                  <p>{img.description}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>

  )
}

export default Language
