import React, { useState, useEffect } from "react";

function useScroll() {
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        // offsetHeight : 여기서는 페이지의 전체 높이를 의미합니다.
        // innerHeight : 뷰포트의 높이
        // scrollTop : 타겟요소가 화면 상단으로부터 스크롤된 길이
        const totalHeight = document.documentElement.offsetHeight;
        const viewportHeight = window.innerHeight;
        const scrollTop = document.documentElement.scrollTop;

        // 뷰포트의 높이 + 스크롤의 값이 화면 전체의 높이보다 크거나 같다면.
        setIsBottom(scrollTop + viewportHeight >= totalHeight);
      });
    },[]);


  return isBottom;
}

export default useScroll;
