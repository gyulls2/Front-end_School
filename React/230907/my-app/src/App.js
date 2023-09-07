import "./App.css";
import ListRender from "./ListRender";
import ListRender2 from "./ListRender2";
import ReactFragment2 from "./ReactFragment2";

function App() {
  const name = "라이켓";
  function 함수() {
    return "함수";
  }

  const today = new Date();
  const year = today.getFullYear();
  const monthDay = today.getMonth() + 1 + "/" + today.getDate();
  const time = `${today.getHours()}시 ${today.getMinutes()}분 ${today.getSeconds()}초`;
  console.log(time);

  const someStyle = { backgroundColor: "yellow", color: "white" };

  return (
    <div>
      <h1 className="h1">안녕 {함수() ? "함수" : "JSX"}!</h1>
      <h1>안녕 라이켓!</h1>
      <input type="text" style={{ backgroundColor: "red" }} />
      <div className="newClass">
        <p style={{ color: "red" }}>년 : {year}</p>
        <p>월/일 : {monthDay}</p>
        <p>시간 : {time}</p>
      </div>

      <ListRender />
      <ListRender2 />
      <ReactFragment2 />
    </div>
  );
}

export default App;
