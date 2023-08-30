// 재선언 X 재할당 O
let hello = "first hello"
// hello = "second hello"
// let hello = "error"

console.log(hello)

// 블록스코프
if(true){
  let hello = "second hello"
  console.log(hello)
}
