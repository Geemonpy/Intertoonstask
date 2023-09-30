import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Footer, Navbar } from "../components";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async() => {
    const URL = "http://caffa.smsoman.com/api/V1/integration/customer/token"
    let response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer EqzC2SPUcFRrrJKKL4ngAGAnZDIN8ZLS",
      },
      body: JSON.stringify({
        username: userName,
        password
      }),

    })

    if (response.ok) {
      // If login is successful, get the JWT token from the response
      const { data } = await response.json();

      // Store the token in local storage
      localStorage.setItem("token", data.api_token);

      window.location.href="/"

      
    } else {
      alert("failed to login")
    }

     
  }

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Login</h1>
        <hr />
        <div class="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form onSubmit={(e) => e.preventDefault()}>
              <div class="my-3">
                <label for="display-4">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <div class="my-3">
                <label for="floatingPassword display-4">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="my-3">
                <p>New Here? <Link to="/register" className="text-decoration-underline text-info">Register</Link> </p>
              </div>
              <div className="text-center">
                <button class="my-2 mx-auto btn btn-dark" type="button" onClick={onLogin}>
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
