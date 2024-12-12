import React, { useState } from 'react'

const Email = () => {
  const [showToast, setShowToast] = useState(false); // 토스트 메시지 표시 여부
  const email = "aldzi0215@naver.com";

  const handleEmailClick = () => {
    navigator.clipboard.writeText(email)
      .then(() => {
        setShowToast(true); // 토스트 메시지 표시
        setTimeout(() => setShowToast(false), 1000); // 2초 후 토스트 메시지 숨김
      })
      .catch((err) => {
        console.error("복사에 실패했습니다.", err);
      });
  };


  return (
    <div>
      <p>
        <p
          onClick={handleEmailClick}
          style={{ cursor: "pointer", }}
        >
          Email
        </p>
      </p>
      {/* 토스트 메시지 */}
      {showToast && (
        <div style={toastStyle}>
          이메일이 복사되었습니다!
        </div>
      )}
    </div>
  )
}

const toastStyle = {
  position: "absolute",
  // top: "50px",
  left: "100px",
  backgroundColor: "#333",
  color: "#fff",
  padding: "5px 10px",
  borderRadius: "5px",
  fontSize: "12px",
  whiteSpace: "nowrap",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
};

export default Email

