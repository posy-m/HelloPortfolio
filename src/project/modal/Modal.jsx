import React from 'react'
import styles from './modal.module.css'
import x from '../../images/x.png'
import test from '../../images/unmountin.gif'
import notion from '../../images/notion.png'

import Slider from 'react-slick';


const Modal = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  const imageArray = [
    { id: 1, src: test, alt: 'Image 1' },
    { id: 2, src: test, alt: 'Image 2' },
    { id: 3, src: notion, alt: 'Image 3' },
  ];

  const settings = {
    dots: true, // 하단 네비게이션 점 표시
    infinite: true, // 무한 반복
    speed: 500, // 전환 속도(ms)
    slidesToShow: 1, // 한 번에 보여줄 슬라이드 수
    slidesToScroll: 1, // 스크롤할 슬라이드 수
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <header className={styles.header}>
          <sapn className={styles.title}>제목</sapn>
          <button className={styles.closeButton} onClick={onClose}>
            <img src={x} alt="닫기" />
          </button>
        </header>
        <div className={styles.modalLine}></div>
        {content && (
          <div className={styles.contentBox}>
            {/* <div className={styles.mainimg}>
              <img src={test} alt="" />
            </div> */}
            <div className={styles.slider}>
              <Slider {...settings}>
                {imageArray.map((image) => (
                  <div key={image.id} className={styles.mainimg}>
                    <img src={image.src} alt={image.alt} className={styles.slideImage} />
                  </div>
                ))}
              </Slider>
            </div>
            <div className={styles.linkBox}>
              <p><link rel="stylesheet" href="" target="_blank" />  <img src={notion} alt="" /></p>
              <p><link rel="stylesheet" href="" target="_blank" />  <img src={notion} alt="" /></p>
              <p><link rel="stylesheet" href="" target="_blank" />  <img src={notion} alt="" /></p>
            </div>
            <div>
              <span>날짜</span>
              <span>설명</span>
            </div>


          </div >
        )}

      </div >
    </div >
  )
}

export default Modal
