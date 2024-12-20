import React from 'react'
import styles from './modal.module.css'
import x from '../../images/x.png'
import test from '../../images/unmountin.gif'
import notion from '../../images/notion.png'
import github from '../../images/github.png'
import link from '../../images/link.png'

import Slider from 'react-slick';


const Modal = ({ isOpen, onClose, content, images = [] }) => {
  if (!isOpen) return null;


  // const imageArray = [
  //   { id: 1, src: test, alt: 'Image 1' },
  //   { id: 2, src: test, alt: 'Image 2' },
  //   { id: 3, src: notion, alt: 'Image 3' },
  // ];

  const settings = {
    dots: true, // 하단 네비게이션 점 표시
    infinite: true, // 무한 반복
    speed: 500, // 전환 속도(ms)
    slidesToShow: 1, // 한 번에 보여줄 슬라이드 수
    slidesToScroll: 1, // 스크롤할 슬라이드 수
    fade: true
  };


  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <header className={styles.header}>
          <sapn className={styles.title}>{content.title}</sapn>
          <button className={styles.closeButton} onClick={onClose}>
            <img src={x} alt="닫기" />
          </button>
        </header>
        <div className={styles.modalLine}></div>
        {content && (
          <div className={styles.contentBox}>
            <div className={styles.slider}>
              <Slider {...settings}>
                {images.map((image, index) => (
                  <div key={index} className={styles.mainimg}>
                    <img src={image.src} alt={image.alt} className={styles.slideImage} />
                  </div>
                ))}
              </Slider>
            </div>
            <div className={styles.linkBox}>
              <a rel="noopener noreferrer" href={content.linkName} target="_blank">
                <img src={github} alt="GitHub" />
              </a>
              <a rel="noopener noreferrer" href={content.linkNameNotion} target="_blank">
                <img src={notion} alt="Notion" />
              </a>
              {content.linkNameHomepage && (
                <a rel="noopener noreferrer" href={content.linkNameHomepage} target="_blank">
                  <img src={link} alt="Link" />
                </a>
              )}
            </div>
            <div className={styles.info}>
              <div className={styles.infoData}>
                <span>{content.date}</span>
                <span>{content.personnel}</span>
              </div>
              <div className={styles.stack}>
                {content.skill.map((skill, index) => (
                  <span key={index}>{skill}</span>
                ))}
              </div>
            </div>
            <div className={styles.introduction}>
              <span>
                <p>{content.introduction}</p>
              </span>
            </div>
            <div className={styles.charge}>
              <span>맡은기능</span>
              <ul>
                {content.chargeConent.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className={styles.issue}>
              <span>이슈사항</span>
              <div className={styles.issueWrap}>
                <div className={styles.problem}>
                  <span>문제점</span>
                  {/* <div className={styles.modalLine}></div> */}
                  <ul>
                    {content.problem.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className={styles.problem}>
                  <span>해결방안</span>
                  {/* <div className={styles.modalLine}></div> */}
                  <ul>
                    {content.solution.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div >
        )
        }

      </div >
    </div >
  )
}

export default Modal


