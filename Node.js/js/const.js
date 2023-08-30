// 재 정의 x

const hello = "first hello";
// hello = "error";

// 블록스코프
if (true) {
  const hello = "second hello";
  console.log(hello);
}

console.log(hello);
