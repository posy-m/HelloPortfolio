import React from 'react'
import styles from './explan.module.css'


const Explanation = () => {
  return (
    <div className={styles.explanBox}>
      <div className={styles.explanTitleBox}>
        <p>직무와 관련된 전문 지식과 기술을 꾸준히 채워갑니다.</p>
      </div>
      <div>
        <p>다양한 프로그래밍 언어와 개발 도구를 활용하며,
          <br /> 직무와 관련된 전문 지식과 기술을 꾸준히 쌓아가고 있습니다.
          <br /> 프로젝트 기반 학습과 온라인 플랫폼을 통한 이론 학습,
          <br /> 그리고 커뮤니티 활동을 통해 최신 트렌드를 익히고 실무 경험을 확장하며 기술 이해도를 지속적으로 높이고 있습니다</p>
      </div>
    </div>
  )
}

export default Explanation
