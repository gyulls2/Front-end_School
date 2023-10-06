import { useState } from "react";
import JoinPage from "./Components/JoinPage";
import LoginPage from "./Components/LoginPage";

function App() {
  const [page, setPage] = useState(true);
  const [userInfo, setUserInfo] = useState({
    accountname: "",
    followerCount: 0,
    followingCount: 0,
    image: "",
    intro: "",
    username: "",
  });

  const handlePage = () => {
    setPage((prevPage) => !prevPage);
  };
  const getMyinfo = async () => {
    const token = localStorage.getItem("token");
    const res = await fetch("https://api.mandarin.weniv.co.kr/user/myinfo", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const json = await res.json();
    setUserInfo({
      accountname: json.user.accountname,
      followerCount: json.user.followerCount,
      followingCount: json.user.followingCount,
      image: json.user.image,
      intro: json.user.intro,
      username: json.user.username,
    });
  };

  return (
    <div>
      <button type="button" onClick={getMyinfo}>
        내 정보 불러오기
      </button>
      {userInfo.accountname && (
        <div>
          accountname : {userInfo.accountname}
          <br />
          followerCount : {userInfo.followerCount}
          <br />
          followingCount : {userInfo.followingCount}
          <br />
          image : <img src={userInfo.image} alt="" />
          <br />
          intro : {userInfo.intro}
          <br />
          username : {userInfo.username}
          <br />
        </div>
      )}
      {page ? (
        <LoginPage handlePage={handlePage} />
      ) : (
        <JoinPage handlePage={handlePage} />
      )}
    </div>
  );
}
export default App;
