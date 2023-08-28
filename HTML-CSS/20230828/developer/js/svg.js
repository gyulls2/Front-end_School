//dom에서 path 찾기
const path = document.querySelector("#path");

const openBtn = document.querySelector(".btn-open");

//path의 전체 길이 구하기
const pathLength = path.getTotalLength();

//dash의 길이와 공백
path.style.strokeDasharray = `${pathLength} ${pathLength}`;

//dash를 어디서부터 그릴지
path.style.strokeDashoffset = pathLength;

console.log(innerHeight, outerHeight);
console.log("clinetHeight", document.documentElement.clientHeight);
console.log("scrollHeight", document.documentElement.scrollHeight);

function scrollHandler() {
  // 현재 스크롤의 위치
  const scrollTop = document.documentElement.scrollTop;

  // 전체 스크롤의 길이
  const scrollHeight = document.documentElement.scrollHeight;

  // 뷰포트의 높이
  const clientHeight = document.documentElement.clientHeight;

  // 스크롤의 위치 => % 0 ~ 1의 값을 가짐
  const scrollPercentage = scrollTop / (scrollHeight - clientHeight);

  const drawLength = pathLength * scrollPercentage;

  // pathLength -> 0
  path.style.strokeDashoffset = pathLength - drawLength;

  // button opacity 조절 0 ~ 1
  openBtn.style.opacity = scrollPercentage;

  // 80%이상일 때 버튼 enabled
  if (scrollPercentage > 0.8) {
    openBtn.disabled = false;
  } else {
    openBtn.disabled = true;
  }

  // console.log(drawLength);
}

window.addEventListener("scroll", scrollHandler);
