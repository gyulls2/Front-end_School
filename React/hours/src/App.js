import "./normalize.css";
import styles from "./App.module.css";
import Input from "./Components/Common/Input/Input";
import Button from "./Components/Common/Button/Button";
import Modal from "./Components/Common/Modal/Modal";

function App() {
  return (
    <div className="wrapper">
      {/* <Modal>
        <p>화이팅!!♥♥♥</p>
        <p>당신의 꿈을 응원합니다!</p>
        <img src="/images/licat.png" alt="" />
        <Button color="#FCEE21" text="종료하고 진짜 훈련하러 가기 GO!GO!" />
      </Modal> */}
      <div className={styles.logo}>
        <img src="/images/logo.png" alt="" />
      </div>

      <h2 className={styles.mainTitle}>
        “연습은 어제의 당신보다 당신을 더 낫게 만든다.”
      </h2>
      <p className={styles.mainText}>
        <img className={styles.quotes} src="images/quotes.svg" alt=""/>
        <span>1만 시간의 법칙</span>은<br />
        어떤 분야의 전문가가 되기 위해서는
        <br />
        최소한 1만 시간의 훈련이 필요하다는 법칙이다.
      </p>

      <div>
        <p>
          나는
          <Input placeholder="예)프로그래밍" />
          전문가가 될 것이다.
        </p>
        <p>
          그래서 앞으로 매일 하루에
          <Input placeholder="예)5시간" />
          시간씩 훈련할 것이다.
        </p>
      </div>

      <div>
        <Button
          color="#FCEE21"
          text="나는 며칠 동안 훈련을 해야 1만 시간이 될까?"
        />
        <img src="/images/click.svg" alt="" />
      </div>

      <section>
        <p>
          당신은 <span>프로그래밍</span> 전문가가 되기 위해서
        </p>
        <p>
          대략 <span>1000</span>일 이상 훈련하셔야 합니다! :){" "}
        </p>
        <div>
          <Button color="#FCEE21" text="훈련하러 가기 GO!GO!" />
          <Button color="#FFFFFF" text="공유하기" />
        </div>
      </section>
    </div>
  );
}
export default App;
