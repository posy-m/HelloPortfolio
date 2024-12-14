import React, { useEffect, useState } from 'react'
import { Element } from 'react-scroll';
import Title from '../title/Title';
import styles from './project.module.css'
import Square from './square/Square';

import apptech from '../images/app.png'
import inside from '../images/wine.png'
import donutshop from '../images/donutshop.png'
import Modal from './modal/Modal';

//img
import uphill0 from '../images/unmountin.gif'
import uphill1 from '../projectImg/uphill1.jpg'
import uphill2 from '../projectImg/uphill2.jpg'
import uphill3 from '../projectImg/uphill3.jpg'
import uphill4 from '../projectImg/uphill4.jpg'
import uphill5 from '../projectImg/uphill5.jpg'
import uphill6 from '../projectImg/uphill6.jpg'
import uphill7 from '../projectImg/uphill7.jpg'
import uphill8 from '../projectImg/uphill8.jpg'
import uphill9 from '../projectImg/uphill9.jpg'
import insidout1 from '../projectImg/insideout1.png'
import insidout2 from '../projectImg/insideout2.png'
import insidout3 from '../projectImg/insideout3.gif'
import insidout4 from '../projectImg/insideout4.gif'
import donut0 from '../images/donut.gif'
import donut1 from '../projectImg/donut1.png'
import donut2 from '../projectImg/donut2.png'
import donut3 from '../projectImg/donut3.png'
import donut4 from '../projectImg/donut4.png'
import donut5 from '../projectImg/donut5.png'



const apptechImages = [
  { src: uphill0, alt: 'AppTech Image 1' },
  { src: uphill1, alt: 'AppTech Image 2' },
  { src: uphill2, alt: 'AppTech Image 3' },
  { src: uphill3, alt: 'AppTech Image 4' },
  { src: uphill4, alt: 'AppTech Image 5' },
  { src: uphill5, alt: 'AppTech Image 6' },
  { src: uphill6, alt: 'AppTech Image 7' },
  { src: uphill7, alt: 'AppTech Image 8' },
  { src: uphill8, alt: 'AppTech Image 9' },
  { src: uphill9, alt: 'AppTech Image 10' },
];
const insideImages = [
  { src: insidout3, alt: 'Wine Community Image 3' },
  { src: insidout4, alt: 'Wine Community Image 4' },
  { src: insidout1, alt: 'Wine Community Image 1' },
  { src: insidout2, alt: 'Wine Community Image 2' },
];
const donutshopImages = [
  { src: donut0, alt: 'Donut Shop Image 1' },
  { src: donut1, alt: 'Donut Shop Image 2' },
  { src: donut2, alt: 'Donut Shop Image 3' },
  { src: donut3, alt: 'Donut Shop Image 4' },
  { src: donut4, alt: 'Donut Shop Image 5' },
  { src: donut5, alt: 'Donut Shop Image 6' },
];

const Project = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openMoal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setModalContent(null)
    setIsModalOpen(false)
  }

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isModalOpen])

  return (
    <Element name='project'>
      <div className={styles.projectBox}>
        <Title titleName='Project' />
        <div className={styles.projectWrap}>
          <Square
            src={apptech}
            title='등산앱테크'
            content='산을 오르며 고도에 따라 포인트를 적립할 수 있도록 하이브리드 앱을 구현 했습니다.'
            hashtag='Hybrid App'
            onClick={() => openMoal({

            })} />
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
        <Modal isOpen={isModalOpen} onClose={closeModal} content={modalContent} />
      </div>
    </Element>
  )
}

export default Project
