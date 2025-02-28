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
  const [modalImages, setModalImages] = useState(null);

  const openMoal = (content, images) => {
    // console.log("Modal Content: ", content);
    setModalContent(content);
    setModalImages(images);
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
              title: "등산 앱테크",
              date: "2024.09.24-2024.10.24(30일)",
              personnel: "5명(Frontend:3명, Backend:2명)",
              linkName: "https://github.com/posy-m/UPHiLLProjectFront",
              linkNameNotion: "https://lavish-spike-71b.notion.site/UPHiLL-10bf53737a1380aa8acff5244d02823b",
              linkNameHomepage: "https://uphillmountain.store",
              introduction: "산을 오르며 고도에 따라 포인트를 적립하고,적립 된 포인트로 다양한 상품이나 캐릭터를 구매하여 즐길 수 있는 어플입니다.",
              chargeConent: [
                "사용자가 입력하는 데이터를 유효성 검사를 거쳐 회원가입 기능 구현",
                "Jotai를 활용해 회원 정보를 전역 상태에서 불러와 검증한 후, API 요청을 통해 로그인 기능 구현",
                "Firebase에서 제공하는 Firebase Authentication 서비스를 사용하여 휴대폰 번호로 비밀번호 찾기 / 아이디 찾기 구현",
                "포인트로 구매한 상품을 ‘사용 중’과 ‘사용 완료’ 상태로 분류하여 보관할 수 있는 기능을 구현",
                "React-Query에서 제공하는 useInfiniteQuery 훅을 사용하여 무한스크롤 구현",
              ],
              skill: ['JavaScript', 'TypeScript', 'React', 'Next.js'],
              problem: ["상품 및 아바타 컴포넌트를 로드 할 때 메모리를 절약하기 위해 한 번에 전체 데이터를 불러오는 것보다 한 페이지 당 데이터의 개수 지정하여 불러오려고 사용하였으나 무한 스크롤을 구현하는 과정에서 초기에는 첫 페이지가 정상적으로 렌더링이 되었으나 두 번째 페이지 이후부터 리렌더링이 되지 않는 문제 발생"],
              solution: ["다음 페이지 여부와 로드 할 데이터가 있는지 서버 상태를 주시하고, 매번 새로운 페이지로 넘어 갈 때마다 정상적으로 컴포넌트가 리렌더링 될 수 있도록 설정하여  메모리를 보다 효율적으로 사용할 수 있게 했고 데이터를 분할하여 로드 할 수 있게 함"]
            }, apptechImages)} />
          <Square
            src={inside}
            title='주류 커뮤니티 사이트'
            content='프론트엔드와 백엔드 간의 데이터 송수신 원리를 활용하여 커뮤니티 사이트를 구현했습니다.'
            hashtag='Web'
            onClick={() => openMoal({
              title: "주류 커뮤니티 사이트",
              date: "2024.07.18-2024.08.05(19일)",
              linkName: "https://github.com/posy-m/InsideOut",
              linkNameNotion: "https://lavish-spike-71b.notion.site/InsideOut-52b02e18ce2c4ec0ae5ba5a5848185ad",
              personnel: "4명 (Frontend, Backend)",
              introduction: "주류를 좋아하는 사람들의 커뮤니티 사이트입니다.",
              chargeConent: [
                " 로그인한 회원이 제목과 내용 작성과 Multer를 이용해 이미지를 업로드 할 수 있는 게시글 작성 기능을 구현",
                "게시글의 고유한 ID값을 요청 받아 데이터베이스에서 해당 데이터를 조회하고 Sequelize를 사용하여 서버에서 수정 및 삭제 기능을 구현",
                " 한 게시글에 대한 댓글과 대댓글을 작성할 수 있도록 게시글과 댓글간에 1:N관계를 설정하여 댓글과 대댓글은 회원 테이블의 고유 ID와 외래키를 작성자와 닉네임을 매칭하며, 각 댓글과 대댓글은 게시글에 속할 수 있도록 글과 대댓글간에 관계를 설정하여 기능 구현",
                "사용자가 입력한 제목과 게시글 내용 검색어를 서버로 쿼리 스트링을 전송하여 검색 기능 구현 ",
                "현재 페이지의 URL경로를 확인하여 쿼리 문자열을 제외한 경로만 추출하여 경로에 따라 다른 카테고리 값을 할당하여 특정 카테고리 번호를 결정하는 로직을 구현",
                "한 페이지에 표시할 데이터 수와 현재 페이지 값을 쿼리스트링으로 서버에 전달받아 데이터를 데이터베이스에서 조회하여 반환하여 페이지네이션 기능 구현",
              ],
              skill: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Nestjs', 'mysql', 'Sequelize'],
              problem: ["클라이언트가 데이터 수정 또는 삭제페이지에서 다음 페이지로 이동이 되지 않는 문제 발생", "댓글과 대댓글 작성 시 데이터가 복잡하게 얽혀 있어, 잘못된 외래키 값이 저장되어 데이터베이스 무결성을 해치는 문제가 발생."],
              solution: ["클라이언트에서 HTTP 상태 코드와 함께 상세한 에러 메시지를 반환하도록 예외 처리를 추가.", "데이터베이스에서 댓글과 대댓글 간의 관계를 정확히 설정하고, 작성자 ID와 게시글 ID를 검증하여 요청된 게시글 ID를 기준으로 필요한 댓글만 서버에서 조회하는 로직을 구현하여 해결"]
            }, insideImages)} />
          <Square
            src={donutshop}
            title='커뮤니티 사이트'
            content='데이터 저장소 기능 대신 사용할 수 있는 로컬 스토리지와 세션스토리지를 사용하여 커뮤니티 사이트를 구현했습니다.'
            hashtag='Web'
            onClick={() => openMoal({
              title: "도넛 커뮤니티 사이트",
              date: "2024.05.14-2024.05.28 (14일)",
              linkName: "https://github.com/posy-m/songpa",
              linkNameNotion: "https://mirror-check-8ea.notion.site/TEAM-a58a93c037034dc9b6d6bbf11cdbc063",
              personnel: "4명 (Frontend)",
              introduction: "데이터베이스 없이 데이터 저장소 기능 대신 사용할 수있는 로컬 스토리지와 타입스크립트를 사용하여 홈페이지에 유입된 고객이 게시판을 통해 자유롭게 소통할 수 있는 커뮤니케이션 사이트 입니다.",
              chargeConent: [
                "TypeScript의 정적 타입검사를 활용하여 게시판 데이터 구조를 미리 정의하여 타입 오류를 방지하고 JavaScript로 빌드하여 실제 웹 환경에서 동작하도록 구현",
                "로컬스토리지에 저장된 게시판 데이터를 정의한 타입에 맞게 값을 받아와 나누어 보여주기 위해 페이지 네이션 로직 구현",
                "사용자가 입력한 검색어를 쿼리 파라미터로 전달하여 해당 검색어가 포함된 제목을 필터링을 할때 타입스크립트의 타입검사를 활용 하여 검색 기능 구현"
              ],
              skill: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript'],
              problem: ["TypeScript로 게시판 데이터 구조를 정의했으나, 예상치 못한 동적 데이터가 들어올 경우 타입 오류가 발생하거나, 타입이 맞지 않아 실행 중 오류가 발생."],
              solution: ["게시판 데이터 구조를 interface와 type을 사용해 명확히 정의하여 동적 데이터를 처리할 수 있도록 설계."]
            }, donutshopImages)}
          />
        </div>
        <Modal isOpen={isModalOpen} onClose={closeModal} content={modalContent} images={modalImages} />
      </div>
    </Element>
  )
}

export default Project

