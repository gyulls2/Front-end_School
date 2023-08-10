// 전달받은 객체의 키와 벨류값을 모두 출력하는 for문을 만들어보세요.
const person = {
  name: "재현",
  age: 20,
  gender: "male",
};

for(let i = 0; i < 3; i++){
  console.log(Object.keys(person)[i],Object.values(person)[i])
}

const props = Object.keys(person);
for(let i = 0; i < props.length; i++){
  console.log(props[i],person.props[i])
}