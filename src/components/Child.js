import React from "react";

const Child= ({ isLoggedIn, setIsLoggedIn }) => {
  function handleSubmit(e){
    e.preventDefault();
    setIsLoggedIn(!isLoggedIn);
  }

  return (
    <div>
      <form className={isLoggedIn ? "hide" : "child"}>
        <div>
          <label htmlFor="userName">Username:</label>
          <input type="text" id="userName" className="userName"/>
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" className="password"/>
        </div>
        <button type="submit" onClick={handleSubmit}>Login</button>
      </form> 
      <p className={isLoggedIn ? "show" : "hide"}>You are logged in!</p>
    </div>
  );
};

export default Child;
