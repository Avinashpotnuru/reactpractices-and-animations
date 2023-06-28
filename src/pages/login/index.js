import React, { useState } from "react";
import Cookies from "js-cookie";

import { useRouter } from "next/router";

const LoginPage = () => {
  const router = useRouter();

  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const handleLogin = (e) => {
    e.preventDefault();

    Cookies.set("userPhoneNum", phone, { expires: 10 });
    Cookies.set("userPassword", password, { expires: 10 });

    const passwordFromBrowser = Cookies.get("userPassword");
    console.log(passwordFromBrowser);
    const userPhoneNumBrowser = Cookies.get("userPhoneNum");
    console.log(userPhoneNumBrowser);
    // Simulating login logic
    if (
      userPhoneNumBrowser === "avinash" &&
      passwordFromBrowser === "7569010889"
    ) {
      setLoggedIn(true);
      router.push("/");
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);

    Cookies.remove("userPassword");
    Cookies.remove("userPhoneNum");

    setPhone("");
    setPassword("");
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      {loggedIn ? (
        <div>
          <h2>Welcome, {phone}!</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <form onSubmit={handleLogin}>
          <h2>Login</h2>
          <label>
            Name:
            <input
              type="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
};

export default LoginPage;
