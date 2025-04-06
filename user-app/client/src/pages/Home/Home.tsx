import { useState, useEffect } from "react";

import { getCookieValue } from "../../util/util";
import HomeLoggedIn from "./HomeLoggedIn";
import HomeNotLoggedIn from "./HomeNotLoggedIn";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    console.log("Checking cookies...");

    const userCookie = getCookieValue("user");
    console.log(userCookie);

    if (userCookie) setIsLoggedIn(true);
  }, []);

  return (
    <>
      <h1>Home</h1>
      {isLoggedIn ? <HomeLoggedIn /> : <HomeNotLoggedIn />}
    </>
  );
}
