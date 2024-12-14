import React from 'react'
import styles from './modal.module.css'
import x from '../../images/x.png'
import test from '../../images/unmountin.gif'
import notion from '../../images/notion.png'
import github from '../../images/github.png'
import link from '../../images/link.png'

import Slider from 'react-slick';


const Modal = ({ isOpen, onClose, content, images }) => {
  if (!isOpen) return null;


  // 다하고 지우기
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
            <div className={styles.slider}>
              <Slider {...settings}>
                {imageArray.map((image) => (
                  <div key={image.id} className={styles.mainimg}>
                    <img src={image.src} alt={image.alt} className={styles.slideImage} />
                  </div>
                ))}
              </Slider>
              {/* <Slider {...settings}>
                  {images.map((image, index) => (
                    <div key={index} className={styles.mainimg}>
                      <img src={image.src} alt={image.alt} className={styles.slideImage} />
                    </div>
                  ))}
                </Slider> */}

            </div>
            <div className={styles.linkBox}>
              <a rel="noopener noreferrer" href="" target="_blank">
                <img src={github} alt="GitHub" />
              </a>
              <a rel="noopener noreferrer" href="" target="_blank">
                <img src={notion} alt="Notion" />
              </a>
              {/* {images.linkNameHomepage && (
                <a rel="noopener noreferrer" href={images.linkNameHomepage} target="_blank">
                  <img src={link} alt="Link" />
                </a>
              )} */}
            </div>
            <div className={styles.info}>
              <div className={styles.infoData}>
                <span>2024.09.24-2024.10.24(30일)</span>
                <span>5명(Frontend:3명, Backend:2명)</span>
              </div>
              <div className={styles.stack}>
                <span>nextjs</span>
                <span>nextjs</span>
                <span>nextjs</span>
                <span>nextjs</span>
              </div>
            </div>
            <div className={styles.introduction}>
              <span>
                <p>산을 오르며 고도에 따라 포인트를 적립하고,
                  적립 된 포인트로 다양한 상품이나 캐릭터를 구매하여 즐길 수 있는 어플입니다.</p>
              </span>
            </div>
            <div className={styles.charge}>
              <span>맡은기능</span>
              <ul>
                <li>사용자가 입력하는 데이터를 유효성 검사를 거쳐 회원가입 기능 구현</li>
                <li>사용자가 입력하는 데이터를 유효성 검사를 거쳐 회원가입 기능 구현</li>

              </ul>

            </div>
          </div >
        )
        }

      </div >
    </div >
  )
}

export default Modal
