// https://paullabworkspace.notion.site/40bfd5fab53740f78f6158f9a38a6efe
// 배열의 합계를 재귀함수를 이용해 구하세요

function sumArray(arr, index = 0) {
  if (index === arr.length) return 0;
  // if (!arr[index + 1]) return arr[index];
  return arr[index] + sumArray(arr, index + 1);
}

// 사용 예시
const arr = [1, 2, 3, 4, 5];
const result = sumArray(arr);
console.log(result); // 출력: 15
