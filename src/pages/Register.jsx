import React from 'react'
import { useState } from 'react';
import { Footer, Navbar } from "../components";
import { Link } from 'react-router-dom';
const Register = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneno, setPhoneno] = useState("");
    const [password, setPassword] = useState("");

    const onRegister = async() => {
        const URL = "http://caffa.smsoman.com/api/V1/customers"
        let data = await fetch(URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer EqzC2SPUcFRrrJKKL4ngAGAnZDIN8ZLS",
          },
          body: JSON.stringify({
            first_name: firstName,
            last_name: lastName,
            phone: phoneno,
            email: email,
             password
          }),

          
    
        })
        if(data.status !== 200) {
            alert("Login Failed ..Enter 8 digit Mobile number and Minimum 6 digit Password")
            return;
        }
        data = await data.json();
        console.log(data, "Test")
        window.location.href="/login"
        alert(" Registration sucess")
      }



    return (
        <>
            <Navbar />
            <div className="container my-3 py-3">
                <h1 className="text-center">Register</h1>
                <hr />
                <div class="row my-4 h-100">
                    <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
                        <form>
                            <div class="form my-3">
                                <label for="Name">Full Name</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="Name"
                                    placeholder="Enter Your Name"
                                    value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                                />
                            </div>
                            <div class="form my-3">
                                <label for="Name">Last Name</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="Name"
                                    placeholder="Enter Your Name"
                                    value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>
                            <div class="form my-3">
                                <label for="Email">Email address</label>
                                <input
                                    type="email"
                                    class="form-control"
                                    id="Email"
                                    placeholder="name@example.com"
                                    value={email}
                  onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div class="form my-3">
                                <label for="Name">Phone number</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="Name"
                                    placeholder="Enter Your Phone number"
                                    value={phoneno}
                  onChange={(e) => setPhoneno(e.target.value)}
                                />
                            </div>
                            <div class="form  my-3">
                                <label for="Password">Password</label>
                                <input
                                    type="password"
                                    class="form-control"
                                    id="Password"
                                    placeholder="Password"
                                    value={password}
                  onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="my-3">
                                <p>Already has an account? <Link to="/login" className="text-decoration-underline text-info">Login</Link> </p>
                            </div>
                            <div className="text-center">
                                <button class="my-2 mx-auto btn btn-dark" type="button" onClick={onRegister} >
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Register