import React, { useState, useEffect } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  useEffect(() => {  // 모든 컴포넌트 재평가 후 실행  // 로그인화면으로 돌아가지 않음.
  // 무한루프 가능. 이럴 때 useEffect-> 필요할때만 실행
  const storedUserLogInInf = localStorage.getItem("isLoggedIn");
  if (storedUserLogInInf === "1") {
    setIsLoggedIn(true); // 사용자를 login으로 설정가능.
  }

  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn')
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
